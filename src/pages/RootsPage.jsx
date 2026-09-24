import React from 'react';
import { Sparkles, ChevronLeft, MapPin, Heart, Sun, Compass } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ScrollToTop } from '../components/ScrollToTop';
import '../styles/RootsPage.css';

export function RootsPage({ onOpenPitchModal }) {
  return (
    <div className="roots-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={16} />
              <span>جذورنا</span>
            </div>
            <h1 className="page-title">
              جذور راسخة في كرم حائل، وطموح يعانق عنان السماء
            </h1>
            <p className="page-subtitle">
              نستلهم من تاريخ منطقة حائل العريق وقيم حاتم الطائي في العطاء والريادة، لنبني استثمارات ترتقي بالإنسان والمكان.
            </p>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="roots-story-grid">
            <ScrollReveal animation="fade-left">
              <div className="roots-visual-box">
                <img 
                  src="/images/hail.jpg" 
                  alt="طبيعة وجبال حائل وتراثها العريق" 
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right">
              <div className="roots-content-box">
                <div className="section-tag" style={{ color: 'var(--primary-600)', background: 'var(--primary-100)', padding: '0.35rem 1rem', borderRadius: 'var(--radius-full)', fontWeight: 800, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1rem', border: '1px solid var(--primary-200)' }}>
                  <MapPin size={18} />
                  <span>حائل.. ملتقى الكرم والأصالة</span>
                </div>

                <h2>إرث الأجداد يلهم استثمارات المستقبل</h2>

                <p>
                  من بين قمم جبال أجا وسلمى، تشكّلت هوية <strong>نثيل</strong>. لم تكن حائل عبر التاريخ مجرد واحة جغرافية، بل كانت منارة للكرم العربي، ومحطة رئيسية على دروب التجارة والقوافل، وملهمة لأعظم معاني الضيافة التي خلدها حاتم الطائي.
                </p>

                <p>
                  نحن في نثيل نعتبر هذا الإرث التزاماً أخلاقياً ودافعاً استراتيجياً. نترجم كرم الضيافة إلى مشاريع نوعية في قطاع الفندقة والمطاعم، ونترجم شموخ الجبال إلى عمارة حضرية حديثة، ونحول روح المبادرة إلى تمكين حقيقي لشباب وشابات المنطقة والمملكة.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <Sparkles size={18} />
                <span>ركائز انتمائنا</span>
              </div>
              <h2>كيف نجسد جذورنا في كل استثمار؟</h2>
              <p>
                ثلاث ركائز استراتيجية تربط بين أصالة المنشأ وعالمية التطلعات.
              </p>
            </div>
          </ScrollReveal>

          <div className="roots-pillars-grid">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Heart size={28} />
                </div>
                <h3>التمكين المجتمعي المستدام</h3>
                <p>
                  نضع تنمية الكفاءات المحلية وإتاحة الفرص أمام الشباب الحائلي والسعودي في صميم أهدافنا، وخلق وظائف نوعية في بيئات عمل احترافية.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Sun size={28} />
                </div>
                <h3>تطوير الوجهات السياحية والحضرية</h3>
                <p>
                  المساهمة في تحويل حائل إلى وجهة سياحية وتجارية رائدة على مستوى المملكة من خلال مجمعاتنا ومشاريع الضيافة والترفيه الراقية.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Compass size={28} />
                </div>
                <h3>التناغم مع رؤية السعودية 2030</h3>
                <p>
                  دعم مبادرات جودة الحياة، وتنشيط القطاع الخاص، وتعزيز مساهمة المنشآت الصغيرة والمتوسطة في الناتج المحلي الإجمالي.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
