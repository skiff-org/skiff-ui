/**
 * Returns whether the dropdown overflows in x
 * @param x - left
 * @param width - dropdown width
 */
export declare const overflowsInX: (x: number, width: number) => boolean;
/**
 * Returns whether the dropdown overflows in y
 * @param y - top
 * @param height - dropdown height
 */
export declare const overflowsInY: (y: number, height: number) => boolean;
/**
 * Returns absolute position for portal dropdowns
 * @param anchorHeight
 * @param anchorLeftEdge
 * @param anchorRightEdge
 * @param anchorTopEdge
 * @param dropdownHeight
 * @param dropdownWidth
 * @param overflowX
 * @param overflowY
 */
export declare const getPortalPosition: (anchorHeight: number, anchorLeftEdge: number, anchorRightEdge: number, anchorTopEdge: number, dropdownHeight: number, dropdownWidth: number, gapFromAnchor: number, overflowX: boolean, overflowY: boolean) => {
    left: number;
    top: number;
};
/**
 * Returns absolute position for non-portal dropdowns
 * @param anchorWidth
 * @param dropdownWidth
 * @param overflowX
 */
export declare const getNonPortalPosition: (anchorWidth: number, dropdownWidth: number, overflowX: boolean) => {
    right: number | undefined;
};
//# sourceMappingURL=Dropdown.utils.d.ts.map