import { FilledVariant, ThemeMode, Type } from '../../../types';
import { IconButtonType } from './IconButton.types';
export declare const GHOST_ICON_BUTTON_CSS: ({ $type, $forceTheme }: {
    $type: IconButtonType;
    $forceTheme?: ThemeMode | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $forceTheme?: ThemeMode | undefined;
}, any>>;
export declare const ICON_BUTTON_VARIANT_CSS: ({ $variant }: {
    $variant: FilledVariant;
}) => (({ $type }: {
    $type: Type;
    $forceTheme?: ThemeMode | undefined;
}) => ({ $forceTheme }: {
    $forceTheme?: ThemeMode | undefined;
}) => import("styled-components").FlattenSimpleInterpolation) | (({ $type, $forceTheme }: {
    $type: IconButtonType;
    $forceTheme?: ThemeMode | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    $forceTheme?: ThemeMode | undefined;
}, any>>);
//# sourceMappingURL=IconButton.styles.d.ts.map