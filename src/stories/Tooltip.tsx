import React, { useState } from 'react';
import './Tooltip.scss';

export interface TooltipProps {
	/** The description to display in the Tooltip */
	description: string;
  /** Tooltip child component */
  children?: React.ReactNode;
  /** Tooltip direction */
  direction?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
	description,
  children,
  direction='top'
}) => {
	const [active, setActive] = useState(false);

	return (
		<div
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={'nwtooltip'}
      style={{
        position: 'relative',
        fontSize: 0,
        marginLeft: '5px',
      }}
    >
      {children}
      <div className={`nwtooltip-tip ${direction}`}>
        {description}
      </div>
		</div>
	);
}
