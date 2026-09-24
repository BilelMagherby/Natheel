import React from 'react';
import { siteConfig, coreValues, timelineMilestones, leadershipTeam } from '../data/siteData';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  Leaf, 
  Handshake, 
  Award,
  ChevronLeft,
  Users
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ScrollToTop } from '../components/ScrollToTop';
import '../styles/AboutPage.css';

export function AboutPage({ onOpenPitchModal }) {
  const renderValueIcon = (icon) => {
    switch (icon) {
      case 'shield-check':
        return <ShieldCheck size={28} />;
      case 'sparkles':
        return <Sparkles size={28} />;
      case 'handshake':
        return <Handshake size={28} />;
      case 'leaf':
        return <Leaf size={28} />;
      default:
        return <Award size={28} />;
    }
  };

  return (
    <div className="about-page-wrapper">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={16} />
              <span>عن نثيل</span>
            </div>
            <h1 className="page-title">
              رحلة ريادة تصنع المستقبل وترتكز على أكثر من 30 عاماً من الخبرة
            </h1>
            <p className="page-subtitle">
              نحن منظومة استثمارية وطنية متكاملة تهدف إلى تمكين المشاريع الواعدة وبناء كيانات تجارية وعقارية رائدة تساهم في تحقيق تطلعات رؤية السعودية 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section style={{ padding: '3rem 0 4rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="vision-mission-grid">
              <div className="vision-card">
                <div className="card-icon-header">
                  <Target size={28} />
                </div>
                <h3>رؤيتنا الاستثمارية</h3>
                <p>
                  أن نكون المجموعة الاستثمارية الأكثر موثوقية وتأثيراً في المنطقة، عبر ابتكار وتمكين منظومات أعمال رائدة ومستدامة ترفع جودة الحياة وتخلق قيمة اقتصادية مستمرة.
                </p>
              </div>

              <div className="vision-card mission-card">
                <div className="card-icon-header">
                  <Compass size={28} />
                </div>
                <h3>رسالتنا</h3>
                <p>
                  استثمار رأس المال الجريء والخبرة التشغيلية المتقدمة لتمكين رواد الأعمال وإطلاق مشاريع نوعية متميزة في قطاعات التطوير العقاري، الضيافة، التصميم، والحلول الإبداعية.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <Sparkles size={18} />
                <span>مبادئنا الراسخة</span>
              </div>
              <h2>القيم الجوهرية التي تقود مسيرتنا</h2>
              <p>
                نلتزم بمجموعة من المبادئ الأخلاقية والمهنية التي تشكل أساس كل شراكة وقرار استثماري نتخذه.
              </p>
            </div>
          </ScrollReveal>

          <div className="values-grid">
            {coreValues.map((val, idx) => (
              <ScrollReveal key={val.id} animation="fade-up" delay={idx * 100}>
                <div className="value-item-card">
                  <div className="value-icon-box">
                    {renderValueIcon(val.icon)}
                  </div>
                  <h4>{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Timeline */}
      <section className="timeline-section-wrap">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <Award size={18} />
                <span>تاريخنا وإنجازاتنا</span>
              </div>
              <h2>محطات بارزة في مسيرة 30 عاماً</h2>
              <p>
                من خطوة البداية في حائل وحتى بناء المحافظ الاستثمارية المتنوعة، نواصل النمو والتطور.
              </p>
            </div>
          </ScrollReveal>

          <div className="milestones-timeline">
            {timelineMilestones.map((m, idx) => (
              <ScrollReveal key={idx} animation={idx % 2 === 0 ? 'fade-right' : 'fade-left'} delay={idx * 80}>
                <div className="milestone-entry">
                  <div className="milestone-year-bubble">{m.year}</div>
                  <div className="milestone-card">
                    <h4>{m.title}</h4>
                    <p>{m.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <Users size={18} />
                <span>القيادة والحوكمة</span>
              </div>
              <h2>فريق الإدارة والخبراء</h2>
              <p>
                نخبة من القيادات ذات الخبرة العريضة في مجالات الاستثمار، إدارة الأصول، والتطوير المؤسسي.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-grid">
            {leadershipTeam.map((member, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 120}>
                <div className="team-card">
                  <div className="team-avatar-placeholder">
                    {member.name.split(' ')[0][0]}
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '0.3rem' }}>
                    {member.name}
                  </h3>
                  <div style={{ color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                    {member.title}
                  </div>
                  <span className="badge badge-primary" style={{ marginBottom: '1rem' }}>
                    {member.experience}
                  </span>
                  <p style={{ color: 'var(--dark-600)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
