import * as React from 'react';

import { ThemeMode } from '../../types';
import { IconProps } from '../Icons';

export interface ButtonGroupItemProps {
  /** Gets called when the user clicks on the button */
  onClick: (e: React.MouseEvent) => void | Promise<void>;
  label: string;
  dataTest?: string;
  /** Disable button */
  disabled?: boolean;
  hidden?: boolean;
  destructive?: boolean;
  icon?: IconProps['icon'];
  id?: string;
  loading?: boolean;
  forceTheme?: ThemeMode;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
}

const ButtonGroupItem: React.FC<ButtonGroupItemProps> = () => <></>;

export default ButtonGroupItem;
