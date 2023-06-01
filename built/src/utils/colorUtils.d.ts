import { ThemeMode } from '../types';
export interface RGBValue {
    r: number;
    g: number;
    b: number;
}
declare const TEXT_COLORS: readonly ["primary", "secondary", "tertiary", "disabled", "destructive", "link", "inverse", "white", "black"];
declare const ACCENT_COLORS: readonly ["green", "orange", "red", "yellow", "pink", "dark-blue", "blue"];
export type AccentColor = (typeof ACCENT_COLORS)[number];
export type TextColor = (typeof TEXT_COLORS)[number];
export type Color = TextColor | AccentColor;
export declare const isAccentColor: (color: Color) => color is "green" | "orange" | "red" | "yellow" | "pink" | "dark-blue" | "blue";
export declare const isTextColor: (color: Color) => color is "primary" | "secondary" | "tertiary" | "destructive" | "link" | "disabled" | "inverse" | "white" | "black";
export declare const isColor: (color: string) => color is "green" | "orange" | "red" | "yellow" | "pink" | "dark-blue" | "blue";
/** [primary, secondary, accent] */
type ColorOptions = [string, string, AccentColor];
export declare const TEXT_COLOR_VALUES: Record<TextColor, string>;
export declare const ACCENT_COLOR_VALUES: Record<AccentColor, ColorOptions>;
export declare const CorrectedColorSelect: Record<string, string>;
export declare const accentColorToPrimaryColor: Record<"green" | "orange" | "red" | "yellow" | "pink" | "dark-blue" | "blue", string>;
/**
 * Given an color in form var(--color), return the inner --color
 */
export declare const getInnerColorVar: (colorVar: string) => string | undefined;
/** Enforces a theme on the color string */
export declare function getThemedColor(color: string, forceTheme?: ThemeMode): string;
export declare function stringToColor(str: string, forceTheme?: ThemeMode): ColorOptions;
export declare function getAccentColorValues(color: AccentColor, forceTheme?: ThemeMode): [string, string, AccentColor];
export declare function getColorTextValue(color: Color, forceTheme?: ThemeMode): string;
export declare const rgbaToRgb: (r: number, g: number, b: number, a: number, background: RGBValue) => {
    r: number;
    g: number;
    b: number;
};
export declare const RGBToHSL: (r: number, g: number, b: number) => number[];
export declare const HSLToRGB: (h: number, s: number, l: number) => {
    r: number;
    g: number;
    b: number;
};
/**
 * Check if color is hard to read with darkmode background
 */
export declare const isHardToRead: (textColor: RGBValue, background: RGBValue) => boolean;
export {};
//# sourceMappingURL=colorUtils.d.ts.map