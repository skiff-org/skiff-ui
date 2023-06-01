import './Surface.scss';

import { AnimatePresence, motion, usePresence } from 'framer-motion';
import React, { ForwardedRef, MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { SIZE_HEIGHT } from '../../constants';
import { useOnClickOutside, useOnEscapePress } from '../../hooks';
import { DISPLAY_SCROLLBAR_CSS } from '../../styles';
import { themeNames } from '../../theme';
import { MouseClickEvents, Size, ThemeMode } from '../../types';
import Portal from '../Portal';

import { MouseSafeArea } from './MouseSafeArea/MouseSafeArea';
import {
  ALWAYS_IGNORED_OFFCLICK_CLASSES,
  DROPDOWN_GAP,
  MODAL_AND_DROPDOWN_SELECTOR,
  MODAL_CLASSNAME,
  OPTION_MENU_CLASSNAME,
  SCRIM_CLASSNAME,
  SURFACE_CLASSNAME,
  SURFACE_ENTRANCE_EXIT_TRANSITION_TIME
} from './Surface.constants';

export const optionMenuPadding = 4;

const getLevelStyles = (level: 'l0' | 'l1' | 'l2' | 'l3', forceTheme?: ThemeMode) => {
  switch (level) {
    case 'l3':
      return {
        solidBackground: forceTheme ? themeNames[forceTheme]['--bg-l3-solid'] : 'var(--bg-l3-solid)',
        glassBackground: forceTheme ? themeNames[forceTheme]['--bg-l3-glass'] : 'var(--bg-l3-glass)',
        boxShadow: forceTheme ? themeNames[forceTheme]['--shadow-l3'] : 'var(--shadow-l3)',
        position: 'relative'
      };
    case 'l2':
      return {
        solidBackground: forceTheme ? themeNames[forceTheme]['--bg-l2-solid'] : 'var(--bg-l2-solid)',
        glassBackground: forceTheme ? themeNames[forceTheme]['--bg-l2-glass'] : 'var(--bg-l2-glass)',
        boxShadow: forceTheme ? themeNames[forceTheme]['--shadow-l2'] : 'var(--shadow-l2)',
        position: 'absolute'
      };
    case 'l1':
      return {
        solidBackground: forceTheme ? themeNames[forceTheme]['--bg-l1-solid'] : 'var(--bg-l1-solid)',
        glassBackground: forceTheme ? themeNames[forceTheme]['--bg-l1-glass'] : 'var(--bg-l1-glass)',
        boxShadow: 'none',
        position: 'inherit'
      };
    case 'l0':
    default:
      return {
        solidBackground: forceTheme ? themeNames[forceTheme]['--bg-l0-solid'] : 'var(--bg-l0-solid)',
        glassBackground: forceTheme ? themeNames[forceTheme]['--bg-l0-glass'] : 'var(--bg-l0-glass)',
        boxShadow: 'none',
        position: 'inherit'
      };
  }
};

const getWidthFromSize = (
  size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen'
) => {
  switch (size) {
    case 'xsmall':
      return '320px';
    case 'small':
      return '384px';
    case 'normal':
      return '448px';
    case 'large':
      return '512px';
    case 'xlarge':
      return '768px';
    case 'xxlarge':
      return '1200px';
    case 'full-screen':
      return '100vw';
    case 'full-width':
    default:
      return '100%';
  }
};

const getHeightFromSize = (
  size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen'
) => {
  switch (size) {
    case 'full-screen':
      return '100vh';
    default:
      return 'auto';
  }
};

const getMaxWidthFromSize = (
  size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen'
) => {
  switch (size) {
    case 'full-screen':
      return '100vw';
    default:
      return '95vw';
  }
};

export const StyledSurface = styled.div<{
  level: 'l0' | 'l1' | 'l2' | 'l3';
  size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen';
  forceTheme?: ThemeMode;
  $maxWidth?: number;
  $minWidth?: number;
  $width?: number;
}>`
  ${DISPLAY_SCROLLBAR_CSS}

  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 8px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid
    ${(props) => {
      if (props.size === 'full-screen') {
        return 'none';
      }
      return props.forceTheme ? themeNames[props.forceTheme]['--border-secondary'] : 'var(--border-secondary)';
    }};
  z-index: 999;
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px !important` : '185px')};
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px !important` : getMaxWidthFromSize(props.size))};
  &.padding {
    padding: 20px;
  }
  &.noPadding {
    padding: 0px !important;
  }
  &.optionMenu {
    padding: ${optionMenuPadding}px;
    gap: 0px;
  }
  &.modal {
    gap: 16px;
  }
  &.input {
    gap: 16px;
    padding: 16px;
    border-radius: 8px;
  }
  &.hoverEffect:hover {
    border: 1px solid ${(props) => getLevelStyles(props.level, props.forceTheme).solidBackground};
    cursor: pointer;
  }
  &.solid {
    background: ${(props) => getLevelStyles(props.level, props.forceTheme).solidBackground};
  }
  &.solid.dark {
    background: ${(props) => (props.forceTheme ? themeNames[props.forceTheme]['--bg-emphasis'] : 'var(--bg-emphasis)')};
  }
  &.glass {
    background: ${(props) => getLevelStyles(props.level, props.forceTheme).glassBackground};
  }
  box-shadow: ${(props) => getLevelStyles(props.level, props.forceTheme).boxShadow};
  &.disableShadow {
    box-shadow: none;
  }
  position: ${(props) => getLevelStyles(props.level, props.forceTheme).position};
  width: ${(props) => {
    if (props.$width) return `${props.$width}px !important;`;
    return `${getWidthFromSize(props.size)};`;
  }};
  height: ${(props) => getHeightFromSize(props.size)};
  &.hug {
    max-width: ${(props) => (props.size !== 'full-width' ? getWidthFromSize(props.size) : '')};
    min-width: 112px;
    width: unset;
  }
`;

