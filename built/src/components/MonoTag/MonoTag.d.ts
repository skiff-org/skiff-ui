import React from 'react';
import { ThemeMode } from '../../types';
import { Color } from '../../utils/colorUtils';
import { Icon } from '../Icons';
export interface MonoTagProps {
    label: string;
    color?: Color;
    bgColor?: string;
    textColor?: Color;
    forceTheme?: ThemeMode;
    icon?: Icon;
    forceBoxShadowTheme?: ThemeMode;
}
declare const MonoTag: React.FC<MonoTagProps>;
export default MonoTag;
//# sourceMappingURL=MonoTag.d.ts.map