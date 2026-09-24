import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  Menu, 
  X as CloseIcon,
  Sparkles
} from 'lucide-react';

// Custom X (Twitter) Icon
function XIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Header({ 
  activePage, 
  setActivePage, 
  onOpenPitchModal 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'عن نثيل' },
    { id: 'how-we-work', label: 'كيف نعمل' },
    { id: 'roots', label: 'جذورنا' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        {/* Left Side: Social Links & Action (RTL: appears on left) */}
        <div className="header-actions">
          <div className="social-links-bar">
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-btn" 
              title="منصة X"
              aria-label="X"
            >
              <XIcon size={16} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-btn" 
              title="إنستغرام"
              aria-label="Instagram"
            >
              <Instagram size={17} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-btn" 
              title="لينكد إن"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="social-icon-btn" 
              title="يوتيوب"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>

          <div className="header-divider"></div>

          <button 
            className="btn-primary header-cta-btn" 
            onClick={onOpenPitchModal}
          >
            <Sparkles size={16} />
            <span>تقديم فكرة</span>
          </button>
        </div>

        {/* Center: Main Navigation Menu */}
        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Logo (RTL: appears on right) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu size={24} />
          </button>

          <Logo onClick={() => handleNavClick('home')} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-header">
            <Logo size="small" onClick={() => handleNavClick('home')} />
            <button 
              className="social-icon-btn" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <ul className="drawer-nav">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`drawer-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  style={{ width: '100%', textAlign: 'right' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="drawer-footer">
            <div className="drawer-social">
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-icon-btn"><XIcon size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn"><Instagram size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-btn"><Linkedin size={18} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn"><Youtube size={18} /></a>
            </div>

            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchModal();
              }}
            >
              <Sparkles size={16} />
              <span>تقديم فكرة استثمارية</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
