import React from 'react';

export function SocialIcon({ name, size = 18, color = "currentColor" }) {
  switch (name) {
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12.002 2c-3.79 0-5.88 2.58-5.88 5.48 0 1.05.31 2.22.42 2.65.1.41-.21.61-.47.69-.64.19-1.5.76-1.5 1.57 0 .5.33.91.86 1.07.75.23 1.25.12 1.57.85.22.5.09.83-.55 1.34-.84.66-1.92 1.51-1.92 2.55 0 .96.9 1.52 2.37 1.62.33.02.5.23.47.45-.16 1.05-1.2 1.44-1.63 1.58-.33.11-.47.33-.42.57.06.31.42.49.88.49.77 0 1.83-.34 2.8-.75.77-.32 1.51-.43 2.11-.08.61.35 1.21.36 1.83.08.97.41 2.03.75 2.8.75.46 0 .82-.18.88-.49.05-.24-.09-.46-.42-.57-.43-.14-1.47-.53-1.63-1.58-.03-.22.14-.43.47-.45 1.47-.1 2.37-.66 2.37-1.62 0-1.04-1.08-1.89-1.92-2.55-.64-.51-.77-.84-.55-1.34.32-.73.82-.62 1.57-.85.53-.16.86-.57.86-1.07 0-.81-.86-1.38-1.5-1.57-.26-.08-.57-.28-.47-.69.11-.43.42-1.6.42-2.65C17.882 4.58 15.792 2 12.002 2z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.05.87.14V9.41a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.94-4.52V8.71a8.21 8.21 0 0 0 4.83 1.53v-3.55z" />
        </svg>
      );
    case 'x':
    case 'twitter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" fill={color} />
        </svg>
      );
    default:
      return null;
  }
}
