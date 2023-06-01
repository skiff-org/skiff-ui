/**
 * This component is used to create an invisible mask behind another
 * component, e.g. an option menu, so that all background scrolling and
 * events can be easily disabled. Uses the same zindex as Mui dialog to let
 * the order in the DOM (order of insert) determine which dialog shows on top.
 * This is the same logic as scrim, given that this is a kind of invisible scrim
 */
declare const BackgroundBlocker: import("styled-components").StyledComponent<"div", any, {}, never>;
export default BackgroundBlocker;
//# sourceMappingURL=BackgroundBlocker.d.ts.map