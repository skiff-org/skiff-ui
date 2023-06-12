import { Size } from '../../types';

import { ChipSize } from './Chip.types';

export const CHIP_END_ICON_DATA_TEST = 'chip-end-icon';

export const CHIP_ICON_SIZE: Record<ChipSize, Size> = {
  small: Size.X_SMALL,
  medium: Size.SMALL,
  large: Size.MEDIUM
};

export const ICON_CONTAINER_SIZE: Record<ChipSize, number> = {
  small: 16,
  medium: 20,
  large: 24
};
