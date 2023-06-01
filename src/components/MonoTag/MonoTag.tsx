import React from 'react';
import styled from 'styled-components';

import { Size, ThemeMode } from '../../types';
import { Color, getThemedColor } from '../../utils/colorUtils';
import { getAvatarColors } from '../Avatar/Avatar.utils';
import Icons, { Icon } from '../Icons';
import Typography, { TypographySize } from '../Typography';

export interface MonoTagProps {
  label: string;
  // single tone color for text and bg
  color?: Color;
  // override individual colors
  bgColor?: string;
  textColor?: Color;
  forceTheme?: ThemeMode;
  icon?: Icon;
  forceBoxShadowTheme?: ThemeMode;
}

const Tag = styled.div<{ $bgColor?: string; $forceBoxShadowTheme?: ThemeMode }>`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: fit-content;
  padding: 1px 4px;
  gap: 4px;
  background: ${({ $bgColor }) => $bgColor};
  box-sizing: border-box;
  border: 1px solid
    ${({ $forceBoxShadowTheme, $bgColor }) =>
      getThemedColor($bgColor || 'var(--border-tertiary)', $forceBoxShadowTheme)};
  border-bottom-width: 2px;
  border-radius: 4px;
`;

const MonoTag: React.FC<MonoTagProps> = ({
  color,
  label,
  forceBoxShadowTheme,
  forceTheme,
  icon,
  textColor,
  bgColor
}: MonoTagProps) => {
  let typographyColor = textColor;
  let backgroundColor = bgColor;

  if (!!color) {
    const [textColor, bgColor] = getAvatarColors(color, false, label, forceTheme);
    typographyColor = textColor;
    backgroundColor = getThemedColor(bgColor, forceTheme);
  }

  return (
    <Tag $bgColor={backgroundColor} $forceBoxShadowTheme={forceBoxShadowTheme}>
      {icon && <Icons size={Size.SMALL} icon={icon} color={typographyColor} />}
      <Typography color={typographyColor} mono size={TypographySize.SMALL} forceTheme={forceTheme}>
        {label}
      </Typography>
    </Tag>
  );
};

export default MonoTag;
