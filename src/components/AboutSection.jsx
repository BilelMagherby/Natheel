import React from 'react';
import { ArrowLeft, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import '../styles/AboutSection.css';

export function AboutSection({ onReadMore }) {
  return (
    <section className="about-section" id="about-preview" aria-label="من نحن">
      <div className="container">
        <div className="about-grid-layout">
          {/* Visual Landscape Card with Hail mountains */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <img 
                src="/images/hail.jpg" 
                alt="جبال أجا وسلمى ومنطقة حائل" 
                loading="lazy"
              />
              <div className="about-image-gradient" />

              {/* Location Badge */}
              <div className="about-location-badge">
                <MapPin size={16} />
                <span>حائل، المملكة العربية السعودية</span>
              </div>

              {/* 30+ Years Experience Floating Badge */}
              <div className="about-experience-badge">
                <div className="experience-number">+30</div>
                <div className="experience-text">
                  عاماً من الريادة<br />والتمكين الاستثماري
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="about-content-column">
            <div className="about-tag">
              <Sparkles size={18} />
              <span>مَن نحن؟</span>
            </div>

            <h2 className="about-title">
              من أرض الأصالة والكرم، ننطلق لنصنع مستقبلاً استثمارياً استثنائياً
            </h2>

            <p className="about-description">
              تأسست شركة <strong>نثيل للاستثمار وتطوير الأعمال</strong> برؤية طموحة ترتكز على إرث عريق يمتد لأكثر من ثلاثة عقود في منطقة حائل والمملكة. نجمع بين الخبرة العميقة في إدارة وتطوير الأصول، والشغف بدعم رواد الأعمال والمبتكرين لبناء شركات رائدة في مختلف القطاعات الحيوية.
            </p>

            <div className="about-highlights-list">
              <div className="about-highlight-item">
                <div className="highlight-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div className="highlight-text">
                  <h4>منظومة استثمارية متكاملة</h4>
                  <p>نوفر التمويل، الحوكمة، الإدارة التشغيلية، والتسويق لضمان نجاح واستدامة كل مشروع.</p>
                </div>
              </div>

              <div className="about-highlight-item">
                <div className="highlight-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div className="highlight-text">
                  <h4>مواكبة لرؤية السعودية 2030</h4>
                  <p>نساهم بفاعلية في تنمية الاقتصاد المحلي، وتنويع مصادر الدخل، وخلق فرص عمل واعدة.</p>
                </div>
              </div>
            </div>

            <div className="about-cta-row">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onReadMore}
                id="btn-about-more"
              >
                <span>اقرأ المزيد عن نثيل</span>
                <ArrowLeft size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
