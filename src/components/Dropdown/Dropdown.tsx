import React, { ForwardedRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useKeyboardNavigation } from '../../hooks';
import { themeNames } from '../../theme';
import { ThemeMode } from '../../types';
import BackgroundBlocker from '../../utils/BackgroundBlocker';
import { SUBMENU_OVERLAP } from '../DropdownSubmenu/DropdownSubmenu.constants';
import Portal from '../Portal';
import Surface, { DROPDOWN_CALLER_CLASSNAME } from '../Surface';
import { optionMenuPadding } from '../Surface/Surface';

import { DROPDOWN_CALLER_ID, SUBMENU_CONTAINER_CLASS } from './Dropdown.constants';
import { ANCHORED_DROPDOWN_CSS, HIDE_MOUSE_CSS, NON_ANCHORED_DROPDOWN_CSS } from './Dropdown.styles';
import { DropdownAnchor, DropdownProps, SurfaceRect } from './Dropdown.types';
import { getNonPortalPosition, getPortalPosition, overflowsInX, overflowsInY } from './Dropdown.utils';

const DropdownContainer = styled.div`
  position: relative;
  width: 0px;
  z-index: 99999999;
`;

const SurfaceContainer = styled.div<{
  $anchor: { top?: number; bottom?: number; left?: number; right?: number };
  $hideMouse: boolean;
  $isAnchored: boolean;
  $defaultLeft?: number;
  $defaultTop?: number;
  $width?: number | string;
  $zIndex?: number;
}>`
  z-index: ${({ $zIndex }) => $zIndex ?? '99999999'};
  ${({ $width }) => $width && `width: ${typeof $width === 'string' ? $width : `${$width}px`};`}
  ${({ $hideMouse }) => $hideMouse && HIDE_MOUSE_CSS}
  ${({ $isAnchored }) => ($isAnchored ? ANCHORED_DROPDOWN_CSS : NON_ANCHORED_DROPDOWN_CSS)};
`;

const StyledSurface = styled(Surface)<{
  $maxHeight?: number | string;
}>`
  background: ${themeNames.dark['--bg-l3-solid']} !important;

  ${({ $maxHeight }) =>
    $maxHeight &&
    `
      max-height: ${typeof $maxHeight === 'string' ? $maxHeight : `${$maxHeight}px`};
      overflow: auto;
    `}
`;

