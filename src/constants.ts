import { Size } from './types';

/** Maps Small, Medium and Large sizes to their corresponding height values */
export const SIZE_HEIGHT: Record<Size.SMALL | Size.MEDIUM | Size.LARGE, number> = {
  small: 33,
  medium: 35,
  large: 42
};
