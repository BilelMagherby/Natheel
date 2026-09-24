import React from 'react';

export function Logo({ size = 'medium', light = false, variant, onClick }) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';
  const isLight = light || variant === 'white';

  const logoHeight = isLarge ? 54 : isSmall ? 36 : 46;

  return (
    <div 
      className={`natheel-logo-wrapper ${onClick ? 'cursor-pointer' : ''}`} 
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none'
      }}
      role={onClick ? 'button' : undefined}
      aria-label="نثيل للاستثمار"
    >
      {/* Brand Icon (Leaf / Wing Emblem) */}
      <svg 
        width={logoHeight} 
        height={logoHeight} 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="100%" stopColor="#0369A1" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="leafGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>

        {/* Main Curved Wing/Leaf */}
        <path 
          d="M38 6C38 6 48 18 48 35C48 46 41 54 30 54C34 46 35 34 32 24C30 18 25 12 38 6Z" 
          fill="url(#leafGrad1)" 
        />
        {/* Inner Curved Wing/Leaf */}
        <path 
          d="M26 14C26 14 34 23 34 36C34 45 28 51 20 51C23 44 24 35 22 27C20 22 17 18 26 14Z" 
          fill="url(#leafGrad2)" 
        />
        {/* Third smaller accent leaf */}
        <path 
          d="M16 26C16 26 22 33 22 42C22 48 18 50 12 49C14 45 15 39 14 34C13 30 11 28 16 26Z" 
          fill="url(#leafGrad3)" 
        />
      </svg>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span 
          style={{
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 800,
            fontSize: isLarge ? '2rem' : isSmall ? '1.3rem' : '1.65rem',
            lineHeight: 1.1,
            color: isLight ? '#FFFFFF' : '#0F172A',
            letterSpacing: '-0.5px'
          }}
        >
          نـثـيـل
        </span>
        <span 
          style={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: 700,
            fontSize: isLarge ? '0.75rem' : isSmall ? '0.55rem' : '0.65rem',
            letterSpacing: '3px',
            color: isLight ? '#BAE6FD' : '#0284C7',
            textTransform: 'uppercase',
            marginTop: '-2px'
          }}
        >
          NATHEEL
        </span>
      </div>
    </div>
  );
}

export default Logo;
