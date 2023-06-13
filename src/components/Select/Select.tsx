import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { FilledVariant, Size } from '../../types';
import Dropdown from '../Dropdown';
import { Icon } from '../Icons';
import IconText from '../IconText/IconText';
import { InputField } from '../InputField';
import { TypographyWeight } from '../Typography';

import { SelectProps } from './Select.types';

const SelectContainer = styled.div<{ $width?: number | string }>`
  ${({ $width }) => $width && `width: ${typeof $width === 'string' ? $width : `${$width}px`};`}
`;

export default function Select({
  children,
  onChange,
  dataTest,
  disabled,
  forceTheme,
  ghostColor,
  maxHeight,
  placeholder,
  size = Size.LARGE,
  value,
  width,
  fullWidth = true,
  variant = FilledVariant.UNFILLED,
  zIndex
}: SelectProps) {
  // Whether the dropdown is visible or not
  const [menuOpen, setMenuOpen] = useState(false);

  const endIcon = menuOpen ? Icon.ChevronUp : Icon.ChevronDown;
  const typographyWeight = TypographyWeight.REGULAR;

  // To get dropdown anchor
  const selectTriggerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const selectedLabel = children.find((child) => value === child.props.value)?.props.label;

  const toggleOpen = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const renderDisabledField = () => (
    <IconText
      forceTheme={forceTheme}
      dataTest={dataTest}
      disabled
      label={selectedLabel ?? placeholder}
      size={size}
      weight={typographyWeight}
    />
  );

  const renderEnabledField = () =>
    variant === FilledVariant.FILLED ? (
      // Filled field
      <InputField
        active={menuOpen}
        disabled
        dataTest={dataTest}
        endAdornment={endIcon}
        onClick={toggleOpen}
        placeholder={placeholder}
        ref={selectTriggerRef}
        value={typeof selectedLabel === 'string' ? selectedLabel : ''}
        size={size}
        forceTheme={forceTheme}
      />
    ) : (
      // Ghost field
      <IconText
        forceTheme={forceTheme}
        ref={selectTriggerRef}
        dataTest={dataTest}
        onClick={toggleOpen}
        label={selectedLabel ?? placeholder}
        endIcon={endIcon}
        size={size}
        weight={typographyWeight}
        color={ghostColor}
      />
    );

  const renderSelectItems = () =>
    children.map((child) => {
      return React.cloneElement(child, {
        active: value === child.props.value,
        key: typeof child.props.label === 'string' ? child.props.label : child.props.value,
        onClick: async (e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          // If the child has its own onClick function passed, then it is not a normal select item
          // and we should run onClick without running onChange
          if (!!child.props.onClick) await child.props.onClick(e);
          else if (!!child.props.value) onChange(child.props.value);
          toggleOpen();
        }
      });
    });

  return (
    <SelectContainer $width={width}>
      {/* Field */}
      {disabled ? renderDisabledField() : renderEnabledField()}
      {/* Option menu */}
      <Dropdown
        portal
        buttonRef={selectTriggerRef}
        setShowDropdown={() => toggleOpen()}
        showDropdown={menuOpen}
        fullWidth={fullWidth}
        maxHeight={maxHeight}
        zIndex={zIndex}
      >
        {renderSelectItems()}
      </Dropdown>
    </SelectContainer>
  );
}