export interface SurfaceProps {
  /** The elevation of the Surface */
  level?: 'l0' | 'l1' | 'l2' | 'l3';
  /** The width of the Surface */
  size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen';
  /** The size is a max-width instead of width */
  hug?: boolean;
  /** Surface child component */
  children?: React.ReactNode;
  /** Place scrim behind the surface (l3 only) */
  scrim?: boolean;
  /** Add close button to top right corner */
  showClose?: boolean;
  optionMenu?: boolean; // option padding for dropdowns
  modal?: boolean; // modal padding for dialog
  input?: boolean;
  open?: boolean;
  dataTest?: string;
  hoverEffect?: boolean;
  onClose?: () => void;
  glass?: boolean; // glass effect
  style?: React.CSSProperties;
  padding?: boolean;
  className?: string;
  forceTheme?: ThemeMode;
  classesToIgnore?: string[];
  disableShadow?: boolean;
  buttonRef?: MutableRefObject<HTMLDivElement | null>;
  subMenuOpenRight?: boolean;
  setSurfaceRect?: (arg: { width: number; height: number; x: number; y: number }) => void;
  zIndex?: number;
  clickOutsideWebListener?: MouseClickEvents;
  /** Custom height of surface wrapper (e.g. for custom vertical alignment) */
  customWrapperHeight?: string | number;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
}

