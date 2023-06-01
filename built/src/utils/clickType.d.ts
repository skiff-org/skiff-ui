import React from 'react';
export declare enum ClickType {
    Left = 0,
    Middle = 1,
    Right = 2,
    Meta = 3,
    Ctrl = 4
}
export declare const getClickType: (evt: React.MouseEvent | MouseEvent) => ClickType;
export declare const eventOfClickType: (evt: React.MouseEvent | MouseEvent, clickTypes: ClickType[]) => boolean;
//# sourceMappingURL=clickType.d.ts.map