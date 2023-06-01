import { Size } from '../../types';
import { TypographySize } from '../Typography';

export type KeyCodeSequenceSize = Size.X_SMALL | Size.SMALL | Size.MEDIUM | Size.LARGE;

export interface KeyCodeSequenceProps {
  shortcut: string;
  size?: KeyCodeSequenceSize;
}

export const TYPOGRAPHY_SIZE = {
  xsmall: TypographySize.CAPTION,
  small: TypographySize.CAPTION,
  medium: TypographySize.SMALL,
  large: TypographySize.MEDIUM
};
