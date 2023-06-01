/// <reference types="react" />
import { HTMLMotionProps } from 'framer-motion';
import { ThemeMode, Type } from '../../../types';
import { IconColor, IconProps } from '../../Icons';
import { TooltipLabelProps } from '../../Tooltip';
import { ButtonSize } from '../Button.constants';
export type IconButtonType = Type;
export interface IconButtonProps {
    /** Icon name */
    icon: IconProps['icon'];
    /** On button click */
    onClick: (e: React.MouseEvent) => void | Promise<void>;
    active?: boolean;
    animationProps?: HTMLMotionProps<'div'>;
    /** Overrides default icon color */
    iconColor?: IconColor;
    /** Indicator for e2e tests */
    dataTest?: string;
    /** Disable button */
    disabled?: boolean;
    filled?: boolean;
    floatRight?: boolean;
    forceTheme?: ThemeMode;
    fullHeight?: boolean;
    id?: string;
    /** Icon button size */
    size?: ButtonSize;
    tooltip?: TooltipLabelProps | string;
    type?: IconButtonType;
}
export declare const BUTTON_SIZE_BORDER_RADIUS: {
    small: number;
    medium: number;
    large: number;
};
//# sourceMappingURL=IconButton.constants.d.ts.map