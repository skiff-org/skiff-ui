import * as React from 'react';
import styled from 'styled-components';

import { Alignment } from '../../types';
import { Color, getColorTextValue } from '../../utils/colorUtils';

import { TypographyProps, TypographyWeight, TypographySize, TypographyOverflow } from './Typography.constants';
import { ALIGNMENT_CSS, OVERFLOW_CSS, TEXT_CSS, WIDTH_CSS } from './Typography.styles';

const OuterText = styled.span<{
  $align: Alignment;
  $capitalize: boolean;
  $clickable: boolean;
  $fontColor: Color;
  $inline: boolean;
  $size: TypographySize;
  $uppercase: boolean;
  $weight: TypographyWeight;
  $mono: boolean;
  $maxWidth?: string;
  $minWidth?: string;
  $transition?: string;
  $width?: string;
}>`
  display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
  overflow-wrap: break-word;

  ${(props) => props.$clickable && 'cursor: pointer;'}

  ${ALIGNMENT_CSS}
  ${TEXT_CSS}
  ${WIDTH_CSS}
`;

const InnerText = styled.span<{
  $overflow: TypographyOverflow;
  $selectable: boolean;
  $underline: boolean;
  $wrap: boolean;
}>`
  ${(props) => props.$underline && 'text-decoration: underline;'}
  ${(props) => !props.$selectable && 'user-select: none;'}
  ${OVERFLOW_CSS}
`;

const Typography: React.FC<TypographyProps> = ({
  children,
  align = Alignment.INHERIT,
  capitalize,
  className,
  color = 'primary',
  dataTest,
  forceTheme,
  id,
  inline = false,
  size = TypographySize.MEDIUM,
  maxWidth,
  minWidth,
  mono = false,
  overflow = TypographyOverflow.HIDDEN,
  selectable = true,
  transition,
  underline = false,
  uppercase,
  weight = TypographyWeight.REGULAR,
  width,
  wrap = false,
  onClick
}) => {
  const fontColor = getColorTextValue(color, forceTheme) as Color;

  return (
    <OuterText
      id={id}
      data-test={dataTest}
      className={className}
      onClick={onClick}
      $align={align}
      $capitalize={!!capitalize}
      $uppercase={!!uppercase}
      $clickable={!!onClick}
      $fontColor={fontColor}
      $inline={inline}
      $size={size}
      $weight={weight}
      $mono={mono}
      $maxWidth={maxWidth}
      $minWidth={minWidth}
      $transition={transition}
      $width={width}
    >
      <InnerText $overflow={overflow} $selectable={selectable} $underline={underline} $wrap={wrap}>
        {children}
      </InnerText>
    </OuterText>
  );
};

export default Typography;
