import React from 'react';
import { isMobile } from 'react-device-detect';
import styled, { css } from 'styled-components';

import { Alignment, Layout, ThemeMode, Type, Size } from '../../types';
import { IconButton } from '../Button';
import ButtonGroup, { ButtonGroupProps } from '../ButtonGroup';
import CustomCircularProgress, { AbsolutelyCentered } from '../CustomCircularProgress';
import Icons, { Icon, IconProps } from '../Icons';
import { InputComponent, TextAreaComponent } from '../InputField';
import Surface, { SurfaceProps, CONFIRM_MODAL_CLASSNAME } from '../Surface';
import Typography, { TypographySize, TypographyWeight } from '../Typography';
import './Dialog.scss';

const MOBILE_CONFIRM_MODAL_WIDTH = 287;
const MOBILE_CONFIRM_MODAL_MAX_WIDTH = 340;

const TitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Wrapper = styled.span<{ stacked: boolean }>`
  position: absolute;
  ${(props) =>
    props.stacked &&
    !isMobile &&
    css`
      & * {
        align-items: flex-start;
        text-align: left;
      }
    `}
  ${(props) =>
    props.stacked &&
    isMobile &&
    css`
      & * {
        text-align: center;
        align-items: center;
      }
    `}
`;

const ButtonContainer = styled.div`
  margin-top: 12px;
  width: 100%;
`;

const CloseButtonAbsolutePos = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export enum DialogTypes {
  Default = 'default',
  Error = 'error',
  Promotional = 'promotional',
  Input = 'input',
  Confirm = 'confirm',
  Settings = 'settings',
  Search = 'search',
  Fullscreen = 'fullscreen',
  Landscape = 'landscape'
}

export interface DialogProps {
  children: ButtonGroupProps['children'] | React.ReactNode;
  open: boolean;
  onClose: () => void;
  // icon or svg
  icon?: IconProps['icon'] | JSX.Element;
  title?: string;
  description?: string;
  type?: DialogTypes;
  dataTest?: string;
  closeBtnDataTest?: string;
  inputField?: Array<InputComponent | TextAreaComponent> | InputComponent | TextAreaComponent;
  loading?: boolean;
  level?: 'l0' | 'l1' | 'l2' | 'l3';
  // if dialog contains non button content otherwise pass in buttom group item and auto-layout
  customContent?: boolean;
  isMobile?: boolean;
  disableOffClick?: boolean;
  padding?: boolean;
  forceTheme?: ThemeMode;
  classesToIgnore?: string[];
  hideCloseButton?: boolean;
  zIndex?: number;
  disableTextSelect?: boolean;
  // Custom height of surface wrapper (e.g. for custom vertical alignment)
  customWrapperHeight?: string | number;
}

type DialogStyleProps = {
  size: SurfaceProps['size'];
  showCloseButton: boolean;
  layout: Layout;
  fullWidth?: boolean;
  mobileLayout: Layout;
  className?: string;
};

