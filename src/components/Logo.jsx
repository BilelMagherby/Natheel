import React from 'react';

export function Logo({ size = 'medium', light = false, variant, onClick }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';
  const isLight = light || variant === 'white';

  // Sizing dimensions for the logo image
  const logoHeight = isLarge ? 64 : isSmall ? 40 : 52;

  return (
    <div 
      className={`natheel-logo-wrapper ${onClick ? 'cursor-pointer' : ''}`} 
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        transition: 'transform 0.25s ease'
      }}
      role={onClick ? 'button' : undefined}
      aria-label="نثيل للاستثمار - Natheel"
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: `${logoHeight}px`,
          padding: isLight ? '4px 10px' : '2px',
          background: isLight ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          borderRadius: isLight ? '14px' : '0',
          boxShadow: isLight ? '0 4px 16px rgba(0, 0, 0, 0.25)' : 'none',
          backdropFilter: isLight ? 'blur(8px)' : 'none'
        }}
      >
        <img 
          src="/images/logo.png" 
          alt="نثيل للاستثمار | Natheel" 
          style={{
            height: '100%',
            width: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>
    </div>
  );
}

export default Logo;
