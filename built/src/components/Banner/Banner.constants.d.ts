import { AccentColor } from '../../utils/colorUtils';
import { Icon } from '../Icons';
interface BannerCTA {
    label: string;
    onClick: () => void;
}
export interface BannerProps {
    label: string;
    color?: AccentColor;
    ctas?: BannerCTA[];
    icon?: Icon;
    onClose?: () => void;
}
export declare const BANNER_HEIGHT = 40;
export {};
//# sourceMappingURL=Banner.constants.d.ts.map