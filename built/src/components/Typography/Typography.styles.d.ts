import { Alignment } from '../../types';
import { Color } from '../../utils/colorUtils';
import { TypographyOverflow, TypographySize, TypographyWeight } from './Typography.constants';
/** Alignment-specific styles */
export declare const ALIGNMENT_CSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $align: Alignment;
}, any>>;
/** Overflow-specific styles */
export declare const OVERFLOW_CSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $overflow: TypographyOverflow;
    $wrap: boolean;
}, any>>;
/** TypographySize.LARGE styles */
export declare const LARGE_CSS: import("styled-components").FlattenSimpleInterpolation;
/** TypographySize.MEDIUM styles */
export declare const MEDIUM_CSS: import("styled-components").FlattenSimpleInterpolation;
/** TypographySize.SMALL styles */
export declare const SMALL_CSS: import("styled-components").FlattenSimpleInterpolation;
/** Text-specific styles */
export declare const TEXT_CSS: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $capitalize: boolean;
    $uppercase: boolean;
    $fontColor: Color;
    $mono: boolean;
    $size: TypographySize;
    $weight: TypographyWeight;
    $transition?: string | undefined;
}, any>>;
/** Width-specific styles */
export declare const WIDTH_CSS: ({ $align, $maxWidth, $minWidth, $width }: {
    $align: Alignment;
    $maxWidth?: string | number | undefined;
    $minWidth?: string | number | undefined;
    $width?: string | number | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=Typography.styles.d.ts.map