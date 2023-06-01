import { css } from 'styled-components';

import { ThemeMode, Type } from '../../../types';
import { getThemedColor } from '../../../utils/colorUtils';
import { TERTIARY_BUTTON_CSS } from '../Button.styles';

import { IconButtonType } from './IconButton.constants';

export const GHOST_ICON_BUTTON_CSS = ({
  $type,
  $forceTheme
}: {
  $type: IconButtonType;
  $forceTheme?: ThemeMode;
}) => css`
  ${TERTIARY_BUTTON_CSS}
  ${$type === Type.DESTRUCTIVE &&
  css`
    &:active,
    &.active {
      background: ${getThemedColor('var(--cta-destructive-active)', $forceTheme)};
    }
    &:hover {
      background: ${getThemedColor('var(--cta-destructive-hover)', $forceTheme)};
    }
    &.disabled {
      background: transparent;
    }
  `}
`;
