import React, { useRef, useEffect } from 'react';
import { Card } from './Card';

export interface DropdownProps {
  /** The list of labels */
  names: string[];
  /** The list of icons */
  icons?: (JSX.Element | null)[];
  /** The corresponding onClick functions */
  onClicks: ((e: any) => void)[];
  /** Dropdown in-line style */
  style?: object;
  /** Dropdown item className (effects and styles) */
  classNames?: string[];
  /** Dropdown className */
  className?: string;
  setShowDropdown?: ((state: boolean) => void);
}

export function Dropdown({
  names,
  icons,
  onClicks,
  style,
  classNames = [],
  className = '',
  setShowDropdown
}: DropdownProps) {
  const height = 'fit-content';
  const rowStyle = {
    fontSize: '13px',
    fontFamily: 'Mulish, sans-serif',
    cursor: 'pointer',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  // Handle outside clicks
  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const handleClickOutside = (evt : any) => {
    if (setShowDropdown && wrapperRef.current) {
      setShowDropdown(wrapperRef.current?.contains(evt.target as Node) || false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      <Card
        padding="disabled"
        style={{
          height: names.length === 0 ? 0 : height,
          width: '150px',
          padding: names.length === 0 ? '0px' : '4px 0px',
          boxShadow: '0 8px 24px rgba(149,157,165,0.2)',
          borderRadius: '8px',
          border: names.length === 0 ? 'none' : '1px #e1e4e8 solid',
          marginTop: '4px',
          display: 'inline-flex',
          flexDirection: 'column',
          ...style
        }}
      >
        {names.map((name, index) => {
          const onClick = onClicks[index];
          const className = classNames[index] || '';
          const icon = icons ? icons[index] : null;

          return (
            <div
              key={name}
              onClick={onClick}
              onKeyDown={onClick}
              role="button"
              className={className}
              style={{
                ...rowStyle
              }}
              tabIndex={0}
            >
              {icon}
              {name}
            </div>
          );
        })}
      </Card>
    </div>
  );
}
