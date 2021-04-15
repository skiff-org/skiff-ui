import * as React from 'react';
import { Tooltip } from './Tooltip';
import Info from './assets/info-thin.svg';
import './TextField.css';

export interface TextFieldProps {
  /** The width of the TextField */
  width?: string;
  /** TextField placeholder text */
  placeholder?: string;
  /** TextField label */
  label?: string;
  /** TextField button placed on same line as label */
  labelButton?: JSX.Element;
  /** Controlled TextField value */
  value?: string;
  /** TextField hint to show in Tooltip */
  hint?: string;
  /** TextField direction for Tooltip */
  hintDirection?: 'top' | 'right' | 'bottom' | 'left';
  /** TextField onChange event */
  onChange?: (e: React.ChangeEvent<any>) => void;
  /** TextField onKeyPress event */
  onKeyPress?: (e: React.KeyboardEvent<any>) => void;
  /** TextField onKeyDown event */
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
  /** TextField onBlur event */
  onBlur?: (e: React.FocusEvent<any>) => void;
  /** TextField onFocus event */
  onFocus?: (e: React.FocusEvent<any>) => void;
  /** TextField onPaste event */
  onPaste?: (e: React.ClipboardEvent) => void;
  /** The type for the TextField */
  type?: 'default' | 'password' | 'send';
  /** Textfield in-line style */
  style?: object;
  /** Textfield endAdornment component */
  endAdornment?: React.ReactNode;
  /** Textfield autofocus input  */
  autoFocus?: boolean;
  /** Textfield use multi-line text area  */
  useTextArea?: boolean;
  /** Ref passed to inner input component */
  innerRef?: React.Ref<HTMLElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  type = 'default',
  width = '200px',
  placeholder = '',
  label = '',
  labelButton,
  value,
  hint,
  hintDirection = 'bottom',
  style = {},
  endAdornment,
  autoFocus,
  useTextArea,
  innerRef,
  onChange = () => {},
  onKeyPress = () => {},
  onKeyDown = () => {},
  onBlur = () => {},
  onFocus = () => {},
  onPaste = () => {}
}) => {
  const types = {
    default:
      {
        backgroundColor: '#fcfcfc',
        color: 'black',
        border: '2px solid #d8d8d8',
        borderRadius: '8px',
        variant: 'text',
        height: '0px'
      },
    password:
      {
        backgroundColor: '#fcfcfc',
        color: 'black',
        border: '2px solid #d8d8d8',
        borderRadius: '8px',
        variant: 'password',
        height: '0px'
      },
    send:
      {
        backgroundColor: '#f5f5f7',
        color: 'black',
        border: 'none',
        borderRadius: '50px',
        variant: 'text',
        height: '16px'
      }
  };

  const styles = {
    backgroundColor: types[type].backgroundColor,
    border: types[type].border,
    color: types[type].color,
    marginLeft: 0,
    fontSize: '1em',
    lineHeight: '1.2em',
    fontFamily: 'Mulish, sans-serif',
    padding: '18px',
    borderRadius: types[type].borderRadius,
    height: types[type].height,
    textAlign: 'left' as const,
    verticalAlign: 'middle' as const,
    marginTop: 10,
    width,
    outline: 'none'
  };

  return (
    <div style={{ width: `${width}` }}>
      <div style={{ display: 'inline-flex', width: '100%' }}>
        <div style={{ fontFamily: 'Mulish, sans-serif' }}>{label}</div>
        {labelButton}
        {hint && (
        <Tooltip
          description={hint}
          direction={hintDirection}
        >
          <img alt="info" style={{ width: '16px', height: '16px' }} src={Info} />
        </Tooltip>
        )}
      </div>
      {/* TODO: consolidate to always textarea, or always input (or separate
        into two components), current impl cannot be properly typed. (#1588) */}
      {useTextArea
        ? (
          <textarea
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            style={{
              ...styles, ...style, height: '70px', resize: 'none', padding: '10px', fontSize: '0.9em', backgroundColor: '#f9f9f9'
            }}
            className="textInput"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            onPaste={onPaste}
            ref={innerRef as React.Ref<HTMLTextAreaElement>}
          />
        )
        : (
          <input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={autoFocus}
            type={types[type].variant}
            style={{ ...styles, ...style }}
            className="textInput"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onFocus={onFocus}
            onPaste={onPaste}
            ref={innerRef as React.Ref<HTMLInputElement>}
          />
        )}
      {endAdornment}
    </div>
  );
};

export default TextField;