function Surface(
  {
    level = 'l1',
    size = 'normal',
    onClose,
    open = true,
    optionMenu,
    modal,
    input,
    children,
    hoverEffect,
    dataTest,
    scrim,
    glass,
    style,
    padding = true,
    className = '',
    hug = false,
    forceTheme,
    classesToIgnore = [],
    disableShadow,
    buttonRef,
    subMenuOpenRight,
    setSurfaceRect,
    zIndex,
    clickOutsideWebListener,
    customWrapperHeight,
    width,
    minWidth,
    maxWidth
  }: SurfaceProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [showSurface, setShowSurface] = useState(true);
  // for sub-menus
  // the amount by which the sub-menu will shift if it overflows in Y
  const [yShift, setYShift] = useState<number>(0);
  // whether or not the safe area is hovered over
  const [isInSafeArea, setIsInSafeArea] = useState(false);
  // the surface is a sub-menu if its opening direction is indicated
  const isSubMenu = subMenuOpenRight !== undefined;
  const [isPresent, safeToRemove] = usePresence();

  // handle outside clicks
  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

  const onCloseSurface = () => {
    if (!!onClose) onClose();
    else setShowSurface(false);
  };

  // we delay unmounting for the time needed by the exit animation
  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, SURFACE_ENTRANCE_EXIT_TRANSITION_TIME);
  }, [isPresent, safeToRemove]);

  useEffect(() => {
    if (!wrapperRef?.current || !setSurfaceRect) return;
    setSurfaceRect({
      width: wrapperRef.current?.clientWidth || 0,
      height: wrapperRef.current?.clientHeight || 0,
      x: wrapperRef.current.getBoundingClientRect().x || 0,
      y: wrapperRef.current.getBoundingClientRect().y || 0
    });
    // reset surfaceRect state on unmount
    return () => {
      if (!!setSurfaceRect) setSurfaceRect({ width: 0, height: 0, x: 0, y: 0 });
    };
  }, [wrapperRef, buttonRef, setSurfaceRect]);
  // close the sub-menu if the cursor moves away from the safe area
  useEffect(() => {
    if (!open && !showSurface && !isInSafeArea) onCloseSurface();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, showSurface, isInSafeArea]);

  useEffect(() => {
    const isSubMenuOpen = isSubMenu && open && showSurface;
    if (!isSubMenuOpen || !buttonRef || !wrapperRef) return;
    const buttonBottom = buttonRef.current?.getBoundingClientRect()?.bottom || 0;
    const surfaceHeight = wrapperRef.current?.clientHeight || 0;
    const surfaceBottom = buttonBottom + surfaceHeight - 44;
    // check if the sub-menu overflows in Y
    const overflowY = surfaceBottom + DROPDOWN_GAP > window.innerHeight;
    // if it overflows in Y, shift it to the top
    if (overflowY) {
      if (typeof window === 'undefined') return;
      const requiredShift = window.innerHeight - surfaceBottom - DROPDOWN_GAP;
      // if the shifting amount will shift the sub-menu passed the bottom edge of the button
      // align the lower edge of the sub-menu with the lower edge of the button
      // otherwise, shift normally
      if (surfaceBottom + requiredShift < buttonBottom) {
        const dropdownItemHeight = SIZE_HEIGHT[Size.MEDIUM];
        setYShift(-surfaceHeight + dropdownItemHeight + optionMenuPadding);
      } else setYShift(requiredShift);
    } else {
      // if it doesn't overflow, reset shifting amount
      setYShift(0);
    }
  }, [buttonRef, isSubMenu, open, showSurface, wrapperRef]);

  useOnClickOutside(
    wrapperRef,
    () => {
      onCloseSurface();
    },
    [...ALWAYS_IGNORED_OFFCLICK_CLASSES, ...classesToIgnore],
    { web: clickOutsideWebListener },
    [buttonRef]
  );

  // close on escape for dropdowns and modals
  useOnEscapePress(wrapperRef, MODAL_AND_DROPDOWN_SELECTOR, onCloseSurface);

  const renderSurface = () => (
    <div
      ref={ref}
      style={{
        transform: yShift ? `translateY(${yShift}px)` : undefined,
        width: '100%',
        height: customWrapperHeight
      }}
    >
      {isSubMenu && (
        <MouseSafeArea openRight={subMenuOpenRight} parentRef={wrapperRef} setIsInSafeArea={setIsInSafeArea} />
      )}
      <StyledSurface
        level={level}
        size={size}
        ref={wrapperRef}
        className={`${SURFACE_CLASSNAME} ${glass ? 'glass' : 'solid'} ${disableShadow ? 'disableShadow' : ''} ${
          padding ? 'padding' : 'noPadding'
        } ${!!optionMenu ? OPTION_MENU_CLASSNAME : ''} ${modal ? MODAL_CLASSNAME : ''} ${input ? 'input' : ''} ${
          hoverEffect ? 'hoverEffect' : ''
        } ${className} ${hug ? 'hug' : ''} ${forceTheme ? forceTheme : ''}`}
        style={style}
        data-test={dataTest}
        forceTheme={forceTheme}
        $width={width}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
      >
        {children}
      </StyledSurface>
    </div>
  );

  if (!showSurface) return null;

  if (scrim && level === 'l3') {
    return (
      <Portal>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: SURFACE_ENTRANCE_EXIT_TRANSITION_TIME / 1000 }}
              className={SCRIM_CLASSNAME}
              style={{ zIndex: zIndex }}
            >
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ ease: [0.16, 1, 0.3, 1], duration: SURFACE_ENTRANCE_EXIT_TRANSITION_TIME / 1000 }}
                className='mobile-avoiding-keyboard'
              >
                {renderSurface()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    );
  } else {
    return <>{open && renderSurface()}</>;
  }
}

export default React.forwardRef<HTMLDivElement, SurfaceProps>(Surface);
