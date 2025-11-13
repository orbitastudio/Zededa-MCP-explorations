import React, { useState, useRef, useCallback, KeyboardEvent } from 'react';
import styles from './FilterCard.module.css';

export type FilterCardType = 'critical' | 'alert' | 'info' | 'success' | 'notice';

export interface FilterCardProps {
  /** The semantic type of the card */
  type: FilterCardType;
  /** Main title text */
  title: string;
  /** Subtitle/description text */
  subtitle: string;
  /** Whether the card is currently selected */
  selected?: boolean;
  /** Callback when the card is clicked */
  onClick?: () => void;
  /** Additional CSS class names */
  className?: string;
  /** Test ID for testing purposes */
  testId?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const FilterCard: React.FC<FilterCardProps> = ({
  type,
  title,
  subtitle,
  selected = false,
  onClick,
  className = '',
  testId,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  const rippleIdCounter = useRef(0);

  // Get Material Symbol icon name based on type
  const getIconName = () => {
    switch (type) {
      case 'critical':
        return 'error';
      case 'info':
        return 'emoji_objects';
      case 'success':
        return 'show_chart';
      case 'alert':
        return 'show_chart';
      case 'notice':
        return 'show_chart';
      default:
        return 'error';
    }
  };

  // Get semantic color classes based on type
  const getTypeClasses = () => {
    switch (type) {
      case 'critical':
        return {
          iconBg: styles.iconBgCritical,
          iconColor: styles.iconColorCritical,
        };
      case 'info':
        return {
          iconBg: styles.iconBgInfo,
          iconColor: styles.iconColorInfo,
        };
      case 'success':
        return {
          iconBg: styles.iconBgSuccess,
          iconColor: styles.iconColorSuccess,
        };
      case 'alert':
        return {
          iconBg: styles.iconBgAlert,
          iconColor: styles.iconColorAlert,
        };
      case 'notice':
        return {
          iconBg: styles.iconBgNotice,
          iconColor: styles.iconColorNotice,
        };
      default:
        return {
          iconBg: styles.iconBgCritical,
          iconColor: styles.iconColorCritical,
        };
    }
  };

  // Create ripple effect on click
  const createRipple = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: rippleIdCounter.current++,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  // Handle click event
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    createRipple(event);
    onClick?.();
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
      
      // Create ripple at center for keyboard interaction
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const mockEvent = {
          clientX: rect.left + rect.width / 2,
          clientY: rect.top + rect.height / 2,
        } as React.MouseEvent<HTMLDivElement>;
        createRipple(mockEvent);
      }
    }
  };

  const typeClasses = getTypeClasses();
  
  // Get semantic-specific selected class
  const getSelectedClass = () => {
    if (!selected) return '';
    switch (type) {
      case 'critical':
        return styles.cardSelectedCritical;
      case 'alert':
        return styles.cardSelectedAlert;
      case 'info':
        return styles.cardSelectedInfo;
      case 'success':
        return styles.cardSelectedSuccess;
      case 'notice':
        return styles.cardSelectedNotice;
      default:
        return styles.cardSelectedInfo;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`
        ${styles.card}
        ${isHovered ? styles.cardHover : ''}
        ${selected ? styles.cardSelected : ''}
        ${getSelectedClass()}
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={selected}
      aria-label={`${title}. ${subtitle}`}
      data-testid={testId}
      data-type={type}
      data-selected={selected}
    >
      <div className={styles.content}>
        {/* Icon Container */}
        <div className={`${styles.iconContainer} ${typeClasses.iconBg}`}>
          <span className={`material-symbols-outlined ${typeClasses.iconColor}`}>
            {getIconName()}
          </span>
        </div>

        {/* Text Content */}
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </div>

      {/* Ripple Effect Container */}
      <div className={styles.rippleContainer}>
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className={styles.ripple}
            style={{
              left: ripple.x,
              top: ripple.y,
              width: ripple.size,
              height: ripple.size,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterCard;

