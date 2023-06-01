import { ThemeMode } from '../../types';
import { IconColor } from '../Icons';
import { TypographyWeight } from '../Typography';
import { InputFieldSize } from './InputField.types';
export declare const WRAPPER_CSS: import("styled-components").FlattenSimpleInterpolation;
export declare const INPUT_FIELD_CONTAINER_CSS: import("styled-components").FlattenSimpleInterpolation;
export declare const START_ICON_CSS: ({ $ghost }: {
    $ghost: boolean;
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const INPUT_FIELD_CSS: ({ $active, $error, $ghost, $size, $weight, $caretColor, $forceTheme, $readOnly, $dynamicHeight }: {
    $active: boolean;
    $error: boolean;
    $ghost: boolean;
    $size: InputFieldSize;
    $weight: TypographyWeight;
    $caretColor?: IconColor | undefined;
    $forceTheme?: ThemeMode | undefined;
    $readOnly?: boolean | undefined;
    $dynamicHeight?: boolean | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $active: boolean;
    $error: boolean;
    $size: InputFieldSize;
    $startIconExists: boolean;
    $forceTheme?: ThemeMode | undefined;
    $paddingRight?: number | undefined;
}, any>>;
//# sourceMappingURL=InputField.styles.d.ts.map