import { ThemeMode } from '../../types';
import {
  AccentColor,
  ACCENT_COLOR_VALUES,
  Color,
  getAccentColorValues,
  getThemedColor,
  stringToColor,
  TextColor,
  TEXT_COLOR_VALUES
} from '../../utils/colorUtils';
import { Icon } from '../Icons';
import { TypographyProps } from '../Typography';

/**
 * Takes a potentially undefined label and icon
 * Returns an object that can be spread into avatar as a prop (prioritizing icon)
 * @param {string | undefined} label
 * @param {Icon | undefined} icon
 */
export const getAvatarIconOrLabel = (label: string | undefined, icon: Icon | undefined) =>
  icon ? { icon: icon } : { label: label ?? '' };

/**
 * Returns the main avatar color and the background color
 * @param {Color | undefined} color
 * @param {boolean | undefined} disabled
 * @param {string | undefined} label
 * @param {ThemeMode | undefined} forceTheme
 */
export const getAvatarColors = (
  color?: Color,
  disabled?: boolean,
  label?: string,
  forceTheme?: ThemeMode
): [TypographyProps['color'], string] => {
  if (disabled) {
    const avatarColor = 'secondary';
    const secondaryColor = 'var(--bg-overlay-secondary)';
    const themedSecondaryColor = getThemedColor(secondaryColor, forceTheme);
    return [avatarColor, themedSecondaryColor];
  }

  const isAccentColor = Object.keys(ACCENT_COLOR_VALUES).includes(color || '');
  const isTextColor = Object.keys(TEXT_COLOR_VALUES).includes(color || '');

  const [, secondaryColor, avatarColor] =
    color && isAccentColor
      ? getAccentColorValues(color as AccentColor, forceTheme)
      : color && isTextColor
      ? [undefined, TEXT_COLOR_VALUES[color as TextColor], 'var(--bg-overlay-tertiary)' as Color]
      : stringToColor(label ?? '', forceTheme);
  return [avatarColor, secondaryColor];
};

/**
 * Strips emojis from a string by removing all non-ASCII characters
 * @param {string} str - Text with emojis
 * @returns {string} - Text without emojis
 */
export const stripEmojis = (str: string) => str.replace(/[^\x00-\x7F]/g, '');
