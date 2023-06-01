import { Color } from '../../utils/colorUtils';
import { IconColor } from '../Icons';

const getInteractiveIconTextColor = (filled: boolean, isActive: boolean, isHovering: boolean) => {
  if (isActive || isHovering) return 'primary';
  return filled ? 'secondary' : 'disabled';
};

export const getTextColor = (
  filled: boolean,
  isActive: boolean,
  isClickable: boolean,
  isDisabled: boolean,
  isHovering: boolean,
  customColor?: Color
): Color => {
  if (isDisabled) return 'disabled';
  if (customColor) return customColor;

  if (isClickable) {
    // this is an interactive IconText
    return getInteractiveIconTextColor(filled, isActive, isHovering);
  }

  return 'primary';
};

export const getIconColor = (
  filled: boolean,
  isActive: boolean,
  isClickable: boolean,
  isDisabled: boolean,
  isHovering: boolean,
  customColor?: IconColor
): IconColor => {
  if (isDisabled) return 'disabled';
  if (customColor) return customColor;

  if (isClickable) {
    // this is an interactive IconText
    return getInteractiveIconTextColor(filled, isActive, isHovering);
  }

  return 'primary';
};
