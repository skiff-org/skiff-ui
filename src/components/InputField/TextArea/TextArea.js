import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Size } from '../../../types';
import Icons from '../../Icons';
import { TypographyWeight } from '../../Typography';
import { INPUT_FIELD_CONTAINER_CSS, INPUT_FIELD_CSS, START_ICON_CSS, WRAPPER_CSS } from '../InputField.styles';
import SubText from '../SubText/SubText';
import { VERTICAL_PADDING, TEXT_AREA_ID } from './TextArea.constants';
const Wrapper = styled.div `
  ${WRAPPER_CSS}
`;
const TextAreaContainer = styled.div `
  ${INPUT_FIELD_CONTAINER_CSS}
`;
const StartIcon = styled.div `
  ${START_ICON_CSS}
  justify-content: flex-start;
  padding-top: ${(props) => VERTICAL_PADDING[props.$size]}px;
`;
const StyledTextArea = styled.textarea `
  padding-top: ${(props) => VERTICAL_PADDING[props.$size]}px;
  padding-bottom: ${(props) => VERTICAL_PADDING[props.$size]}px;
  border-radius: ${(props) => (props.$borderRadius ? props.$borderRadius : 8)}px !important;
  ${INPUT_FIELD_CSS};
`;
const TextArea = ({ active, autoComplete, autoFocus, borderRadius, caretColor, dataTest, disabled = false, error, errorMsg, forceTheme, ghost = false, helperText, icon, innerRef, placeholder = '', readOnly = false, rows = 3, dynamicHeight = false, size = Size.MEDIUM, value = '', weight = TypographyWeight.REGULAR, onBlur, onChange, onClick, onFocus, onKeyDown, onKeyPress }, ref) => {
    useEffect(() => {
        if (!dynamicHeight)
            return;
        const textAreaElement = document.getElementById(TEXT_AREA_ID);
        // We need to reset the height momentarily to get the correct scrollHeight for the textarea
        textAreaElement.style.height = 'auto';
        // We then set the height directly, outside of the render loop
        // Trying to set this with state or a ref will product an incorrect value.
        textAreaElement.style.height = `${textAreaElement.scrollHeight}px`;
    }, [dynamicHeight, value]);
    return (_jsxs(Wrapper, { ref: ref, onClick: onClick, children: [_jsxs(TextAreaContainer, { children: [!!icon && (_jsx(StartIcon, { "$ghost": ghost, "$size": size, children: _jsx(Icons, { color: 'disabled', icon: icon, size: size, forceTheme: forceTheme }) })), _jsx(StyledTextArea, { id: TEXT_AREA_ID, autoFocus: autoFocus, autoComplete: autoComplete, rows: rows, placeholder: placeholder, value: value, onChange: onChange, onKeyPress: onKeyPress, onKeyDown: !!onKeyDown
                            ? (e) => {
                                e.stopPropagation();
                                onKeyDown(e);
                            }
                            : undefined, onBlur: onBlur, onFocus: onFocus, "data-test": dataTest, ref: innerRef, disabled: disabled, readOnly: readOnly, "$active": !!active, "$dynamicHeight": dynamicHeight, "$error": !!error || !!errorMsg, "$size": size, "$startIconExists": !!icon, "$ghost": ghost, "$forceTheme": forceTheme, "$weight": weight, "$caretColor": caretColor, "$borderRadius": borderRadius })] }), _jsx(SubText, { errorMsg: errorMsg, helperText: helperText, size: size, forceTheme: forceTheme })] }));
};
export default React.forwardRef(TextArea);
//# sourceMappingURL=TextArea.js.map