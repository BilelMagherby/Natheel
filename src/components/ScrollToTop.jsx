import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import '../styles/ScrollToTop.css';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

      setScrollProgress(scrollPercent);
      setVisible(totalScroll > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button 
      type="button"
      className="scroll-to-top-btn"
      onClick={scrollToTop}
      aria-label="العودة إلى أعلى الصفحة"
      title="العودة إلى الأعلى"
    >
      <svg className="scroll-progress-ring" width="48" height="48">
        <circle
          className="progress-ring-circle-bg"
          stroke="rgba(2, 132, 199, 0.15)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
        <circle
          className="progress-ring-circle"
          stroke="#0284c7"
          strokeWidth="3"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="24"
          cy="24"
        />
      </svg>
      <ArrowUp size={20} className="scroll-arrow-icon" />
    </button>
  );
}
