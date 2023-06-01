import { css } from 'styled-components';

export const HIDE_MOUSE_CSS = css`
  * {
    // Needed to disable hover interactions when keyboard navigation is active
    pointer-events: none;
  }
`;

export const NON_ANCHORED_DROPDOWN_CSS = css`
  position: static;
`;

export const ANCHORED_DROPDOWN_CSS = ({
  $anchor,
  $defaultLeft,
  $defaultTop
}: {
  $anchor: { top?: number; bottom?: number; left?: number; right?: number };
  $defaultLeft?: number;
  $defaultTop?: number;
}) => {
  const top = $anchor.top ?? $defaultTop;
  const bottom = $anchor.bottom;
  const left = $anchor.left ?? $defaultLeft;
  const right = $anchor.right;

  return css`
    position: absolute;
    ${top && `top: ${top}px;`}
    ${bottom && `bottom: ${bottom}px;`}
    ${left && `left: ${left}px;`}
    ${right && `right: ${right}px;`}

    // If the anchor hasn't been set yet, hide the dropdown
    // to avoid visible reposition if the dropdown overflows
    visibility: ${$anchor.top || $anchor.bottom || $anchor.left || $anchor.right ? 'visible' : 'hidden'};
  `;
};
