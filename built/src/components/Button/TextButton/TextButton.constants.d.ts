/// <reference types="react" />
import { ThemeMode, Type } from '../../../types';
import { IconProps } from '../../Icons';
import { TypographySize } from '../../Typography';
import { ButtonSize } from '../Button.constants';
type SizeStyles = {
    horizontalPadding: number;
    gap: number;
};
export interface ButtonProps {
    /** Button text */
    children: string;
    active?: boolean;
    /** Indicator for e2e tests */
    dataTest?: string;
    /** Disable button */
    disabled?: boolean;
    /** Float button to the right of the container */
    floatRight?: boolean;
    forceTheme?: ThemeMode;
    fullWidth?: boolean;
    iconColor?: IconProps['color'];
    id?: string;
    loading?: boolean;
    /** The size for the button */
    size?: ButtonSize;
    /** Button icon component */
    startIcon?: IconProps['icon'] | JSX.Element;
    tooltip?: string;
    /** The type for the button */
    type?: Type;
    /** Gets called when the user clicks on the button */
    onClick: (e: React.MouseEvent) => void | Promise<void>;
    /** Compact styling */
    compact?: boolean;
}
/** Maps button size to typography size */
export declare const TYPOGRAPHY_SIZE: Record<ButtonSize, TypographySize>;
/** Maps button size to size-specific styles -- padding and gap */
export declare const SIZE_STYLES: Record<ButtonSize, SizeStyles>;
export {};
//# sourceMappingURL=TextButton.constants.d.ts.map