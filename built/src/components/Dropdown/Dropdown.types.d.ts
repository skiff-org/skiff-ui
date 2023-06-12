/// <reference types="react" />
import { MouseClickEvents } from '../../types';
import { DropdownItemComponent } from '../DropdownItem';
export type SurfaceRect = Pick<DOMRect, 'width' | 'height' | 'x' | 'y'>;
export type DropdownAnchor = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
};
export interface DropdownProps {
    children: React.ReactNode | DropdownItemComponent[];
    buttonRef?: React.MutableRefObject<HTMLDivElement | null>;
    className?: string;
    clickOutsideWebListener?: MouseClickEvents;
    /** Custom dropdown position */
    customAnchor?: {
        x: number;
        y: number;
    };
    /** E2E test indicator */
    dataTest?: string;
    /** Whether the dropdown should take the full width of the dropdown anchor */
    fullWidth?: boolean;
    /** Created a gap of the specified of px between the anchor and the dropdown */
    gapFromAnchor?: number;
    highlightedIdx?: number;
    /**
     * Whether the dropdown is a sub-menu
     * Important for controlling the direction in which the sub-menu will open
     */
    isSubmenu?: boolean;
    /**
     * Max dropdown height
     * Enables overflow
     */
    maxHeight?: number | string;
    /** Custom maximum width */
    maxWidth?: number | string;
    /** Custom minimum width */
    minWidth?: number | string;
    noPadding?: boolean;
    /** Number of dropdown items (used for highlight logic) */
    numChildren?: number;
    portal?: boolean;
    showDropdown?: boolean;
    /** Custom width */
    width?: number | string;
    /** Custom z-index */
    zIndex?: number;
    setHighlightedIdx?: (idx?: number) => void;
    setShowDropdown: (open: boolean) => void;
}
//# sourceMappingURL=Dropdown.types.d.ts.map