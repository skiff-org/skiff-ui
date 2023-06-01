import { DROPDOWN_GAP } from "../Surface";

/**
 * Returns whether the dropdown overflows in x
 * @param x - left
 * @param width - dropdown width
 */
export const overflowsInX = (x: number, width: number) =>
  x + width + DROPDOWN_GAP > window.innerWidth;

/**
 * Returns whether the dropdown overflows in y
 * @param y - top
 * @param height - dropdown height
 */
export const overflowsInY = (y: number, height: number) =>
  y + height + DROPDOWN_GAP > window.innerHeight;

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
export const getPortalPosition = (
  anchorHeight: number,
  anchorLeftEdge: number,
  anchorRightEdge: number,
  anchorTopEdge: number,
  dropdownHeight: number,
  dropdownWidth: number,
  gapFromAnchor: number,
  overflowX: boolean,
  overflowY: boolean
) => {
  const left = overflowX ? anchorRightEdge - dropdownWidth : anchorLeftEdge;
  const top = overflowY
    ? anchorTopEdge - dropdownHeight - gapFromAnchor
    : anchorTopEdge + anchorHeight + gapFromAnchor;
  return { left, top };
};

/**
 * Returns absolute position for non-portal dropdowns
 * @param anchorWidth
 * @param dropdownWidth
 * @param overflowX
 */
export const getNonPortalPosition = (
  anchorWidth: number,
  dropdownWidth: number,
  overflowX: boolean
) => {
  const right = overflowX ? dropdownWidth - anchorWidth : undefined;
  return { right };
};
