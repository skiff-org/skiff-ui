import { CodeInputType } from './CodeInput.constants';
/** Checks that the input is valid
 * @param {CodeInputType} type - The input type
 * @param {string} value - The input value
 */
export declare const isValid: (type: CodeInputType, value: string) => boolean;
/** Pads the current string with a given string, as many times necessary, so that the resulting string array reaches a given length
 * @param {string} currString - Current string
 * @param {number} targetLength - Length required
 * @param {string} padString - String used for padding
 * @returns {string[]} - The resulting string is returned in the form of an array of characters
 */
export declare const padEnd: (currString: string, targetLength: number, padString?: string) => any[] & string[];
//# sourceMappingURL=CodeInput.utils.d.ts.map