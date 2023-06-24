import * as React from 'react';

import { ThemeMode, Type } from '../../types';
import { Icon } from '../Icons';
import { IconComponent } from '../IconText';

export interface ButtonGroupItemProps {
  /** Gets called when the user clicks on the button */
  onClick: (e: React.MouseEvent) => void | Promise<void>;
  /** Button text */
  label: string;
  /** E2E test indicator */
  dataTest?: string;
  /** Disable button */
  disabled?: boolean;
  /** Button theme */
  forceTheme?: ThemeMode;
  /** Whether or not the button is hidden */
  hidden?: boolean;
  /** Start icon */
  icon?: Icon | IconComponent;
  id?: string;
  /** Loading state */
  loading?: boolean;
  ref?: React.MutableRefObject<HTMLDivElement | null>;
  /** Button type */
  type?: Type;
}

const ButtonGroupItem: React.FC<ButtonGroupItemProps> = () => <></>;

export default ButtonGroupItem;