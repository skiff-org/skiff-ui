import React, { useRef } from 'react';
import { TextField } from './TextField';

import './CodeInput.scss';

export type CodeInputProps = {
  /** Expected length of code */
  codeLength: number,
  /** Controlled code value */
  value: string,
  /** Whether to only accept numeric input */
  numeric?: boolean,
  /** Size of input box */
  size?: string,
  /** Font size in input box */
  fontSize?: string,
  /** onChange event; fires when code changes */
  onChange: (inputToken: string) => void,
  /** Textfield onKeyPress event */
  onKeyPress: (e: React.KeyboardEvent) => void
};

/**
 * A Numeric Code input component for MFA setup. This component
 * takes input as a set of square text fields.
 */
export function CodeInput(props: CodeInputProps) {
  const {
    codeLength, value, onChange, onKeyPress, numeric, size = '40px', fontSize = '1.6em'
  } = props;
  /** Contains references to all TextField inputs */
  const inputRef = useRef<HTMLElement[]>([]);

  function padEnd(
    arr: Array<string>,
    targetLength: number,
    padString = ''
  ) {
    return Object.assign(
      new Array(targetLength).fill(padString), arr
    );
  }

  const codeValues = padEnd(value.split(''), codeLength);

  const isValidDigit = (newVal: string): boolean => !Number.isNaN(Number(newVal)) && newVal.length === 1;

  // Focuses the input box given by index
  const setCursor = (index: number) => {
    inputRef.current[index]?.focus();
  };

  const handleBackspace = (newValues: string[], index: number) => {
    if (index === 0) { // can't go beyond first entry
      return;
    } // clear existing values
    if (newValues[index] !== '') {
      newValues[index] = '';
    } else { // go back an entry if already cleared
      newValues[index - 1] = '';
      setCursor(index - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
    const newValues = [...codeValues];
    const newVal = e.key;
    if (newVal === 'Backspace') {
      handleBackspace(newValues, index);
    } else {
      if (numeric && !isValidDigit(newVal)) {
        // don't use key value if key is not valid digit
        return;
      }
      newValues[index] = newVal;
      if (index < codeLength - 1) { // move onto next box
        setCursor(index + 1);
      }
    }
    onChange(newValues.join(''));
  };

  const getPastedValues = (e: React.ClipboardEvent) => {
    const pastedValues = e.clipboardData.getData('text/plain').split('');
    if (numeric) {
      return pastedValues.filter(char => isValidDigit(char));
    }
    return pastedValues;
  };

  const parsePastedValues = (pastedValues: string[], index: number) => {
    const newValues = [...codeValues];
    newValues.splice(index, pastedValues.length, ...pastedValues);
    const validValues = newValues.filter(char => !!char);
    return validValues.slice(0, codeLength).join('');
  };

  const handlePaste = (e: React.ClipboardEvent, index: number) => {
    const pastedValues = getPastedValues(e);

    const parsedValues = parsePastedValues(pastedValues, index);
    onChange(parsedValues);

    // Move cursor to next box, or end
    const newIndex = Math.min(parsedValues.length, codeLength - 1);
    setCursor(newIndex);
  };

  const fields = codeValues.map((value: string, index: number) => (
    <TextField
      value={value}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      autoFocus={index === 0}
      width={index + 1 === codeLength ? 'auto' : '200px'}
      style={{
        fontSize,
        width: size,
        height: size,
        textAlign: 'center',
        marginTop: 0
      }}
      innerRef={(ref: HTMLElement) => inputRef.current[index] = ref}
      onKeyPress={onKeyPress}
      onKeyDown={(e: React.KeyboardEvent) => handleKeyPress(e, index)}
      onPaste={(e: React.ClipboardEvent) => handlePaste(e, index)}
    />
  ));

  return (
    <div className="codeInputWrapper">
      {fields}
    </div>
  );
}
