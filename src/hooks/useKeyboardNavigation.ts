import { useCallback, useEffect, useState } from 'react';

import { KeyboardEvents, MouseEvents } from '../types';

/**
 * Handles up and down keyboard navigation
 * @param disabled - Disables keyboard navigation
 * @param numItems - Number of items being navigated
 * @param idx - Current highlighted index
 * @param setIdx - Sets the current index
 */
export const useKeyboardNavigation = (
  disabled: boolean,
  numItems: number,
  idx?: number,
  setIdx?: (idx?: number) => void
) => {
  // State indicating whether keyboard navigation is active
  const [isNavigating, setIsNavigating] = useState(false);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent | KeyboardEvent) => {
      const key = event.key;
      // Do nothing if neither the up nor down arrow was clicked
      if (key !== 'ArrowDown' && key !== 'ArrowUp') return;

      event.preventDefault();
      event.stopPropagation();

      if (!isNavigating) setIsNavigating(true);

      if (key === 'ArrowDown') {
        if (idx === undefined) {
          setIdx?.(0);
        } else if (
          // Navigation should stop at the end of the list
          idx <
          numItems - 1
        ) {
          // Increment index
          setIdx?.(idx + 1);
        }
      } else if (key === 'ArrowUp') {
        if (idx === undefined) {
          setIdx?.(numItems - 1);
        } else if (
          // Navigation should stop at the start of the list
          idx > 0
        ) {
          // Decrement index
          setIdx?.(idx - 1);
        }
      }
    },
    [isNavigating, idx, setIdx, numItems]
  );

  const onMouseMove = useCallback(() => {
    if (isNavigating) setIsNavigating(false);
  }, [isNavigating]);

  useEffect(() => {
    if (!setIdx || disabled) return;

    window.addEventListener(KeyboardEvents.KEY_DOWN, onKeyDown);
    window.addEventListener(MouseEvents.MOUSE_MOVE, onMouseMove);
    return () => {
      window.removeEventListener(KeyboardEvents.KEY_DOWN, onKeyDown);
      window.removeEventListener(MouseEvents.MOUSE_MOVE, onMouseMove);
    };
  }, [onKeyDown, onMouseMove, setIdx]);

  return isNavigating;
};
