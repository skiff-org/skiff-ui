import uniqueId from 'lodash/uniqueId';
import React, { ForwardedRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { SIZE_HEIGHT } from '../../../constants';
import { Size, ThemeMode } from '../../../types';
import Icons, { Icon, IconColor } from '../../Icons';
import { TypographyWeight } from '../../Typography';
import { FILLED_HORIZONTAL_PADDING, INPUT_FIELD_GAP } from '../InputField.constants';
import { INPUT_FIELD_CONTAINER_CSS, INPUT_FIELD_CSS, START_ICON_CSS, WRAPPER_CSS } from '../InputField.styles';
import { InputFieldSize } from '../InputField.types';
import SubText from '../SubText';

import { INPUT_SIZE_CSS } from './Input.styles';
import { InputType, InputProps } from './Input.types';

const Wrapper = styled.div`
  ${WRAPPER_CSS}
`;

const InputFieldContainer = styled.div`
  ${INPUT_FIELD_CONTAINER_CSS}
`;

const StartIcon = styled.div`
  ${START_ICON_CSS}
  justify-content: center;
`;

const EndAdornment = styled.div<{ $ghost: boolean }>`
  height: 100%;
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  gap: ${INPUT_FIELD_GAP}px;

  box-sizing: border-box;
  padding-left: ${INPUT_FIELD_GAP}px;
  padding-right: ${(props) => (props.$ghost ? 0 : FILLED_HORIZONTAL_PADDING)}px;
`;

const StyledInput = styled.input<{
  $active: boolean;
  $error: boolean;
  $ghost: boolean;
  $readOnly: boolean;
  $size: InputFieldSize;
  $startIconExists: boolean;
  $weight: TypographyWeight;
  $borderRadius?: number;
  $caretColor?: IconColor;
  $forceTheme?: ThemeMode;
  $paddingRight?: number;
}>`
  height: ${(props) => SIZE_HEIGHT[props.$size]}px;

  // Custom border radius overrides default size-specific border radius
  ${(props) => props.$borderRadius && `border-radius: ${props.$borderRadius}px !important;`}

  ${INPUT_FIELD_CSS}
  ${INPUT_SIZE_CSS}
`;

const InputField = (
  {
    active,
    autoComplete,
    autoFocus,
    borderRadius,
    caretColor,
    dataTest,
    disabled = false,
    endAdornment,
    error,
    forceTheme,
    ghost = false,
    helperText,
    icon,
    id,
    innerRef,
    placeholder = '',
    readOnly = false,
    size = Size.MEDIUM,
    type = InputType.DEFAULT,
    value = '',
    weight = TypographyWeight.REGULAR,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyPress,
    onPaste
  }: InputProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const [endAdornmentId, setEndAdornmentId] = useState('');
  const [paddingRight, setPaddingRight] = useState<number | undefined>(undefined);

  const endAdornmentArray = !!endAdornment ? (!Array.isArray(endAdornment) ? [endAdornment] : endAdornment) : undefined;

  useEffect(() => {
    setEndAdornmentId(uniqueId('inputField-endAdornment'));
  }, []);

  useEffect(() => {
    if (!endAdornment) return;
    const endAdornmentElement = document.getElementById(endAdornmentId);
    const endAdornmentWidth = endAdornmentElement?.getBoundingClientRect().width ?? 0;
    setPaddingRight(endAdornmentWidth);
  }, [endAdornment, endAdornmentId]);

  const renderIcon = (el: Icon) => <Icons color='disabled' icon={el} size={size} forceTheme={forceTheme} />;

  return (
    <Wrapper ref={ref} onClick={onClick}>
      <InputFieldContainer>
        {!!icon && <StartIcon $ghost={ghost}>{renderIcon(icon)}</StartIcon>}
        <StyledInput
          id={id}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onFocus={onFocus}
          onPaste={onPaste}
          ref={innerRef}
          data-test={dataTest}
          disabled={disabled}
          $startIconExists={!!icon}
          $paddingRight={paddingRight}
          readOnly={readOnly}
          $active={!!active}
          $error={!!error}
          $size={size}
          $ghost={ghost}
          $forceTheme={forceTheme}
          $weight={weight}
          $caretColor={caretColor}
          $readOnly={readOnly}
          $borderRadius={borderRadius}
        />
        {!!endAdornmentArray && (
          <EndAdornment id={endAdornmentId} $ghost={ghost}>
            {endAdornmentArray?.map((el: Icon | React.ReactNode) =>
              typeof el === 'string' ? renderIcon(el as Icon) : el
            )}
          </EndAdornment>
        )}
      </InputFieldContainer>
      {typeof error === 'string' && (
        <SubText errorMsg={error} helperText={helperText} size={size} forceTheme={forceTheme} />
      )}
    </Wrapper>
  );
};

export default React.forwardRef<HTMLDivElement, InputProps>(InputField);
