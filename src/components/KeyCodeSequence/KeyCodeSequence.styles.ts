import { css } from 'styled-components';

import { Size } from '../../types';

import { KeyCodeSequenceSize } from './KeyCodeSequence.constants';

const SEQUENCE_CONTAINER_SMALL_CSS = css`
  gap: 2px;
`;

const SEQUENCE_CONTAINER_MEDIUM_CSS = css`
  gap: 6px;
`;

const SEQUENCE_CONTAINER_LARGE_CSS = css`
  gap: 8px;
`;

export const SEQUENCE_CONTAINER_SIZE_CSS = ({ $size }: { $size: KeyCodeSequenceSize }) => {
  if ($size === Size.SMALL) return SEQUENCE_CONTAINER_SMALL_CSS;
  if ($size === Size.MEDIUM) return SEQUENCE_CONTAINER_MEDIUM_CSS;
  return SEQUENCE_CONTAINER_LARGE_CSS;
};

const KEY_CODE_X_SMALL_CSS = css`
  min-width: 12px;
  min-height: 12px;
  border-radius: 6px;
  padding: 0 6px;
`;

const KEY_CODE_SMALL_CSS = css`
  min-width: 16px;
  min-height: 16px;
  border-radius: 6px;
  padding: 0 6px;
`;

const KEY_CODE_MEDIUM_CSS = css`
  min-width: 24px;
  min-height: 24px;
  border-radius: 6px;
  padding: 0 8px;
`;

const KEY_CODE_LARGE_CSS = css`
  min-width: 32px;
  min-height: 32px;
  border-radius: 8px;
  padding: 0 8px;
`;

export const KEY_CODE_SIZE_CSS = ({ $size }: { $size: KeyCodeSequenceSize }) => {
  if ($size === Size.X_SMALL) return KEY_CODE_X_SMALL_CSS;
  if ($size === Size.SMALL) return KEY_CODE_SMALL_CSS;
  if ($size === Size.MEDIUM) return KEY_CODE_MEDIUM_CSS;
  return KEY_CODE_LARGE_CSS;
};
