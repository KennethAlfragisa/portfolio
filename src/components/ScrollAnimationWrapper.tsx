import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale-up';
  delay?: number;
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'fade-left':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'fade-right':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;