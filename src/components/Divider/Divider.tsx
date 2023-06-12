import * as React from 'react';
import styled from 'styled-components';

import { ThemeMode } from '../../types';
import { getThemedColor } from '../../utils/colorUtils';

import { DIVIDER_COLOR } from './Divider.constants';
import { DIVIDER_TYPE_CSS } from './Divider.styles';
import { DividerColor, DividerProps, DividerType } from './Divider.types';

const StyledHR = styled.hr<{
  $active: boolean;
  $color: DividerColor;
  $type: DividerType;
  $forceTheme?: ThemeMode;
  $height?: number | string;
  $width?: number | string;
}>`
  border: none;
  margin-bottom: 0px;
  margin-top: 0px;
  border-radius: 100px;

  ${(props) => {
    const dividerColor = props.$active ? '--border-active' : DIVIDER_COLOR[props.$color];
    const themedColor = getThemedColor(`var(${dividerColor})`, props.$forceTheme);
    return `
      color: ${themedColor};
      background: ${themedColor};
    `;
  }}

  ${DIVIDER_TYPE_CSS}
`;

const Divider: React.FC<DividerProps> = ({
  active = false,
  color = 'secondary',
  forceTheme,
  height,
  type = DividerType.HORIZONTAL,
  width
}) => (
  <StyledHR $active={active} $color={color} $forceTheme={forceTheme} $height={height} $type={type} $width={width} />
);

export default Divider;
