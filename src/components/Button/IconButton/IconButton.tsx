import { motion } from 'framer-motion';
import * as React from 'react';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

import { SIZE_HEIGHT } from '../../../constants';
import { SQUARE_CSS } from '../../../styles';
import { Size, ThemeMode, Type } from '../../../types';
import Icons, { IconColor } from '../../Icons';
import KeyCodeSequence from '../../KeyCodeSequence';
import Tooltip from '../../Tooltip';
import { TooltipContent, TooltipTrigger } from '../../Tooltip/Tooltip';
import { BUTTON_ICON_SIZE, BUTTON_TYPE_COLOR } from '../Button.constants';
import { BUTTON_TYPE_CONTAINER_CSS } from '../Button.styles';

import { BUTTON_SIZE_BORDER_RADIUS, IconButtonProps, IconButtonType } from './IconButton.constants';
import { GHOST_ICON_BUTTON_CSS } from './IconButton.styles';

const TooltipWithShortcut = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const IconButtonContainer = styled.div<{
  $borderRadius: number;
  $floatRight: boolean;
  $size: number;
  $type: IconButtonType;
  $filled: boolean;
  $forceTheme?: ThemeMode;
  $fullHeight?: boolean;
}>`
  box-sizing: border-box;
  background: transparent;
  cursor: pointer;
  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.$borderRadius}px;

  ${(props) => (props.$filled ? BUTTON_TYPE_CONTAINER_CSS : GHOST_ICON_BUTTON_CSS)}

  ${(props) => (props.$floatRight ? 'margin-left: auto;' : '')}
  ${(props) =>
    !!props.$fullHeight
      ? css`
          aspect-ratio: 1;
          height: 100%;
        `
      : SQUARE_CSS}

  ${isMobile &&
  css`
    transition: background 0.2s;

    &:active,
    &.active {
      transition: background 0s;
    }
  `}

  &.disabled {
    cursor: default;
  }
`;

function IconButton(
  {
    iconColor,
    size = Size.MEDIUM,
    tooltip = '',
    type = Type.PRIMARY,
    active = false,
    filled = false,
    floatRight = false,
    icon,
    id,
    disabled = false,
    onClick,
    dataTest,
    forceTheme,
    fullHeight,
    animationProps
  }: IconButtonProps,
  ref: React.ForwardedRef<HTMLDivElement | null>
) {
  const borderRadius = BUTTON_SIZE_BORDER_RADIUS[size];
  const buttonSize = SIZE_HEIGHT[size];

  const renderTooltipContent = () => {
    if (typeof tooltip === 'string') return tooltip;
    return (
      <TooltipWithShortcut>
        {tooltip.title}
        <KeyCodeSequence shortcut={tooltip.shortcut} size={Size.SMALL} />
      </TooltipWithShortcut>
    );
  };

  const renderIcon = () => {
    const defaultColor = filled ? BUTTON_TYPE_COLOR[type] : (type as IconColor);
    const color = disabled ? 'disabled' : iconColor ?? defaultColor;
    const iconSize = BUTTON_ICON_SIZE[size];
    return <Icons size={iconSize} icon={icon} color={color} forceTheme={forceTheme} />;
  };

  return (
    <Tooltip>
      <TooltipContent>{!disabled ? renderTooltipContent() : ''}</TooltipContent>
      <TooltipTrigger>
        <IconButtonContainer
          id={id}
          ref={ref}
          onClick={disabled ? undefined : onClick}
          data-test={dataTest}
          $borderRadius={borderRadius}
          $floatRight={floatRight}
          $fullHeight={fullHeight}
          $size={buttonSize}
          $type={type}
          $filled={filled}
          $forceTheme={forceTheme}
          className={`${active ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
        >
          {animationProps ? <motion.div {...animationProps}>{renderIcon()}</motion.div> : renderIcon()}
        </IconButtonContainer>
      </TooltipTrigger>
    </Tooltip>
  );
}

export default React.forwardRef<HTMLDivElement | null, IconButtonProps>(IconButton);
