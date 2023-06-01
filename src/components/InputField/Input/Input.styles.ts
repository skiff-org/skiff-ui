import { css } from 'styled-components';

import { Size } from '../../../types';
import { InputFieldSize } from '../InputField.types';

const SMALL_CSS = css`
  border-radius: 10px;
`;

const MEDIUM_CSS = css`
  border-radius: 12px;
`;

const LARGE_CSS = css`
  border-radius: 14px;
`;

export const INPUT_SIZE_CSS = ({ $size }: { $size: InputFieldSize }) => {
  if ($size === Size.SMALL) return SMALL_CSS;
  if ($size === Size.MEDIUM) return MEDIUM_CSS;
  return LARGE_CSS;
};
