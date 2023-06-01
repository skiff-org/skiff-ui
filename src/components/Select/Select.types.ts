import { Size, ThemeMode } from '../../types';
import { Color } from '../../utils/colorUtils';
import { DropdownItemComponent } from '../DropdownItem';

export type SelectSize = Size.SMALL | Size.MEDIUM | Size.LARGE;

export interface SelectProps {
  children: DropdownItemComponent[];
  onChange: (value: string) => void;
  /** E2E test selector */
  dataTest?: string;
  /** Controls the disabled state */
  disabled?: boolean;
  /** Whether it's a filled field or a ghost field */
  filled?: boolean;
  /** Overrides curr theme */
  forceTheme?: ThemeMode;
  /** Ghost select text and icon color */
  ghostColor?: Color;
  /** Max dropdown height */
  maxHeight?: number;
  /** For a controlled Select component */
  menuControls?: {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  };
  /** Field placeholder text */
  placeholder?: string;
  /** Select size */
  size?: SelectSize;
  /** Current selected value */
  value?: string;
  /** Custom width */
  width?: number;
  /** Whether the select should take up the full width of its container */
  fullWidth?: boolean;
  /** Custom z-index */
  zIndex?: number;
}
