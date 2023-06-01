import { MutableRefObject, RefObject } from 'react';
import { MouseClickEvents, TouchEvents } from '../types';
/**
 * calls the handler when there is click outside the ref
 */
export declare function useOnClickOutside(ref: RefObject<HTMLElement>, handler: (event: MouseEvent | TouchEvent) => void, excludedClasses?: string[], events?: {
    web?: MouseClickEvents;
    mobile?: TouchEvents;
}, excludedRefs?: (MutableRefObject<HTMLDivElement | null> | undefined)[], disable?: boolean, 
/** The max number of pixels the mouse can move between the `mousedown` and the `mouseup` events. If exceeded will not call the handler */
clickMaxOffset?: number): void;
//# sourceMappingURL=useClickOutside.d.ts.map