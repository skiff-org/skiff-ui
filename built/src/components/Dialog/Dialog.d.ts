import React from 'react';
import { ThemeMode } from '../../types';
import { ButtonGroupProps } from '../ButtonGroup';
import { IconProps } from '../Icons';
import { InputComponent, TextAreaComponent } from '../InputField';
import './Dialog.scss';
export declare enum DialogTypes {
    Default = "default",
    Error = "error",
    Promotional = "promotional",
    Input = "input",
    Confirm = "confirm",
    Settings = "settings",
    Search = "search",
    Fullscreen = "fullscreen",
    Landscape = "landscape"
}
export interface DialogProps {
    children: ButtonGroupProps['children'] | React.ReactNode;
    open: boolean;
    onClose: () => void;
    icon?: IconProps['icon'] | JSX.Element;
    title?: string;
    description?: string;
    type?: DialogTypes;
    dataTest?: string;
    closeBtnDataTest?: string;
    inputField?: Array<InputComponent | TextAreaComponent> | InputComponent | TextAreaComponent;
    loading?: boolean;
    level?: 'l0' | 'l1' | 'l2' | 'l3';
    customContent?: boolean;
    isMobile?: boolean;
    disableOffClick?: boolean;
    padding?: boolean;
    forceTheme?: ThemeMode;
    classesToIgnore?: string[];
    hideCloseButton?: boolean;
    zIndex?: number;
    disableTextSelect?: boolean;
    customWrapperHeight?: string | number;
}
export default function Dialog({ icon, title, description, inputField, type, children, open, dataTest, loading, level, customContent, onClose, isMobile, disableOffClick, padding, closeBtnDataTest, forceTheme, classesToIgnore, hideCloseButton, zIndex, disableTextSelect, customWrapperHeight }: DialogProps): JSX.Element;
//# sourceMappingURL=Dialog.d.ts.map