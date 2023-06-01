import * as React from 'react';
import styled, { css } from 'styled-components';

import { ThemeMode } from '../../types';
import { getThemedColor } from '../../utils/colorUtils';

import { DIVIDER_COLOR } from './Divider.constants';
import { DividerColor, DividerProps, DividerType } from './Divider.types';

const StyledHR = styled.hr<{
  $active: boolean;
  $color: DividerColor;
  $type: DividerType;
  $forceTheme?: ThemeMode;
  $height?: string;
  $width?: string;
}>`
  border: none;
  margin-bottom: 0px;
  margin-top: 0px;

  min-height: ${(props) => props.$height ?? (props.$type === DividerType.VERTICAL ? '100%' : '1px')};
  max-height: ${(props) => props.$height ?? (props.$type === DividerType.VERTICAL ? '100%' : '1px')};
  height: ${(props) => props.$height ?? (props.$type === DividerType.VERTICAL ? '100%' : '1px')};
  width: ${(props) => props.$width ?? (props.$type === DividerType.VERTICAL ? '1px' : '100%')};
  border-radius: 100px;

  ${(props) => {
    const dividerColor = props.$active ? '--border-active' : DIVIDER_COLOR[props.$color];
    const themedColor = getThemedColor(`var(${dividerColor})`, props.$forceTheme);
    return css`
      color: ${themedColor};
      background: ${themedColor};
    `;
  }}
`;

const Divider: React.FC<DividerProps> = ({
  active = false,
  color = 'secondary',
  forceTheme,
  height,
  type = DividerType.HORIZONTAL,
  width
}) => {
  return (
    <StyledHR $active={active} $color={color} $forceTheme={forceTheme} $height={height} $type={type} $width={width} />
  );
};

export default Divider;
