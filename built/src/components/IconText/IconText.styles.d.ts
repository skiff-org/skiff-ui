import { ThemeMode } from "../../types";
import { IconTextSize } from "./IconText.types";
export declare const ICON_TEXT_SIZE_CSS: ({ $size }: {
    $size: IconTextSize;
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const INTERACTIVE_ICON_TEXT_CSS: ({ $isActive, $isDestructive, $isHovering, $forceTheme, }: {
    $isActive: boolean;
    $isDestructive: boolean;
    $isHovering: boolean;
    $forceTheme?: ThemeMode | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const ICON_TEXT_TYPE_CSS: ({ $filled }: {
    $filled: boolean;
}) => ({ $forceTheme, }: {
    $forceTheme?: ThemeMode | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=IconText.styles.d.ts.map