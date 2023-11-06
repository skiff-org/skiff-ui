import { css } from 'styled-components';

import { Size, ThemeMode } from '../../types';
import { getThemedColor } from '../../utils/colorUtils';
import { ICON_COLOR, ICON_SIZE, IconColor } from '../Icons';
import { TYPOGRAPHY_LARGE_CSS, TYPOGRAPHY_MEDIUM_CSS, TYPOGRAPHY_SMALL_CSS, TypographyWeight } from '../Typography';

import { FILLED_HORIZONTAL_PADDING, INPUT_FIELD_GAP } from './InputField.constants';
import { InputFieldSize } from './InputField.types';

export const WRAPPER_CSS = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  width: 100%;
`;

export const INPUT_FIELD_CONTAINER_CSS = css`
  display: flex;
  align-items: center;
  position: relative;
`;

export const START_ICON_CSS = ({ $ghost }: { $ghost: boolean }) => css`
  height: 100%;
  position: absolute;
  left: 0;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  padding-left: ${$ghost ? 0 : FILLED_HORIZONTAL_PADDING}px;
  padding-right: ${INPUT_FIELD_GAP}px;
`;

const DEFAULT_CSS = ({
  $active,
  $error,
  $size,
  $startIconExists,
  $forceTheme,
  $paddingRight
}: {
  $active: boolean;
  $error: boolean;
  $size: InputFieldSize;
  $startIconExists: boolean;
  $forceTheme?: ThemeMode;
  $paddingRight?: number;
}) => {
  const destructiveBg = getThemedColor('var(--bg-overlay-destructive)', $forceTheme);
  const activeBg = getThemedColor('var(--bg-overlay-secondary)', $forceTheme);
  const inactiveBg = getThemedColor('var(--bg-overlay-tertiary)', $forceTheme);

  const paddingLeft = $startIconExists
    ? FILLED_HORIZONTAL_PADDING + ICON_SIZE[$size] + INPUT_FIELD_GAP
    : FILLED_HORIZONTAL_PADDING;

  return css`
    padding-left: ${paddingLeft}px;
    padding-right: ${$paddingRight ?? FILLED_HORIZONTAL_PADDING}px;

    ${$error && `background: ${destructiveBg};`}
    ${!$error &&
    `
      background: ${$active ? activeBg : inactiveBg};
      &:focus {
        background: ${activeBg};
      }
    `}
  `;
};

const GHOST_CSS = ({
  $size,
  $startIconExists,
  $paddingRight
}: {
  $size: InputFieldSize;
  $startIconExists: boolean;
  $paddingRight?: number;
}) => {
  const paddingLeft = $startIconExists ? ICON_SIZE[$size] + INPUT_FIELD_GAP : 0;
  return css`
    background: transparent;
    padding-left: ${paddingLeft}px;
    padding-right: ${$paddingRight ?? 0}px;
  `;
};

export const INPUT_FIELD_CSS = ({
  $active,
  $error,
  $ghost,
  $size,
  $weight,
  $caretColor,
  $forceTheme,
  $readOnly,
  $dynamicHeight
}: {
  $active: boolean;
  $error: boolean;
  $ghost: boolean;
  $size: InputFieldSize;
  $weight: TypographyWeight;
  $caretColor?: IconColor;
  $forceTheme?: ThemeMode;
  $readOnly?: boolean;
  $dynamicHeight?: boolean;
}) => css`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  outline: none;
  border: none;
  resize: none;

  box-sizing: border-box;

  font-weight: ${$weight};
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;

  caret-color: ${$caretColor ? getThemedColor(ICON_COLOR[$caretColor], $forceTheme) : 'var(--icon-link)'};
  color: ${getThemedColor('var(--text-secondary)', $forceTheme)};

  &:focus {
    color: ${getThemedColor('var(--text-primary)', $forceTheme)};
  }

  ${($active || $error) && `color: ${getThemedColor('var(--text-primary)', $forceTheme)};`}

  &::placeholder {
    color: ${getThemedColor('var(--text-disabled)', $forceTheme)};
  }

  ${!$dynamicHeight &&
  ` &::-webkit-scrollbar {
    width: 16px;
    color: ${getThemedColor('var(--scrollbar-gray)', $forceTheme)};
  }`}

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 4px solid transparent;
    border-radius: 8px;
    box-shadow: inset 0 0 0 10px;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  ${$readOnly &&
  `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}

  ${$size === Size.SMALL && TYPOGRAPHY_SMALL_CSS}
  ${$size === Size.MEDIUM && TYPOGRAPHY_MEDIUM_CSS}
  ${$size === Size.LARGE && TYPOGRAPHY_LARGE_CSS}
  ${$ghost ? GHOST_CSS : DEFAULT_CSS}
`;
