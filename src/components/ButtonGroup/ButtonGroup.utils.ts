import { Type } from '../../types';

export const getButtonType = (index: number, destructive?: boolean) => {
  if (!!destructive) return Type.DESTRUCTIVE;
  if (index === 0) return Type.PRIMARY;
  if (index === 2) return Type.TERTIARY;
  return Type.SECONDARY;
};
