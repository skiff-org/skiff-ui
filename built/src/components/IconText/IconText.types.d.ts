import React from 'react';
import { FilledVariant, Size, ThemeMode } from '../../types';
import { Color } from '../../utils/colorUtils';
import { Icon, IconColor, IconProps } from '../Icons';
import { TooltipLabelProps } from '../Tooltip';
import { TypographyProps, TypographyWeight } from '../Typography';
export type IconComponent = React.ReactElement<IconProps>;
export type IconTextSize = Size.SMALL | Size.MEDIUM | Size.LARGE;
export type IconSize = Size.SMALL | Size.MEDIUM | Size.X_MEDIUM;
type IconTextWeight = TypographyWeight.REGULAR | TypographyWeight.MEDIUM;
type IconTextTypographyProps = Pick<TypographyProps, 'capitalize' | 'mono' | 'uppercase' | 'wrap'>;
export interface IconTextProps extends IconTextTypographyProps {
    /** For styled components */
    className?: string;
    /** IconText content color */
    color?: Color;
    /** Indicator for E2E tests */
    dataTest?: string;
    /** Controlled disabled state */
    disabled?: boolean;
    /** Disable hover state */
    disableHover?: boolean;
    /** Icon after text */
    endIcon?: Icon | IconComponent;
    forceTheme?: ThemeMode;
    /** Override icon color */
    iconColor?: IconColor;
    /** Text */
    label?: string | React.ReactNode;
    /** IconText size */
    size?: IconTextSize;
    /** Icon before text */
    startIcon?: Icon | IconComponent;
    /** For customization */
    style?: React.CSSProperties;
    /** Tooltip text */
    tooltip?: TooltipLabelProps | string;
    /** Filled or unfilled */
    variant?: FilledVariant;
    /** Text weight */
    weight?: IconTextWeight;
    onClick?: (e?: React.MouseEvent) => Promise<void> | void;
    id?: string;
}
export {};
//# sourceMappingURL=IconText.types.d.ts.map