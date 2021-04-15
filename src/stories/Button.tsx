import React from 'react';
import './button.css';

export interface ButtonProps {
  /** The size for the button */
  size: 'small' | 'normal' | 'large';
  /** The type for the button */
  type: 'default' | 'primary' | 'secondary' | 'disabled' | 'toolbar';
  /** Disable button */
  disabled?: boolean;
  /** Gets called when the user clicks on the button */
  onClick: (e: React.MouseEvent) => void;
  /** Button child component */
  children?: React.ReactNode;
  /** Button icon component */
  startIcon?: React.ReactNode;
  /** Button in-line style */
  style?: object;
  /** Button class name */
  className?: string;
  /** Button id */
  id?: string;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<ButtonProps> = ({
  size = 'normal',
  type = 'default',
  startIcon,
  disabled = false,
  onClick,
  children,
  style,
  className,
  id,
  ...props
}) => {
  const embedicon = startIcon ?? null;
  const definedType = type || 'default';
  const definedSize = size || 'normal';

  const sizes = {
    small: '12px',
    normal: '14px',
    large: '16px'
  };
  const buttonTypes = {
    default: {
      padding: '0.225em 0.9em',
      borderRadius: '4px',
      bgColor: 'inherit',
      color: '#0070f8',
      boxShadow: 'none',
      border: '1px solid #0070f8'
    },
    toolbar: {
      padding: '0.225em 0.9em',
      borderRadius: '4px',
      bgColor: 'var(--toolbar-button-background)',
      color: 'var(--primary-text-color)',
      boxShadow: 'none',
      border: '1px solid transparent'
    },
    primary: {
      padding: embedicon ? '0.675em 1.8em 0.675em 0.9em' : '0.54em 1.8em',
      borderRadius: '60px',
      bgColor: 'var(--primary-button-background)',
      color: 'white',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.09)',
      border: 'none'
    },
    secondary: {
      padding: embedicon ? '0.675em 1.8em 0.675em 0.9em' : '0.675em 1.8em',
      borderRadius: '60px',
      bgColor: 'white',
      color: 'black',
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.09)',
      border: 'none'
    },
    disabled: {
      padding: '0.675em 1.8em',
      borderRadius: '16px',
      bgColor: '#f0f1f7',
      color: '#979bab',
      boxShadow: 'none',
      border: 'none'
    }
  };

  const sharedStyles = {
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 600,
    verticalAlign: 'middle',
    outline: 'none',
    height: 'fit-content'
  };

  const buttonSpecificStyles = {
    padding: buttonTypes[definedType].padding,
    backgroundColor: buttonTypes[definedType].bgColor,
    color: buttonTypes[definedType].color,
    borderRadius: buttonTypes[definedType].borderRadius,
    boxShadow: buttonTypes[definedType].boxShadow,
    border: buttonTypes[definedType].border
  };

  const disabledStyles = {
    cursor: disabled ? 'auto' : 'pointer',
    opacity: disabled ? '0.5' : '1.0'
  };

  const sizeSpecificStyles = {
    fontSize: sizes[definedSize]
  };

  const styles = {
    ...sharedStyles,
    ...sizeSpecificStyles,
    ...buttonSpecificStyles,
    ...disabledStyles
  };

  return (
    <button
      className={`${disabled ? '' : 'hoverEffects'} ${className}`}
      id={id}
      disabled={disabled}
      onClick={onClick}
      style={{ ...styles, ...style }}
      type="button"
    >
      <div
        style={{
          display: '-webkit-flex',
          justifyContent: 'center',
          cursor: disabled ? 'auto' : 'pointer'
        }}
      >
        {startIcon}
        {children}
      </div>
    </button>
  );
};

export default Button;