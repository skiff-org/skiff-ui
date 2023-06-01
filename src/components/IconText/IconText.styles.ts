import { css } from "styled-components";

import { Size, ThemeMode } from "../../types";
import { getThemedColor } from "../../utils/colorUtils";

import { IconTextSize } from "./IconText.types";

const SMALL_CSS = css`
  gap: 6px;
`;

const MEDIUM_CSS = css`
  gap: 8px;
`;

const LARGE_CSS = css`
  gap: 10px;
`;

export const ICON_TEXT_SIZE_CSS = ({ $size }: { $size: IconTextSize }) => {
  if ($size === Size.SMALL) return SMALL_CSS;
  if ($size === Size.LARGE) return LARGE_CSS;
  return MEDIUM_CSS;
};

export const INTERACTIVE_ICON_TEXT_CSS = ({
  $isActive,
  $isDestructive,
  $isHovering,
  $forceTheme,
}: {
  $isActive: boolean;
  $isDestructive: boolean;
  $isHovering: boolean;
  $forceTheme?: ThemeMode;
}) => {
  const hoverBg = $isDestructive
    ? "var(--bg-overlay-destructive)"
    : "var(--bg-overlay-tertiary)";
  return css`
    cursor: pointer;
    ${($isActive || $isHovering) &&
    `background: ${getThemedColor(hoverBg, $forceTheme)};`}
  `;
};

const GHOST_ICON_TEXT_CSS = () => css`
  padding: 4px;
`;

const FILLED_ICON_TEXT_CSS = ({
  $forceTheme,
}: {
  $forceTheme?: ThemeMode;
}) => css`
  padding: 4px 8px;
  height: 27px;
  background: ${getThemedColor("var(--cta-secondary-default)", $forceTheme)};
  border: 1px solid ${getThemedColor("var(--border-secondary)", $forceTheme)};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.02);
`;

export const ICON_TEXT_TYPE_CSS = ({ $filled }: { $filled: boolean }) => {
  if ($filled) return FILLED_ICON_TEXT_CSS;
  return GHOST_ICON_TEXT_CSS;
};
