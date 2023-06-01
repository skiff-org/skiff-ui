import React from "react";
import styled, { css } from "styled-components";

import { Size, ThemeMode } from "../../types";
import {
  AccentColor,
  ACCENT_COLOR_VALUES,
  Color,
} from "../../utils/colorUtils";
import { AvatarProps } from "../Avatar";
import Icons, { Icon, IconProps } from "../Icons";
import { IconComponent, IconTextProps } from "../IconText";
import { ICON_TEXT_TYPOGRAPHY_SIZE } from "../IconText/IconText.constants";
import Tooltip, {
  TooltipContent,
  TooltipPlacement,
  TooltipTrigger,
} from "../Tooltip";
import Typography, { TypographyWeight } from "../Typography";

type AvatarItem = React.ReactElement<AvatarProps>;

export interface ChipProps {
  /* updates styling */
  active?: boolean;
  /* destructive styling for invalid chip values */
  destructive?: boolean;
  /* text in the middle of the chip */
  label?: string | React.ReactNode;
  /* Icon or Avatar */
  startIcon?: Icon | AvatarItem;
  /* Only applicable for tag type */
  endIcon?: Icon | IconComponent;
  size?: Size.SMALL | Size.MEDIUM | Size.LARGE;
  forceTheme?: ThemeMode;
  /* Triggered any part of the chip container is clicked */
  /* use to toggle active state */
  onClick?: (e: React.MouseEvent) => void;
  /* Triggered when the x icon on an input tag is clicked */
  onDelete?: (e: React.MouseEvent) => void;
  dataTest?: string;
  tooltip?: JSX.Element | string;
  containerColor?: AccentColor;
  color?: IconTextProps["color"];
  noBorder?: boolean;
  transparent?: boolean;
  typographyWeight?: TypographyWeight.REGULAR | TypographyWeight.MEDIUM;
}

export const ChipContainer = styled.div<{
  $active: boolean;
  $destructive: boolean;
  $pointer: boolean;
  $type: ChipType;
  $size: "small" | "medium" | "large";
  $forceTheme?: ThemeMode;
  $noBorder?: boolean;
  $transparent?: boolean;
}>`
  background: ${(props) =>
    props.$forceTheme
      ? props.$forceTheme === ThemeMode.LIGHT
        ? "rgb(255, 255, 255)"
        : "rgba(41, 41, 41, 0.72)"
      : props.$destructive
      ? "var(--bg-overlay-destructive)"
      : "var(--bg-overlay-tertiary)"};
  ${(props) =>
    !props.$noBorder &&
    css`
      border: 1px solid
        ${props.$forceTheme
          ? props.$forceTheme === ThemeMode.LIGHT
            ? "rgba(0,0,0,0.14)"
            : "rgba(255,255,255,0.12)"
          : "var(--border-tertiary)"};
    `}
  // if transparent then no background
    ${(props) =>
    props.$transparent &&
    css`
      background: transparent !important;
    `}

  border-radius: 100px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 0;
  gap: 0px;
  padding: 4px;
  width: fit-content;

  ${(props) =>
    props.$pointer &&
    css`
      cursor: pointer;
    `}

  ${(props) =>
    !props.$active &&
    props.$type === "input" &&
    css`
      &:hover {
        background: ${props.$forceTheme
          ? props.$forceTheme === ThemeMode.LIGHT
            ? "rgba(0,0,0,0.06)"
            : "rgba(255,255,255,0.08)"
          : props.$destructive
          ? "var(--bg-overlay-destructive)"
          : "var(--cta-chip-hover)"};
        ${!props.$noBorder &&
        css`
          border: 1px solid
            ${props.$forceTheme
              ? props.$forceTheme === ThemeMode.LIGHT
                ? "rgba(0,0,0,0.48)"
                : "rgba(255,255,255,0.48)"
              : "var(--border-tertiary)"};
        `}
      }
    `}

  ${(props) =>
    props.$active &&
    props.$type === "tag" &&
    css`
      background: ${props.$forceTheme
        ? props.$forceTheme === ThemeMode.LIGHT
          ? "rgb(0, 0, 0)"
          : "rgb(255, 255, 255)"
        : "var(--cta-chip-hover)"};
      border: 1px solid
        ${props.$forceTheme
          ? props.$forceTheme === ThemeMode.LIGHT
            ? "rgba(0,0,0,0.48)"
            : "rgba(255,255,255,0.48)"
          : "var(--border-tertiary)"};
    `}

    ${(props) =>
    props.$active &&
    props.$type === "input" &&
    css`
      border: 1px solid
        ${props.$forceTheme
          ? props.$forceTheme === ThemeMode.LIGHT
            ? "rgb(0,0,0)"
            : "rgb(255,255,255)"
          : "var(--border-tertiary)"};
      background: ${props.$forceTheme
        ? props.$forceTheme === ThemeMode.LIGHT
          ? "rgba(0,0,0,0.06)"
          : "rgba(255,255,255,0.08)"
        : props.$destructive
        ? "var(--bg-overlay-destructive)"
        : "var(--cta-chip-hover)"};
    `}
`;

