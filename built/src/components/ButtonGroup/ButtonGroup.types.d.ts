/// <reference types="react" />
import { Layout, Size } from '../../types';
import { ButtonGroupItemProps } from '../ButtonGroupItem/ButtonGroupItem';
export type ButtonGroupItem = React.ReactElement<ButtonGroupItemProps>;
export type ButtonGroupSize = Size.SMALL | Size.MEDIUM | Size.LARGE;
export interface ButtonGroupProps {
    /** Children button group elements */
    children: ButtonGroupItem[];
    /** The size of the Buttons */
    size?: ButtonGroupSize;
    /** The placement of the Buttons */
    layout?: Layout;
    /** Buttons should take the full width of the container */
    fullWidth?: boolean;
    /** Only display the icon for secondary buttons */
    iconOnly?: boolean;
}
//# sourceMappingURL=ButtonGroup.types.d.ts.map