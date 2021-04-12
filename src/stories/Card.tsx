import React, { useRef, useEffect } from 'react';

export interface CardProps {
  /** The width of the Card */
  width?: string;
  /** The height of the Card */
  height?: string;
  /** The type of Card */
  type?: 'default' | 'bannerLeft' | 'bannerTop';
  /** Card child component */
  children?: React.ReactNode;
  /** Enabled/disable Padding */
  padding?: 'enabled' | 'disabled';
  /** Gets called when the user clicks on the card */
  onClick?: () => void;
  /** Card in-line style */
  style?: object;
  /** Card class name */
  className?: string;
  props?: object;
  /** ignore the specified elements/tags from the off click handler */
  tagsToIgnoreClick?: Array<string>;
  handleOutsideClick?: boolean;
  setShowCard?: (state: boolean) => void;
  onMouseLeave?: () => void;
}

export const Card: React.FC<CardProps> = ({
  width = '45%',
  height = '400px',
  type = 'default',
  onClick,
  children,
  padding = 'enabled',
  handleOutsideClick,
  setShowCard,
  onMouseLeave,
  tagsToIgnoreClick,
  style,
  className,
  props
}) => {
  const leftTypes = {
    default: 'none',
    bannerLeft: '4px solid #000000',
    bannerTop: 'none'
  };
  const topTypes = {
    default: 'none',
    bannerLeft: 'none',
    bannerTop: '4px solid #000000'
  };

  const padTypes = {
    enabled: '24px',
    disabled: '0'
  };

  const styles = {
    width,
    height,
    borderLeft: leftTypes[type],
    borderTop: topTypes[type],
    borderRadius: '27px',
    outline: 'none',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 25px 0 rgba(0, 0, 0, 0.09)',
    padding: `${padTypes[padding]}`
  };

  // Handle outside clicks
  const wrapperRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const handleClickOutside = (evt: MouseEvent) => {
    const targetElement = evt.target as Node;
    const targetInWrapper = wrapperRef.current?.contains(targetElement) || false;
    const targetInIgnore = tagsToIgnoreClick?.includes(targetElement.nodeName.toLowerCase()) || false;
    if (setShowCard) setShowCard(targetInWrapper || targetInIgnore);
  };

  if (handleOutsideClick) {
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);
  }

  return (
    <div
      className={className}
      ref={wrapperRef}
      onClick={onClick}
      onKeyPress={() => {}}
      onMouseLeave={onMouseLeave}
      style={{ ...styles, ...style }}
      {...props}
      tabIndex={0}
      role="button"
    >
      {children}
    </div>
  );
};