function Dropdown(
  {
    children,
    buttonRef,
    className,
    clickOutsideWebListener,
    customAnchor,
    dataTest,
    fullWidth = false,
    gapFromAnchor = 0,
    highlightedIdx,
    isSubmenu = false,
    maxHeight,
    maxWidth,
    minWidth,
    noPadding = false,
    numChildren = 0,
    portal = false,
    showDropdown = true,
    width,
    zIndex,
    setHighlightedIdx,
    setShowDropdown
  }: DropdownProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  /** States */
  // Dropdown anchor
  const [anchor, setAnchor] = useState<DropdownAnchor>({});
  // Current dropdown positions
  const [currSurfaceRect, setCurrSurfaceRect] = useState<SurfaceRect>({ width: 0, height: 0, x: 0, y: 0 });
  // If the dropdown is a submenu, this state indicates whether it opens to the right or to the left
  const [submenuOpenRight, setSubmenuOpenRight] = useState<boolean | undefined>(undefined);

  /** Custom hooks */
  // Handles keyboard navigation
  const hideMouse = useKeyboardNavigation(!showDropdown, numChildren, highlightedIdx, setHighlightedIdx);

  // Classes to ignore on outside click
  const classesToIgnore = [SUBMENU_CONTAINER_CLASS];
  // Current parent button positions
  const currButtonRect = buttonRef?.current?.getBoundingClientRect();
  // Extracted parent button positions and dimensions
  const {
    top: currButtonRectTop,
    left: currButtonRectLeft,
    width: currButtonRectWidth,
    height: currButtonRectHeight
  } = currButtonRect || {};
  // Extracted dropdown positions and dimensions
  const { x: currSurfaceX, y: currSurfaceY, width: currSurfaceWidth, height: currSurfaceHeight } = currSurfaceRect;
  // Default left position for an anchored dropdown
  const defaultDropdownLeft = currButtonRectLeft || 0;
  // Default top position for an anchored dropdown
  const defaultDropdownTop = (currButtonRectTop || 0) + (currButtonRectHeight || 0);

  const getCustomAnchor = useCallback(() => {
    let top: number | undefined = undefined;
    let left: number | undefined = undefined;
    let right: number | undefined = undefined;

    const customAnchorX = customAnchor?.x || 0;
    const customAnchorY = customAnchor?.y || 0;

    // Whether dropdown overflows in x/y
    const overflowX = overflowsInX(customAnchorX, currSurfaceWidth);
    const overflowY = overflowsInY(customAnchorY, currSurfaceHeight);

    if (portal) {
      // Custom anchors have no dimensions
      const portalPositions = getPortalPosition(
        0,
        customAnchorX,
        customAnchorX,
        customAnchorY,
        currSurfaceHeight,
        currSurfaceWidth,
        gapFromAnchor,
        overflowX,
        overflowY
      );

      left = portalPositions.left;
      top = portalPositions.top;
    } else {
      const nonPortalPositions = getNonPortalPosition(0, currSurfaceWidth, overflowX);
      right = nonPortalPositions.right;
    }

    return { top, left, right };
  }, [currSurfaceHeight, currSurfaceWidth, customAnchor?.x, customAnchor?.y, gapFromAnchor, portal]);

  const getButtonAnchor = useCallback(() => {
    let top: number | undefined = undefined;
    let left: number | undefined = undefined;
    let right: number | undefined = undefined;

    // Ref may change between renders, so we need to instantiate here in the function
    // rather than rely on the component-scoped const
    const buttonRect = buttonRef?.current?.getBoundingClientRect();
    const {
      top: buttonRectTop = 0,
      left: buttonRectLeft = 0,
      right: buttonRectRight = 0,
      width: buttonRectWidth = 0,
      height: buttonRectHeight = 0
    } = buttonRect || {};

    // Whether dropdown overflows in x/y
    const overflowX = isSubmenu
      ? overflowsInX(buttonRectLeft + buttonRectWidth, currSurfaceWidth)
      : overflowsInX(currSurfaceX, currSurfaceWidth);
    const overflowY = overflowsInY(currSurfaceY, currSurfaceHeight);

    if (portal) {
      if (isSubmenu) {
        left = overflowX
          ? buttonRectLeft - currSurfaceWidth - optionMenuPadding + SUBMENU_OVERLAP
          : buttonRectRight + optionMenuPadding - SUBMENU_OVERLAP;
        top = buttonRectTop - optionMenuPadding;
        setSubmenuOpenRight(!overflowX);
      } else {
        const portalPositions = getPortalPosition(
          buttonRectHeight,
          buttonRectLeft,
          buttonRectRight,
          buttonRectTop,
          currSurfaceHeight,
          currSurfaceWidth,
          gapFromAnchor,
          overflowX,
          overflowY
        );

        left = portalPositions.left;
        top = portalPositions.top;
      }
    } else {
      const nonPortalPosition = getNonPortalPosition(buttonRectWidth, currSurfaceWidth, overflowX);
      right = nonPortalPosition.right;
    }

    return { top, left, right };
  }, [buttonRef, isSubmenu, currSurfaceWidth, currSurfaceX, currSurfaceY, currSurfaceHeight, portal, gapFromAnchor]);

  useEffect(() => {
    // Do nothing if rect position and dimensions haven't been retrieved yet
    if (
      (!currSurfaceX && !currSurfaceY && !currSurfaceWidth && !currSurfaceHeight) ||
      !!anchor.top ||
      !!anchor.bottom ||
      !!anchor.left ||
      !!anchor.left
    )
      return;

    // Only set an anchor if there is a parent button to set it to
    // or if a custom anchor is passed
    if (!!customAnchor || !!buttonRef) {
      let newAnchor: DropdownAnchor = {};
      if (!!customAnchor) newAnchor = getCustomAnchor();
      else newAnchor = getButtonAnchor();
      setAnchor(newAnchor);
    }
  }, [
    getButtonAnchor,
    currSurfaceRect,
    currSurfaceY,
    currSurfaceX,
    currSurfaceHeight,
    currSurfaceWidth,
    customAnchor,
    getCustomAnchor,
    anchor.top,
    anchor.bottom,
    anchor.left,
    anchor.right,
    buttonRef
  ]);

  // Reset anchor
  useEffect(() => {
    if (!showDropdown) setAnchor({});
  }, [showDropdown]);

  if (!showDropdown) return null;

  const renderMenu = () => (
    <SurfaceContainer
      className={className}
      id={DROPDOWN_CALLER_CLASSNAME}
      $anchor={anchor}
      $width={fullWidth ? currButtonRectWidth : undefined}
      $zIndex={zIndex}
      $defaultLeft={defaultDropdownLeft}
      $defaultTop={defaultDropdownTop}
      $isAnchored={!!buttonRef || !!customAnchor}
      $hideMouse={hideMouse}
    >
      <StyledSurface
        buttonRef={buttonRef}
        classesToIgnore={classesToIgnore}
        hug={!fullWidth}
        level='l2'
        open={showDropdown}
        onClose={(e?: React.MouseEvent) => {
          e?.stopPropagation();
          setShowDropdown(false);
          // Reset highlighted index
          setHighlightedIdx?.(0);
        }}
        subMenuOpenRight={submenuOpenRight}
        optionMenu
        size='full-width'
        setSurfaceRect={setCurrSurfaceRect}
        clickOutsideWebListener={clickOutsideWebListener}
        padding={!noPadding}
        width={width}
        minWidth={minWidth}
        maxWidth={maxWidth}
        forceTheme={ThemeMode.DARK}
        $maxHeight={maxHeight}
      >
        {children}
      </StyledSurface>
    </SurfaceContainer>
  );

  const renderDropdownContainer = () => (
    <DropdownContainer data-test={dataTest} id={DROPDOWN_CALLER_ID} ref={ref}>
      {portal ? <Portal>{renderMenu()}</Portal> : renderMenu()}
    </DropdownContainer>
  );

  return portal && !isSubmenu ? (
    // Block background actions for primary dropdowns that are portal'd in
    <BackgroundBlocker>{renderDropdownContainer()}</BackgroundBlocker>
  ) : (
    renderDropdownContainer()
  );
}

export default React.forwardRef<HTMLDivElement, DropdownProps>(Dropdown);
