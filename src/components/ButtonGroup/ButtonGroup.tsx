import * as React from 'react';
import styled from 'styled-components';

import { Layout, Size } from '../../types';
import { Button, IconButton } from '../Button';
import { Icon } from '../Icons';

import { BUTTON_GROUP_SIZE_CSS } from './ButtonGroup.styles';
import { ButtonGroupItem, ButtonGroupProps, ButtonGroupSize } from './ButtonGroup.types';
import { getButtonType } from './ButtonGroup.utils';

const ButtonGroupContainer = styled.div<{ $isInline: boolean; $size: ButtonGroupSize }>`
  display: flex;
  justify-content: ${(props) => props.$isInline && 'flex-start'};
  flex-direction: ${(props) => (props.$isInline ? 'row-reverse' : 'column')};
  align-items: center;
  width: 100%;
  ${BUTTON_GROUP_SIZE_CSS}
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  size = Size.MEDIUM,
  layout = Layout.INLINE,
  children,
  fullWidth = false,
  iconOnly
}) => {
  const isInline = layout === Layout.INLINE;
  const visibleChildren = (React.Children.toArray(children) as ButtonGroupItem[]).filter(
    (child: ButtonGroupItem) => !child.props.hidden
  );

  return (
    <ButtonGroupContainer $isInline={isInline} $size={size}>
      {visibleChildren.map((buttonGroupItem: ButtonGroupItem, index) => {
        const { dataTest, destructive, disabled, forceTheme, icon, id, label, loading, onClick, ref } =
          buttonGroupItem.props;
        const buttonType = getButtonType(index, destructive);
        const showIconOnly = iconOnly && index > 0;
        const key = `button_${index}_${label}`;
        return (
          <>
            {showIconOnly && (
              <IconButton
                ref={ref}
                key={key}
                disabled={disabled}
                dataTest={dataTest}
                icon={icon || Icon.Plus}
                id={id}
                onClick={onClick}
                forceTheme={forceTheme}
                tooltip={label}
                size={size}
              />
            )}
            {!showIconOnly && (
              <Button
                ref={ref}
                key={key}
                loading={loading}
                disabled={disabled}
                dataTest={dataTest}
                startIcon={icon}
                id={id}
                fullWidth={fullWidth}
                onClick={onClick}
                size={size}
                forceTheme={forceTheme}
                type={buttonType}
              >
                {label}
              </Button>
            )}
          </>
        );
      })}
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