const IconContainer = styled.div<{
  $size: number;
  $bgColor?: string;
  $destructive?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  border-radius: 60px;
  background: ${(props) =>
    props?.$destructive
      ? "var(--bg-overlay-destructive)"
      : props?.$bgColor ?? "var(--bg-overlay-tertiary)"};
`;

const getEndIconColor = (
  type: string,
  active: boolean,
  destructive: boolean
): IconProps["color"] => {
  if (destructive) return "destructive";
  // 'input' type will be the X icon => secondary color
  if (type === "input") return "secondary";
  // 'tag' type with dark background => inverse color
  if (active) return "inverse";
  // 'tag' type with light background => primary color
  return "primary";
};

const getIconText = (
  type: string,
  active: boolean,
  destructive: boolean,
  color: IconTextProps["color"]
): Color => {
  // Inverse background, requires special styling for various elements
  const activeTag = type === "tag" && active;
  if (activeTag) return "inverse";
  if (destructive) return "destructive";
  return color || "primary";
};

export const ChipDataTest = {
  endIcon: "end-icon",
};

const getTooltipLabel = (tooltip: JSX.Element | string) => {
  if (typeof tooltip === "string") return tooltip;
  if (tooltip === undefined) return "";
  return tooltip;
};

const PaddedText = styled.div`
  padding: 0 8px;
`;

type ChipType = "tag" | "input";

const Chip: React.FC<ChipProps> = (props) => {
  const {
    active = false,
    destructive = false,
    endIcon: endIconProp,
    startIcon,
    label,
    size = Size.MEDIUM,
    onClick,
    onDelete,
    dataTest,
    forceTheme,
    tooltip = "",
    containerColor,
    color,
    noBorder,
    transparent,
    typographyWeight = TypographyWeight.REGULAR,
  } = props;
  // 'tag' - Used to label a system state, or to display filter options to narrow down a list.
  // 'input' - Used to display a value treated as an immutable unit, resulting from a user input
  // If onDelete is passed, then the Chip is an 'input' and can be deleted
  const type: ChipType = !!onDelete ? "input" : "tag";
  const iconTextColor = getIconText(type, active, destructive, color);
  // If 'input' chip, then end icon is an X that calls onDelete
  const endIcon = type === "input" ? Icon.Close : endIconProp;

  const handleEndIconClick = (e: React.MouseEvent) => {
    if (type === "input" && !!onDelete) {
      onDelete(e);
      e.stopPropagation();
    }
  };

  const getIconSize = () => {
    switch (size) {
      case Size.SMALL:
        return Size.X_SMALL;
      case Size.MEDIUM:
        return Size.SMALL;
      case Size.LARGE:
        return Size.MEDIUM;
      default:
        return Size.SMALL;
    }
  };

  const getIconContainerSize = () => {
    switch (size) {
      case Size.SMALL:
        return 16;
      case Size.MEDIUM:
        return 20;
      case Size.LARGE:
        return 24;
      default:
        return 20;
    }
  };

  const endIconComponent =
    endIcon &&
    (typeof endIcon === "object" ? (
      React.cloneElement(endIcon, { dataTest: ChipDataTest.endIcon })
    ) : (
      <Icons
        color={getEndIconColor(type, active, destructive)}
        dataTest={ChipDataTest.endIcon}
        icon={endIcon}
        // Check for onClick or onDelete to prevent a cursor pointer if there's no click handling
        onClick={(onClick || onDelete) && handleEndIconClick}
        forceTheme={forceTheme}
      />
    ));

  const tooltipLabel = getTooltipLabel(tooltip);
  const typographySize = ICON_TEXT_TYPOGRAPHY_SIZE[size];
  const containerSize = getIconContainerSize();
  const containerBgColor = containerColor
    ? ACCENT_COLOR_VALUES[containerColor][1]
    : undefined;

  return (
    <Tooltip placement={TooltipPlacement.BOTTOM_START}>
      <TooltipContent>{tooltipLabel}</TooltipContent>
      <TooltipTrigger>
        <ChipContainer
          $active={active}
          $destructive={destructive}
          $noBorder={noBorder}
          onClick={onClick}
          $pointer={!!onClick}
          $size={size}
          $forceTheme={forceTheme}
          $transparent={transparent}
          $type={type}
          data-test={dataTest}
        >
          {/* A prestyled start icon or avatar */}
          <IconContainer $bgColor={containerBgColor} $size={containerSize}>
            {typeof startIcon === "object" &&
              React.cloneElement(startIcon, {
                size: getIconSize(),
              })}
          </IconContainer>
          {typeof startIcon === "string" && (
            <IconContainer $bgColor={containerBgColor} $size={containerSize}>
              <Icons
                color={iconTextColor}
                icon={startIcon}
                size={getIconSize()}
                forceTheme={forceTheme}
              />
            </IconContainer>
          )}
          <PaddedText>
            <Typography
              color={iconTextColor}
              size={typographySize}
              weight={typographyWeight}
              forceTheme={forceTheme}
            >
              {label}
            </Typography>
          </PaddedText>
          {endIconComponent && (
            <IconContainer $destructive={destructive} $size={containerSize}>
              {endIconComponent}
            </IconContainer>
          )}
        </ChipContainer>
      </TooltipTrigger>
    </Tooltip>
  );
};

export default Chip;
