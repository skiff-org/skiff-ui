import { Layout } from '../../types';
import { FacepileSize } from './Facepile.constants';
/** Returns layout-specific styles */
export declare const FACEPILE_WRAPPER_LAYOUT_CSS: ({ $layout }: {
    $layout: Layout;
}) => import("styled-components").FlattenSimpleInterpolation | (({ $avatarsOverflow, $numOfAvatars, $size }: {
    $avatarsOverflow: boolean;
    $numOfAvatars: number;
    $size: FacepileSize;
}) => import("styled-components").FlattenSimpleInterpolation);
/** Stacked Avatar wrapper CSS */
export declare const STACKED_AVATAR_WRAPPER_CSS: ({ $index, $avatarsOverflow, $numOfAvatars, $size }: {
    $index: number;
    $avatarsOverflow: boolean;
    $numOfAvatars: number;
    $size: FacepileSize;
}) => import("styled-components").FlattenSimpleInterpolation;
/** Inline Avatar wrapper CSS */
export declare const INLINE_AVATAR_WRAPPER_CSS: ({ $index, $numOfAvatars, $size }: {
    $index: number;
    $numOfAvatars: number;
    $size: FacepileSize;
}) => import("styled-components").FlattenSimpleInterpolation;
/** Returns layout and size-specific styles */
export declare const AVATAR_WRAPPER_CSS: ({ $layout }: {
    $layout: Layout;
}) => ({ $index, $avatarsOverflow, $numOfAvatars, $size }: {
    $index: number;
    $avatarsOverflow: boolean;
    $numOfAvatars: number;
    $size: FacepileSize;
}) => import("styled-components").FlattenSimpleInterpolation;
//# sourceMappingURL=Facepile.styles.d.ts.map