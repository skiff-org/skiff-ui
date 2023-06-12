/// <reference types="react" />
import { ThemeMode, Type } from '../../../types';
import { Icon } from '../../Icons';
import { IconComponent } from '../../IconText';
import { ButtonSize } from '../Button.constants';
export type TextButtonSizeStyles = {
    horizontalPadding: number;
    gap: number;
};
export interface ButtonProps {
    /** Button text */
    children: string;
    active?: boolean;
    /** Compact styling */
    compact?: boolean;
    /** Indicator for e2e tests */
    dataTest?: string;
    /** Disable button */
    disabled?: boolean;
    /** Float button to the right of the container */
    floatRight?: boolean;
    forceTheme?: ThemeMode;
    fullWidth?: boolean;
    /** Start icon */
    icon?: Icon | IconComponent;
    id?: string;
    loading?: boolean;
    /** The size for the button */
    size?: ButtonSize;
    tooltip?: string;
    /** The type for the button */
    type?: Type;
    /** Gets called when the user clicks on the button */
    onClick: (e: React.MouseEvent) => void | Promise<void>;
}
export type ButtonComponent = React.ReactElement<ButtonProps>;
//# sourceMappingURL=TextButton.types.d.ts.map