import React from "react";
import { Size, ThemeMode } from "../../types";
import { AccentColor } from "../../utils/colorUtils";
import { AvatarProps } from "../Avatar";
import { Icon } from "../Icons";
import { IconComponent, IconTextProps } from "../IconText";
import { TypographyWeight } from "../Typography";
type AvatarItem = React.ReactElement<AvatarProps>;
export interface ChipProps {
    active?: boolean;
    destructive?: boolean;
    label?: string | React.ReactNode;
    startIcon?: Icon | AvatarItem;
    endIcon?: Icon | IconComponent;
    size?: Size.SMALL | Size.MEDIUM | Size.LARGE;
    forceTheme?: ThemeMode;
    onClick?: (e: React.MouseEvent) => void;
    onDelete?: (e: React.MouseEvent) => void;
    dataTest?: string;
    tooltip?: JSX.Element | string;
    containerColor?: AccentColor;
    color?: IconTextProps["color"];
    noBorder?: boolean;
    transparent?: boolean;
    typographyWeight?: TypographyWeight.REGULAR | TypographyWeight.MEDIUM;
}
export declare const ChipContainer: import("styled-components").StyledComponent<"div", any, {
    $active: boolean;
    $destructive: boolean;
    $pointer: boolean;
    $type: ChipType;
    $size: "small" | "medium" | "large";
    $forceTheme?: ThemeMode | undefined;
    $noBorder?: boolean | undefined;
    $transparent?: boolean | undefined;
}, never>;
export declare const ChipDataTest: {
    endIcon: string;
};
type ChipType = "tag" | "input";
declare const Chip: React.FC<ChipProps>;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map