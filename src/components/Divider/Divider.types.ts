import { ThemeMode } from '../../types';

export enum DividerType {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export type DividerColor = 'primary' | 'secondary' | 'tertiary';

export interface DividerProps {
  /** Divider color */
  color?: DividerColor | string;
  /** Forced theme */
  forceTheme?: ThemeMode;
  /** Custom height */
  height?: number | string;
  /** Whether it's a horizontal or a vertical divider */
  type?: DividerType;
  /** Custom width */
  width?: number | string;
}