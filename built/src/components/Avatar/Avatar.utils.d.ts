import { Icon } from '../Icons';
/**
 * Takes a potentially undefined label and icon
 * Returns an object that can be spread into avatar as a prop (prioritizing icon)
 * @param {string | undefined} label
 * @param {Icon | undefined} icon
 */
export declare const getAvatarIconOrLabel: (label: string | undefined, icon: Icon | undefined) => {
    icon: Icon;
    label?: undefined;
} | {
    label: string;
    icon?: undefined;
};
/**
 * Strips emojis from a string by removing all non-ASCII characters
 * @param {string} str - Text with emojis
 * @returns {string} - Text without emojis
 */
export declare const stripEmojis: (str: string) => string;
//# sourceMappingURL=Avatar.utils.d.ts.map