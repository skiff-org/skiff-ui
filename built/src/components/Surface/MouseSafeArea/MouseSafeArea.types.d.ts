import { RefObject } from 'react';
export interface MouseSafeAreaProps {
    /** Whether the submenu is opening to the right or to the left of the parent cell */
    openRight: boolean;
    /** A ref of the parent cell */
    parentRef: RefObject<HTMLDivElement>;
    setIsInSafeArea: (arg: boolean) => void;
}
//# sourceMappingURL=MouseSafeArea.types.d.ts.map