const getTypeProps = (type: DialogTypes): DialogStyleProps => {
  switch (type) {
    case DialogTypes.Default:
      return { size: 'large', showCloseButton: true, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
    case DialogTypes.Error:
      return { size: 'normal', showCloseButton: false, layout: Layout.STACKED, mobileLayout: Layout.STACKED };
    case DialogTypes.Promotional:
      return {
        size: 'normal',
        showCloseButton: true,
        layout: Layout.STACKED,
        mobileLayout: Layout.STACKED,
        fullWidth: true
      };
    case DialogTypes.Input:
      return { size: 'xsmall', showCloseButton: false, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
    case DialogTypes.Confirm:
      return {
        size: 'small',
        showCloseButton: false,
        layout: Layout.INLINE,
        fullWidth: true,
        mobileLayout: Layout.INLINE,
        className: CONFIRM_MODAL_CLASSNAME
      };
    case DialogTypes.Search:
      return { size: 'full-width', showCloseButton: false, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
    case DialogTypes.Settings:
      return { size: 'xxlarge', showCloseButton: false, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
    case DialogTypes.Landscape:
      return { size: 'xlarge', showCloseButton: true, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
    case DialogTypes.Fullscreen:
      return {
        size: 'full-screen',
        showCloseButton: true,
        layout: Layout.INLINE,
        mobileLayout: Layout.STACKED
      };
    default:
      return { size: 'large', showCloseButton: true, layout: Layout.INLINE, mobileLayout: Layout.STACKED };
  }
};

const getSurfaceStyle = (type: DialogTypes, isMobile?: boolean, hasDescription?: boolean): React.CSSProperties => {
  switch (type) {
    // Stacked layout items need to be left aligned
    case DialogTypes.Error:
    case DialogTypes.Promotional:
      return { alignItems: 'flex-start', textAlign: 'left' };
    // All non-stacked cased use default alignment
    case DialogTypes.Confirm:
      const gap = isMobile ? 8 : 16;
      if (hasDescription) {
        return {
          display: 'flex',
          gap: `${gap}px`,
          padding: `${isMobile ? 16 : 20}px`,
          minWidth: isMobile ? `${MOBILE_CONFIRM_MODAL_WIDTH}px` : '',
          maxWidth: isMobile ? `${MOBILE_CONFIRM_MODAL_MAX_WIDTH}px` : ''
        };
      }
      return {
        display: 'flex',
        gap: `${gap * 2}px`,
        padding: `${isMobile ? 16 : 20}px`,
        width: isMobile ? `${MOBILE_CONFIRM_MODAL_WIDTH}px` : ''
      };
    default:
      return {};
  }
};

// TODO: Document
export default function Dialog({
  icon,
  title,
  description,
  inputField,
  type = DialogTypes.Default,
  children,
  open,
  dataTest,
  loading,
  level = 'l3',
  customContent,
  onClose,
  isMobile,
  disableOffClick,
  padding = true,
  closeBtnDataTest,
  forceTheme,
  classesToIgnore,
  hideCloseButton = false,
  zIndex,
  disableTextSelect = false,
  customWrapperHeight
}: DialogProps) {
  // TODO: default becomes stacked if mobile

  const {
    className,
    size,
    showCloseButton: typeShowsCloseButton,
    layout,
    fullWidth,
    mobileLayout
  } = getTypeProps(type);

  const showCloseButton = typeShowsCloseButton && !hideCloseButton;

  const closeButton = (
    <CloseButtonAbsolutePos>
      <IconButton
        type={Type.TERTIARY}
        onClick={onClose}
        icon={Icon.Close}
        dataTest={closeBtnDataTest}
        forceTheme={forceTheme}
      />
    </CloseButtonAbsolutePos>
  );

  const spinner = (
    <AbsolutelyCentered>
      <CustomCircularProgress size={Size.X_MEDIUM} spinner />
    </AbsolutelyCentered>
  );
  // Both variables only defined the type of the dialog is Confirm.
  // Otherwise, will use Typography's default values.
  const titleSize = isMobile && type === DialogTypes.Confirm ? TypographySize.LARGE : TypographySize.H4;
  const align = isMobile && type === DialogTypes.Confirm ? Alignment.CENTER : undefined;

  return (
    <Wrapper stacked={isMobile || layout === 'stacked'}>
      <Surface
        className={className}
        customWrapperHeight={customWrapperHeight}
        dataTest={dataTest}
        open={open}
        modal
        input={type === DialogTypes.Input}
        level={level}
        scrim
        size={size}
        onClose={!disableOffClick ? onClose : () => {}} // No-op function ensures nothing happens on close
        showClose={showCloseButton}
        style={{ ...getSurfaceStyle(type, isMobile, !!description), userSelect: disableTextSelect ? 'none' : 'auto' }}
        padding={padding}
        forceTheme={forceTheme}
        classesToIgnore={classesToIgnore}
        zIndex={zIndex}
      >
        {icon && (
          <>
            {/* Icon */}
            {icon && typeof icon === 'string' && (
              <Icons icon={icon} size={Size.X_LARGE} color='secondary' forceTheme={forceTheme} />
            )}
            {/* SVG */}
            {icon && typeof icon === 'object' && icon}
          </>
        )}
        {showCloseButton && closeButton}
        {title && (
          <TitleDescription>
            {title && (
              <Typography
                weight={TypographyWeight.MEDIUM}
                size={titleSize}
                wrap
                forceTheme={forceTheme}
                align={align}
                maxWidth={fullWidth ? '100%' : '90%'}
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography size={TypographySize.MEDIUM} color='secondary' wrap forceTheme={forceTheme} align={align}>
                {description}
              </Typography>
            )}
          </TitleDescription>
        )}
        {loading ? spinner : inputField}
        {!customContent && (
          <ButtonContainer>
            <ButtonGroup fullWidth={fullWidth} layout={isMobile ? mobileLayout : layout}>
              {children as ButtonGroupProps['children']}
            </ButtonGroup>
          </ButtonContainer>
        )}
        {customContent && children}
      </Surface>
    </Wrapper>
  );
}
