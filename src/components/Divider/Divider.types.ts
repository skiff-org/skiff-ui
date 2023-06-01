import { ThemeMode } from '../../types';

export enum DividerType {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical'
}

export type DividerColor = 'primary' | 'secondary' | 'tertiary';

export interface DividerProps {
  active?: boolean;
  /** Divider color */
  color?: DividerColor;
  /** Forced theme */
  forceTheme?: ThemeMode;
  /** Custom height */
  height?: string;
  /** Whether it's a horizontal or a vertical divider */
  type?: DividerType;
  /** Custom width */
  width?: string;
}
