import * as React from 'react';
import { useEffect, useState } from 'react';

import { useMousePosition } from '../../../hooks';

import { MOUSE_SAFE_AREA_CLASSNAME } from './MouseSafeArea.constants';
import { MouseSafeAreaProps } from './MouseSafeArea.types';

// From https://gist.github.com/eldh/51e3825b7aa55694f2a5ffa5f7de8a6a
// open sourced by Linear.app

/**
 * Component to cover the area between the mouse cursor and the submenu, to
 * allow moving cursor to lower parts of sub-menu without the submenu disappearing.
 */
export function MouseSafeArea({ openRight, parentRef, setIsInSafeArea }: MouseSafeAreaProps) {
  // Mouse safe area positions and dimensions
  const [left, setLeft] = useState<number | undefined>(undefined);
  const [right, setRight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [clipPath, setClipPath] = useState<string | undefined>(undefined);

  // Mouse positions
  const [mouseX, mouseY] = useMousePosition();

  // Submenu positions and dimensions
  const {
    x: submenuX = 0,
    y: submenuY = 0,
    height: submenuHeight = 0,
    width: submenuWidth = 0
  } = parentRef?.current?.getBoundingClientRect() || {};

  useEffect(() => {
    setTimeout(() => {
      // The safe area should be positioned to the left of the submenu if it's opened to the right of the parent cell
      const getLeft = () => (openRight ? -Math.max(submenuX - mouseX, 10) : undefined);
      // The safe area should be positioned to the right of the submenu if it's opened to the left of the parent cell
      const getRight = () =>
        openRight ? undefined : -Math.max(mouseX + submenuWidth - (submenuX + submenuWidth), 10 + submenuWidth);
      // The safe area should span the whole area between the cursor and the submenu
      const getWidth = () =>
        openRight ? Math.max(submenuX - mouseX, 10) : Math.max(mouseX - (submenuX + submenuWidth), 10);
      // Renders the safe area triangle
      const getClipPath = () =>
        openRight
          ? `polygon(100% 0%, 0% ${(100 * (mouseY - submenuY)) / submenuHeight}%, 100% 100%)`
          : `polygon(0% 0%, 0% 100%, 100% ${(100 * (mouseY - submenuY)) / submenuHeight}%)`;

      setLeft(getLeft());
      setRight(getRight());
      setWidth(getWidth());
      setClipPath(getClipPath());
    }, 100);
  }, [mouseX, mouseY, openRight, submenuHeight, submenuWidth, submenuX, submenuY]);

  return (
    <div
      onMouseEnter={() => setIsInSafeArea(true)}
      onMouseLeave={() => setIsInSafeArea(false)}
      className={MOUSE_SAFE_AREA_CLASSNAME}
      style={{
        position: 'absolute',
        top: 0,
        // background: 'orange', // for debugging
        height: submenuHeight,
        width,
        left,
        right,
        clipPath
      }}
    />
  );
}
