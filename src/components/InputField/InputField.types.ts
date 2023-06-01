import { Size, ThemeMode } from '../../types';
import { Icon, IconColor } from '../Icons';
import { TypographyWeight } from '../Typography';

export type InputFieldSize = Size.SMALL | Size.MEDIUM | Size.LARGE;

export interface InputFieldProps {
  /** Controlled active state */
  active?: boolean;
  /** input and textarea autocomplete attribute */
  autoComplete?: string;
  /** Autofocus input  */
  autoFocus?: boolean;
  /** Custom border radius */
  borderRadius?: number;
  /** Sets the caret-color CSS property */
  caretColor?: IconColor;
  /** Indicator for e2e tests */
  dataTest?: string;
  /** Disable editing */
  disabled?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMsg?: string;
  /** Override theme */
  forceTheme?: ThemeMode;
  /**
   * Whether or not it's a ghost field
   * Ghost fields have no background color and no padding
   * */
  ghost?: boolean;
  /** Gives context about the field's input */
  helperText?: string;
  /** Start icon */
  icon?: Icon;
  id?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field is a readOnly field */
  readOnly?: boolean;
  /** InputField size */
  size?: InputFieldSize;
  /** Controlled InputField value */
  value?: string;
  /** Text weight */
  weight?: TypographyWeight;
  /** onClick event */
  onClick?: (e: React.MouseEvent) => void;
}
