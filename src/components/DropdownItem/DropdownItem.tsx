import React, { ForwardedRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

import { SIZE_HEIGHT } from '../../constants';
import { themeNames } from '../../theme';
import { Size, ThemeMode } from '../../types';
import Icons, { Icon } from '../Icons';
import IconText from '../IconText/IconText';
import { ICON_TEXT_ICON_SIZE } from '../IconText/IconText.constants';
import { TypographyWeight } from '../Typography';

import { DROPDOWN_ITEM_ICON_CSS } from './DropdownItem.styles';
import { DropdownItemProps, DropdownItemSize } from './DropdownItem.types';

const DropdownItemContainer = styled.div<{
  $clickable: boolean;
  $hovering: boolean;
  $size: DropdownItemSize;
  $hideDivider?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  padding: 8px;
  box-sizing: border-box;

  width: 100%;
  border-radius: 6px;
  height: ${(props) => SIZE_HEIGHT[props.$size]}px;

  ${({ $hideDivider }) =>
    isMobile &&
    css`
      padding: 16px;
      height: 56px !important;
      box-sizing: border-box;
      border-bottom: 1px solid ${$hideDivider === false ? themeNames.dark['--border-tertiary'] : 'transparent'};
    `}

  ${(props) => {
    // Non-interactive dropdown item
    if (!props.$clickable) return 'cursor: default;';
    // Interactive dropdown item
    return `
      cursor: pointer;
      background: ${props.$hovering ? themeNames.dark['--bg-cell-hover'] : 'transparent'};
    `;
  }};
`;

const DropdownItemHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  min-width: 0px;
  flex: 1;
`;

const IconTextContainer = styled.div`
  min-width: 0px;
  ${DROPDOWN_ITEM_ICON_CSS}
`;

const DropdownItemTail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const Label = styled.div<{ $hovering: boolean }>`
  opacity: ${(props) => (props.$hovering ? 1 : 0.9)};
`;

const IconContainer = styled.div`
  ${DROPDOWN_ITEM_ICON_CSS}
`;

function DropdownItem(
  {
    label,
    active = false,
    color = 'primary',
    customLabel,
    dataTest,
    disabled = false,
    endElement,
    hideDivider,
    highlight,
    onHover,
    icon,
    iconColor,
    scrollIntoView = false,
    size = Size.MEDIUM,
    startElement,
    onClick
  }: DropdownItemProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [hover, setHover] = useState(false);
  // Dropdown item ref
  // Used to scroll dropdown item into view in case a ref wasn't already forwarded
  const dropdownItemRef = useRef<HTMLDivElement>(null);

  const clickable = !!onClick && !disabled;
  const contentColor = disabled ? 'disabled' : color;
  const forceTheme = ThemeMode.DARK;
  const iconTextSize = isMobile ? Size.LARGE : Size.MEDIUM;
  const iconSize = ICON_TEXT_ICON_SIZE[iconTextSize];
  const hovering = (highlight === undefined && hover) || !!highlight;

  const onDropdownItemClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!clickable) return;
    // Prevent mouse event from bubbling up to the parent
    // Important for Calendar where mousedown events are registered on the calendar
    e.preventDefault();
    e.stopPropagation();
    void onClick(e);
  };

  const renderLabel = () => customLabel ?? <Label $hovering={hovering}>{label}</Label>;

  // Scrolls the dropdown item into view
  useEffect(() => {
    if (
      (!ref && !dropdownItemRef) ||
      (!scrollIntoView && !highlight) ||
      // Since a defined highlight prop means that keyboard navigation is currently active
      // highlight === false means that another item in the dropdown is currently highlighted
      // so we don't scroll the current item into view even if the scrollIntoView prop is true
      (scrollIntoView && highlight === false)
    )
      return;
    const mutableRef = ref ? (ref as MutableRefObject<HTMLDivElement>) : dropdownItemRef;
    const target = mutableRef.current;
    // Do nothing if the item was highlighted on hover
    if (!target || (highlight && target.matches(':hover'))) return;

    // We check for highlight first in case keyboard navigation is currently active
    // so we'd only want to scroll the current item to nearest instead of to center
    target.scrollIntoView({ block: highlight ? 'nearest' : 'center' });
  }, [ref, dropdownItemRef, highlight, scrollIntoView]);

  return (
    <DropdownItemContainer
      data-test={dataTest}
      onClick={onDropdownItemClick}
      ref={ref ?? dropdownItemRef}
      $clickable={clickable}
      $hovering={hovering}
      $size={size}
      $hideDivider={hideDivider}
      onMouseOver={() => {
        if (!clickable) return;
        setHover(true);
        if (onHover) onHover();
      }}
      onMouseLeave={() => {
        if (!clickable) return;
        setHover(false);
      }}
      // Prevent mouse event from bubbling up to the parent
      // Important for Calendar where mousedown events are registered on the calendar
      onMouseUp={(e) => {
        if (!clickable) return;
        e.preventDefault();
        e.stopPropagation();
      }}
      onMouseDown={(e) => {
        if (!clickable) return;
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <DropdownItemHeader>
        {startElement}
        <IconTextContainer $hovering={hovering}>
          <IconText
            color={contentColor}
            iconColor={iconColor}
            label={renderLabel()}
            size={iconTextSize}
            startIcon={icon}
            weight={TypographyWeight.REGULAR}
            forceTheme={forceTheme}
          />
        </IconTextContainer>
      </DropdownItemHeader>
      {(active || (!!endElement && !isMobile)) && (
        <DropdownItemTail>
          {active && (
            <IconContainer $hovering={hovering}>
              <Icons icon={Icon.Check} size={iconSize} color={contentColor} forceTheme={forceTheme} />
            </IconContainer>
          )}
          {!isMobile && endElement}
        </DropdownItemTail>
      )}
    </DropdownItemContainer>
  );
}

export default React.forwardRef<HTMLDivElement, DropdownItemProps>(DropdownItem);
