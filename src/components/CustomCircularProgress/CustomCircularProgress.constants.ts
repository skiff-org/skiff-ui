import { Size, ThemeMode } from '../../types';
import { Color } from '../../utils/colorUtils';

export type CustomCircularProgressSize = Size.SMALL | Size.MEDIUM | Size.X_MEDIUM | Size.LARGE | Size.X_LARGE;

export interface CustomCircularProgressProps {
  dataTest?: string;
  forceTheme?: ThemeMode;
  progress?: number;
  size?: CustomCircularProgressSize;
  /** Spinners visualize an unspecified wait time */
  spinner?: boolean;
  trackColor?: string;
  progressColor?: Color;
  valuePercent?: number;
  determinate?: boolean;
  /** Tooltip label */
  tooltip?: string;
}

export const PROGRESS_SIZE: Record<CustomCircularProgressSize, number> = {
  small: 16,
  medium: 20,
  xmedium: 30,
  large: 40,
  xlarge: 100
};

interface SizeStyles {
  rootSize: number;
  trackThickness: number;
  progressThickness: number;
  borderWidth: number;
}

export const SIZE_VALUES: Record<CustomCircularProgressSize, SizeStyles> = {
  small: {
    rootSize: 16,
    trackThickness: 3,
    progressThickness: 3,
    borderWidth: 0.5
  },
  medium: {
    rootSize: 24,
    trackThickness: 2,
    progressThickness: 2,
    borderWidth: 0.5
  },
  xmedium: {
    rootSize: 30,
    trackThickness: 3,
    progressThickness: 3,
    borderWidth: 0.5
  },
  large: {
    rootSize: 40,
    trackThickness: 4,
    progressThickness: 4,
    borderWidth: 0.5
  },
  xlarge: {
    rootSize: 100,
    trackThickness: 8,
    progressThickness: 8,
    borderWidth: 0.5
  }
};
