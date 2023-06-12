import * as React from 'react';
import { ThemeMode } from '../../types';
import { Icon } from '../Icons';
import { IconComponent } from '../IconText';
export interface ButtonGroupItemProps {
    /** Gets called when the user clicks on the button */
    onClick: (e: React.MouseEvent) => void | Promise<void>;
    label: string;
    dataTest?: string;
    /** Disable button */
    disabled?: boolean;
    hidden?: boolean;
    destructive?: boolean;
    icon?: Icon | IconComponent;
    id?: string;
    loading?: boolean;
    forceTheme?: ThemeMode;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}
declare const ButtonGroupItem: React.FC<ButtonGroupItemProps>;
export default ButtonGroupItem;
//# sourceMappingURL=ButtonGroupItem.d.ts.map