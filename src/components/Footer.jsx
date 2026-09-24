import React from 'react';
import { Logo } from './Logo';
import { SocialIcon } from './SocialIcons';
import { siteConfig, navLinks } from '../data/siteData';
import { projectsData } from '../data/projectsData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Sparkles,
  QrCode
} from 'lucide-react';
import '../styles/Footer.css';

export function Footer({ onNavigate, onSelectProject, onOpenPrivacyModal }) {
  return (
    <footer className="natheel-footer" aria-label="تذييل الصفحة">
      <div className="footer-top-glow" />

      <div className="container">
        <div className="footer-main-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <Logo size="medium" light={true} onClick={() => onNavigate('home')} />
            
            <p className="footer-about-p">
              نستثمر في المستقبل ونُمكّن رواد الأعمال من خلال منظومة استثمارية وتشغيلية متكاملة تنطلق من أصالة حائل لترتقي باقتصاد المملكة.
            </p>

            <div className="footer-vision-badge">
              <Sparkles size={16} color="#38bdf8" />
              <span>مواكبون لمستهدفات رؤية السعودية 2030</span>
            </div>

            <ul className="footer-contact-mini-list">
              <li>
                <MapPin size={16} />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <Phone size={16} />
                <span dir="ltr">{siteConfig.contact.phoneDisplay}</span>
              </li>
              <li>
                <Mail size={16} />
                <span>{siteConfig.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="footer-col">
            <h3 className="footer-col-title">روابط سريعة</h3>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    type="button"
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Portfolio Projects */}
          <div className="footer-col">
            <h3 className="footer-col-title">مشاريعنا</h3>
            <ul className="footer-nav-list">
              {projectsData.map((project) => (
                <li key={project.id}>
                  <button 
                    type="button"
                    onClick={() => {
                      onSelectProject(project);
                    }}
                  >
                    <span>{project.nameAr}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: QR Code & Social Media Channels */}
          <div className="footer-col qr-social-col">
            <h3 className="footer-col-title">تواصل وتابعنا</h3>
            
            <div className="footer-qr-card">
              <div className="footer-qr-image-wrap">
                <img 
                  src="/images/qr-code.png" 
                  alt="QR Code - نثيل للاستثمار" 
                  className="footer-qr-img"
                  loading="lazy"
                />
                <div className="footer-qr-scan-line" />
              </div>
              <div className="footer-qr-caption">
                <QrCode size={16} color="#38bdf8" />
                <span>امسح الرمز للتواصل المباشر</span>
              </div>
            </div>

            {/* Social Media Icons under QR code (LinkedIn, Instagram, Snapchat, TikTok, X) */}
            <div className="footer-social-icons-wrapper">
              {siteConfig.socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={s.name}
                  title={s.name}
                >
                  <SocialIcon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-inner">
            <div>
              جميع الحقوق محفوظة © {new Date().getFullYear()} شركة نثيل للاستثمار وتطوير الأعمال.
            </div>

            <div className="footer-legal-links">
              <button 
                type="button" 
                className="footer-legal-btn"
                onClick={onOpenPrivacyModal}
              >
                سياسة الخصوصية والشروط
              </button>
              <span>•</span>
              <span style={{ color: '#64748b' }}>حائل، المملكة العربية السعودية</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
