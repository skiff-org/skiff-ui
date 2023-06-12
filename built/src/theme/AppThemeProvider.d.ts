import React from 'react';
import { LocalStorageThemeMode, ThemeMode } from 'src/types';
export declare const THEME_SELECT_VERSION = "0.1.0";
export declare function isOfTypeThemeName(keyInput: LocalStorageThemeMode): boolean;
type ThemeContextType = {
    theme: ThemeMode;
    storedTheme: LocalStorageThemeMode;
    setStoredTheme: (name: LocalStorageThemeMode) => void;
};
export declare const ThemeContext: React.Context<ThemeContextType>;
export declare const useTheme: () => ThemeContextType;
export declare const THEME_LOCAL_STORAGE_KEY = "THEME_MODE";
export declare const AppThemeProvider: React.FC;
export {};
//# sourceMappingURL=AppThemeProvider.d.ts.map