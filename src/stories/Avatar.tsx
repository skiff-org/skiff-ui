import * as React from 'react';

import './Avatar.scss';

export interface AvatarProps {
  /** The color of the Avatar */
  color: string;
  /** The size for the Avatar */
  size: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge';
  /** The type of Avatar */
  type: 'round' | 'square';
  /** Avatar child component */
  children?: React.ReactNode;
  /** Card onClick action */
  onClick?: (e: React.MouseEvent) => void;
  /** Avatar in-line style */
  style?: object;
  /** Switch bg and text color for darker context */
  invert?: boolean;
  /* Display online indicator badge */
  showBadge?: boolean;
  /** Set badge position */
  badgePosition?: 'tl' | 'tr' | 'bl' | 'br';
}

export const Avatar: React.FC<AvatarProps> = ({
  showBadge=false,
  badgePosition='br',
  size='normal',
  type='round',
  color='#ff7587',
  children,
  style,
  invert,
  onClick=() => {}
}) => {
  let bgColor;
  const hslRegex = /hsla\(\s*(-?\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%),\s*(\d+(?:\.\d+)?)\)/;
  const hsl = hslRegex.exec(color);

  if (hsl !== null){
    const colorArray = hsl.slice(1);
    bgColor=`hsl(${colorArray[0]}, ${colorArray[1]}, 85%)`;
  } else {
    bgColor = color.concat('68');
  }
  
  const badge = (
    <div className="avatar-badge" />
  );

  return (
    <div className={`avatar ${size} ${type} ${badgePosition} ${showBadge && 'online'}`} style={style} onClick={onClick}>
      <div className="avatar-background" style={{ backgroundColor: !invert ? bgColor : color }}/>
      <span className="avatar-name" style={{ color: !invert ? color: 'white' }}>{children}</span>
      {showBadge && badge}
    </div>
  )
};