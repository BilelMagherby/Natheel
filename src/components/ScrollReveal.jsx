import React, { useEffect, useRef, useState } from 'react';

export function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  threshold = 0.15,
  className = '',
  style = {}
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { opacity: 0, transform: 'translateY(36px)', transition: baseTransition };
        case 'fade-down':
          return { opacity: 0, transform: 'translateY(-36px)', transition: baseTransition };
        case 'fade-left':
          return { opacity: 0, transform: 'translateX(36px)', transition: baseTransition };
        case 'fade-right':
          return { opacity: 0, transform: 'translateX(-36px)', transition: baseTransition };
        case 'zoom-in':
          return { opacity: 0, transform: 'scale(0.92)', transition: baseTransition };
        default:
          return { opacity: 0, transform: 'translateY(30px)', transition: baseTransition };
      }
    }

    return {
      opacity: 1,
      transform: 'none',
      transition: baseTransition
    };
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal-block ${className} ${isVisible ? 'is-visible' : ''}`}
      style={{
        ...style,
        ...getAnimationStyles()
      }}
    >
      {children}
    </div>
  );
}
