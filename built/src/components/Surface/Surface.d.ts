import './Surface.scss';
import React, { MutableRefObject } from 'react';
import { MouseClickEvents, ThemeMode } from '../../types';
export declare const optionMenuPadding = 4;
export declare const StyledSurface: import("styled-components").StyledComponent<"div", any, {
    level: 'l0' | 'l1' | 'l2' | 'l3';
    size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen';
    forceTheme?: ThemeMode | undefined;
    $maxWidth?: number | undefined;
    $minWidth?: number | undefined;
    $width?: number | undefined;
}, never>;
export interface SurfaceProps {
    /** The elevation of the Surface */
    level?: 'l0' | 'l1' | 'l2' | 'l3';
    /** The width of the Surface */
    size?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge' | 'xxlarge' | 'full-width' | 'full-screen';
    /** The size is a max-width instead of width */
    hug?: boolean;
    /** Surface child component */
    children?: React.ReactNode;
    /** Place scrim behind the surface (l3 only) */
    scrim?: boolean;
    /** Add close button to top right corner */
    showClose?: boolean;
    optionMenu?: boolean;
    modal?: boolean;
    input?: boolean;
    open?: boolean;
    dataTest?: string;
    hoverEffect?: boolean;
    onClose?: () => void;
    glass?: boolean;
    style?: React.CSSProperties;
    padding?: boolean;
    className?: string;
    forceTheme?: ThemeMode;
    classesToIgnore?: string[];
    disableShadow?: boolean;
    buttonRef?: MutableRefObject<HTMLDivElement | null>;
    subMenuOpenRight?: boolean;
    setSurfaceRect?: (arg: {
        width: number;
        height: number;
        x: number;
        y: number;
    }) => void;
    zIndex?: number;
    clickOutsideWebListener?: MouseClickEvents;
    /** Custom height of surface wrapper (e.g. for custom vertical alignment) */
    customWrapperHeight?: string | number;
    width?: number;
    minWidth?: number;
    maxWidth?: number;
}
declare const _default: React.ForwardRefExoticComponent<SurfaceProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
//# sourceMappingURL=Surface.d.ts.map