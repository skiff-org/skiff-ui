import { AvatarComponent } from '../Avatar';
import { FacepileSize, StackedAvatarPosition } from './Facepile.constants';
/**
 * Used to sort Avatar arrays by putting active Avatars before inactive Avatars
 * Used for inline Facepiles
 */
export declare function compareInlineAvatars(firstItem: AvatarComponent, secondItem: AvatarComponent): 0 | 1 | -1;
/**
 * Used to sort Avatar arrays by putting inactive Avatars before active Avatars
 * Used for stacked Facepiles
 */
export declare function compareStackedAvatars(firstItem: AvatarComponent, secondItem: AvatarComponent): 0 | 1 | -1;
/**
 * Returns a stacked Facepile's dimensions
 * @param {number} numOfItems - Number of visible items including the More label
 * @param {FacepileSize} size - The Avatar's size value
 * @returns {{ width: number, height: number }} - Width and height dimensions of the Facepile
 */
export declare const getStackedFacepileWrapperSize: (numOfItems: number, size: FacepileSize) => {
    width: number;
    height: number;
};
/**
 * Returns an Avatar's position in a stacked Facepile depending on their order in the pile
 * @param {number} index - The Avatar's order in the Facepile
 * @param {number} numOfItems - Number of visible items including the More label
 * @param {FacepileSize} size
 * @returns {StackedAvatarPosition} - Left and top positioning of the Avatar item
 */
export declare const getStackedAvatarPositions: (index: number, numOfItems: number, size: FacepileSize) => StackedAvatarPosition;
//# sourceMappingURL=Facepile.utils.d.ts.map