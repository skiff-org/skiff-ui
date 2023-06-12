import { ThemeMode } from '../../../types';
import { InputFieldSize } from '../InputField.types';
interface SubTextProps {
    size: InputFieldSize;
    errorMsg?: string;
    forceTheme?: ThemeMode;
    helperText?: string;
}
declare const SubText: ({ errorMsg, forceTheme, helperText, size }: SubTextProps) => JSX.Element;
export default SubText;
//# sourceMappingURL=SubText.d.ts.map