import React from 'react';
import { siteConfig } from '../data/siteData';
import { Sparkles, Mail, Phone, ArrowLeft, ArrowUpRight } from 'lucide-react';
import '../styles/CollaborationSection.css';

export function CollaborationSection({ onOpenPitchModal, onNavigateToContact }) {
  return (
    <section className="collab-section" aria-label="فرص التعاون والاستثمار">
      <div className="container">
        <div className="collab-card-wrapper">
          {/* Content Column */}
          <div className="collab-content-side">
            <div className="collab-tag">
              <Sparkles size={18} />
              <span>فرص التعاون والشراكة</span>
            </div>

            <h2 className="collab-title">
              لديك فكرة واعدة أو فرصة للتعاون الاستثماري؟
            </h2>

            <p className="collab-desc">
              نحن نبحث دائماً عن رواد الأعمال الطموحين والفرص الاستثمارية التي تُحدث فرقاً. دعنا نلتقي لنحول فكرتك إلى مشروع رائد وناجح.
            </p>

            <div className="collab-contact-chips">
              <div className="collab-chip-item">
                <div className="chip-icon">
                  <Mail size={18} />
                </div>
                <span>{siteConfig.contact.investmentEmail}</span>
              </div>

              <div className="collab-chip-item">
                <div className="chip-icon">
                  <Phone size={18} />
                </div>
                <span dir="ltr">{siteConfig.contact.phoneDisplay}</span>
              </div>
            </div>

            <div className="collab-actions-row">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenPitchModal}
                id="btn-collab-pitch"
              >
                <span>طرح مشروع استثماري</span>
                <Sparkles size={18} />
              </button>

              <button 
                type="button" 
                className="btn btn-white"
                onClick={onNavigateToContact}
                id="btn-collab-contact"
              >
                <span>تواصل مع فريقنا</span>
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>

          {/* Visual Workstation Column */}
          <div className="collab-visual-side">
            <img 
              src="/images/workspace.jpg" 
              alt="بيئة عمل واستثمار ريادي في نثيل" 
              loading="lazy"
            />
            <div className="collab-visual-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
