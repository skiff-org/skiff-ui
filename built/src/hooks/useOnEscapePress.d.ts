import { RefObject } from 'react';
/**
 * This hook handles escape key presses on the last element present in the
 * DOM that meets a given selector criteria (e.g. classname). It can be used
 * to, for example, close the top-most Surface component on an escape key press.
 * @param {RefObject<HTMLElement>} listeningRef - The ref for the component that should listen for escape presses.
 * @param {string} selector - The selector by which to find elements that may be simultaneously listening.
 * @param {function} handler - The handler called on qualified escape presses.
 */
export declare const useOnEscapePress: (listeningRef: RefObject<HTMLElement>, selector: string, handler: () => void) => void;
//# sourceMappingURL=useOnEscapePress.d.ts.map