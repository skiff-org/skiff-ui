import { Size, ThemeMode } from '../../types';
import { Color } from '../../utils/colorUtils';
export type CustomCircularProgressSize = Size.SMALL | Size.MEDIUM | Size.X_MEDIUM | Size.LARGE | Size.X_LARGE;
export interface CustomCircularProgressProps {
    dataTest?: string;
    forceTheme?: ThemeMode;
    progress?: number;
    size?: CustomCircularProgressSize;
    /** Spinners visualize an unspecified wait time */
    spinner?: boolean;
    trackColor?: string;
    progressColor?: Color;
    valuePercent?: number;
    determinate?: boolean;
    /** Tooltip label */
    tooltip?: string;
}
export declare const PROGRESS_SIZE: Record<CustomCircularProgressSize, number>;
interface SizeStyles {
    rootSize: number;
    trackThickness: number;
    progressThickness: number;
    borderWidth: number;
}
export declare const SIZE_VALUES: Record<CustomCircularProgressSize, SizeStyles>;
export {};
//# sourceMappingURL=CustomCircularProgress.constants.d.ts.map