import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SocialIcon } from './SocialIcons';
import { navLinks, siteConfig } from '../data/siteData';
import { Menu, X, Sparkles } from 'lucide-react';
import '../styles/Navbar.css';

export function Navbar({ currentPage, onNavigate, onOpenPitchModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`natheel-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-inner">
            {/* Brand Logo */}
            <Logo 
              size="medium" 
              onClick={() => handleNavClick('home')} 
            />

            {/* Navigation Menu */}
            <nav>
              <ul className="nav-links-list">
                {navLinks.map((link) => (
                  <li 
                    key={link.id} 
                    className={`nav-link-item ${currentPage === link.id ? 'active' : ''}`}
                  >
                    <button 
                      type="button" 
                      onClick={() => handleNavClick(link.id)}
                      id={`nav-${link.id}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions & Social */}
            <div className="navbar-actions">
              <div className="social-icons-group">
                {siteConfig.socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={s.name}
                    title={s.name}
                  >
                    <SocialIcon name={s.icon} size={16} />
                  </a>
                ))}
              </div>

              <button 
                type="button" 
                className="cta-pitch-btn"
                onClick={onOpenPitchModal}
                id="btn-header-pitch"
              >
                <Sparkles size={16} />
                <span>قدم فكرتك</span>
              </button>

              <button 
                type="button" 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="القائمة الرئيسية"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo size="small" onClick={() => handleNavClick('home')} />
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: '#f1f5f9', borderRadius: '50%', padding: '0.4rem', color: '#334155' }}
              >
                <X size={20} />
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={currentPage === link.id ? 'active' : ''}
                >
                  <button 
                    type="button" 
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button 
              type="button" 
              className="cta-pitch-btn" 
              style={{ width: '100%', justifyContent: 'center', marginBottom: '1.2rem' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPitchModal();
              }}
            >
              <Sparkles size={18} />
              <span>قدّم مشروعك أو فكرتك</span>
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem' }}>
              {siteConfig.socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
