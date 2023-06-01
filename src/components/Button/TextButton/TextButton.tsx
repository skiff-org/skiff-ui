import * as React from 'react';
import styled, { css } from 'styled-components';

import { Size, ThemeMode, Type } from '../../../types';
import CustomCircularProgress from '../../CustomCircularProgress/CustomCircularProgress';
import Icons from '../../Icons';
import Tooltip from '../../Tooltip';
import { TooltipContent, TooltipTrigger } from '../../Tooltip/Tooltip';
import Typography, { TypographyWeight } from '../../Typography';
import { BUTTON_ICON_SIZE, BUTTON_TYPE_COLOR, ButtonSize } from '../Button.constants';
import { BUTTON_TYPE_CONTAINER_CSS } from '../Button.styles';

import { ButtonProps, SIZE_STYLES, TYPOGRAPHY_SIZE } from './TextButton.constants';
import { BUTTON_SIZE_CONTAINER_CSS } from './TextButton.styles';

const ButtonContainer = styled.div<{
  $floatRight: boolean;
  $fullWidth: boolean;
  $size: ButtonSize;
  $type: Type;
  $forceTheme?: ThemeMode;
  $compact?: boolean;
}>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: fit-content;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
  box-sizing: border-box;

  cursor: pointer;
  user-select: none;

  ${(props) => props.$floatRight && 'margin-left: auto;'}

  &.disabled {
    pointer-events: none;
  }

  ${BUTTON_TYPE_CONTAINER_CSS}
  ${BUTTON_SIZE_CONTAINER_CSS}
  ${(props) =>
    props.$compact &&
    css`
      border-radius: 4px;
      padding: 4px 8px;
      height: fit-content;
      border: none;
    `}
`;

const ButtonBody = styled.div<{ $gap: number; $hidden: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => `${props.$gap}px`};

  ${(props) => props.$hidden && `visibility: hidden;`}
`;

const LoadingContainer = styled.div<{ $fullWidth: boolean; $horizontalPadding: number }>`
  position: absolute;
  ${(props) =>
    props.$fullWidth
      ? `right: ${props.$horizontalPadding}px;`
      : `
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%);
        `}

  span:nth-child(2) {
    opacity: 0.4;
  }
`;

function Button(
  {
    children,
    active,
    size = Size.MEDIUM,
    type = Type.PRIMARY,
    tooltip = '',
    floatRight = false,
    forceTheme,
    fullWidth = false,
    startIcon,
    id,
    disabled = false,
    onClick,
    dataTest,
    iconColor,
    loading,
    compact = false
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const hideButtonBody = !fullWidth && !!loading;
  const isDisabledOrLoading = !!disabled || !!loading;

  const buttonContentColor = isDisabledOrLoading ? 'disabled' : BUTTON_TYPE_COLOR[type];
  const startIconColor = isDisabledOrLoading ? 'disabled' : iconColor ?? buttonContentColor;

  const iconSize = BUTTON_ICON_SIZE[size];
  const typographySize = TYPOGRAPHY_SIZE[size];
  const { gap, horizontalPadding } = SIZE_STYLES[size];

  const renderStartIcon = () =>
    typeof startIcon === 'string' ? (
      <Icons size={iconSize} icon={startIcon} color={startIconColor} forceTheme={forceTheme} />
    ) : (
      startIcon
    );

  return (
    <Tooltip>
      <TooltipContent>{!disabled ? tooltip : ''}</TooltipContent>
      <TooltipTrigger fullWidth={fullWidth}>
        <ButtonContainer
          className={`${active ? 'active' : ''} ${isDisabledOrLoading ? 'disabled' : ''}`}
          id={id}
          ref={ref}
          onClick={(e: React.MouseEvent) => void onClick(e)}
          data-test={dataTest}
          $floatRight={floatRight}
          $fullWidth={fullWidth}
          $size={size}
          $type={type}
          $forceTheme={forceTheme}
          $compact={compact}
        >
          <ButtonBody $gap={gap} $hidden={hideButtonBody}>
            {!!startIcon && renderStartIcon()}
            <Typography
              forceTheme={forceTheme}
              size={typographySize}
              weight={TypographyWeight.MEDIUM}
              color={buttonContentColor}
            >
              {children}
            </Typography>
          </ButtonBody>
          {loading && (
            <LoadingContainer $fullWidth={fullWidth} $horizontalPadding={horizontalPadding}>
              <CustomCircularProgress progressColor={buttonContentColor} spinner forceTheme={forceTheme} />
            </LoadingContainer>
          )}
        </ButtonContainer>
      </TooltipTrigger>
    </Tooltip>
  );
}

export default React.forwardRef<HTMLDivElement, ButtonProps>(Button);
