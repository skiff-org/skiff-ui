import { css } from 'styled-components';

import { ThemeMode } from './types';
import { getThemedColor } from './utils/colorUtils';

/** Keeps scrollbar displayed */
export const DISPLAY_SCROLLBAR_CSS = css`
  /* Width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 2px solid transparent;
    box-shadow: inset 0 0 0 10px;
    color: ${({ forceTheme }: { forceTheme?: ThemeMode }) => getThemedColor('var(--bg-cell-hover)', forceTheme)};
  }
`;

/** Keeps scrollbar hidden */
export const REMOVE_SCROLLBAR_CSS = css`
  /* Width */
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: none;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: none;
  }

  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
`;

/** Component will have the same width and height */
export const SQUARE_CSS = css`
  ${({ $size }: { $size: number }) => `
    width: ${$size}px;
    height: ${$size}px;
  `}
`;
