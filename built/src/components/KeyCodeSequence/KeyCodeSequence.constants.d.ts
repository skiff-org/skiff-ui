import { Size } from '../../types';
import { TypographySize } from '../Typography';
export type KeyCodeSequenceSize = Size.X_SMALL | Size.SMALL | Size.MEDIUM | Size.LARGE;
export interface KeyCodeSequenceProps {
    shortcut: string;
    size?: KeyCodeSequenceSize;
}
export declare const TYPOGRAPHY_SIZE: {
    xsmall: TypographySize;
    small: TypographySize;
    medium: TypographySize;
    large: TypographySize;
};
//# sourceMappingURL=KeyCodeSequence.constants.d.ts.map