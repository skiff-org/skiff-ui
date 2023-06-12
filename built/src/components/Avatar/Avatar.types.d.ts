/// <reference types="react" />
import { Size, ThemeMode } from '../../types';
import { AccentColor } from '../../utils/colorUtils';
import { RequireOnlyOne } from '../../utils/typeUtils';
import { Icon } from '../Icons';
import { TypographySize } from '../Typography/Typography.constants';
interface BaseAvatarProps {
    /** Whether or not user is online */
    active?: boolean;
    background?: string;
    /** Custom badge color */
    badgeColor?: AccentColor;
    /** Custom badge icon */
    badgeIcon?: Icon;
    /** Override default badge size */
    badgeSize?: number;
    /** Override color */
    color?: AccentColor;
    dataTest?: string;
    disabled?: boolean;
    forceTheme?: ThemeMode;
    /** Avatar icon */
    icon?: Icon;
    iconDataTest?: string;
    imageDataTest?: string;
    imageSrc?: string;
    /** Avatar label */
    label?: string;
    /** Override border radius to be circular */
    rounded?: boolean;
    /** Display user status badge */
    showBadge?: boolean;
    showIconSource?: boolean;
    /** The size for the Avatar */
    size?: Size;
    /** Avatar in-line style */
    style?: React.CSSProperties;
    /** Card onClick action */
    onClick?: (e: React.MouseEvent) => void;
}
export type AvatarProps = RequireOnlyOne<BaseAvatarProps, 'label' | 'icon'>;
export type AvatarComponent = React.ReactElement<AvatarProps>;
export type SizeStyles = {
    avatarSize: number;
    borderRadius: number;
    borderWidth: number;
    iconSize: Size;
    typographySize: TypographySize;
};
export {};
//# sourceMappingURL=Avatar.types.d.ts.map