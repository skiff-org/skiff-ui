import { HTMLMotionProps } from 'framer-motion';

import { ThemeMode, Type } from '../../../types';
import { IconColor, IconProps } from '../../Icons';
import { TooltipLabelProps } from '../../Tooltip';
import { ButtonSize } from '../Button.constants';

export type IconButtonType = Type;

export interface IconButtonProps {
  /** Icon name */
  icon: IconProps['icon'];
  /** On button click */
  onClick: (e: React.MouseEvent) => void | Promise<void>;
  active?: boolean;
  animationProps?: HTMLMotionProps<'div'>;
  /** Overrides default icon color */
  iconColor?: IconColor;
  /** Indicator for e2e tests */
  dataTest?: string;
  /** Disable button */
  disabled?: boolean;
  filled?: boolean;
  floatRight?: boolean;
  forceTheme?: ThemeMode;
  fullHeight?: boolean;
  id?: string;
  /** Icon button size */
  size?: ButtonSize;
  tooltip?: TooltipLabelProps | string;
  type?: IconButtonType;
}

export const BUTTON_SIZE_BORDER_RADIUS = {
  small: 8,
  medium: 10,
  large: 12
};
