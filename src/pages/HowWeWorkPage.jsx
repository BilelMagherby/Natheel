import React from 'react';
import { investmentStages } from '../data/siteData';
import { 
  Sparkles, 
  ChevronLeft, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  ArrowLeft,
  FileCheck2
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ScrollToTop } from '../components/ScrollToTop';
import '../styles/HowWeWorkPage.css';

export function HowWeWorkPage({ onOpenPitchModal }) {
  return (
    <div className="how-we-work-page">
      {/* Hero Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={16} />
              <span>كيف نعمل</span>
            </div>
            <h1 className="page-title">
              منهجية استثمارية متكاملة تصنع الفارق من الفكرة حتى الريادة
            </h1>
            <p className="page-subtitle">
              نتبع نموذج عمل محكم وشامل يدمج التمويل الذكي مع الإشراف التشغيلي، التسويقي، والهندسي لتحقيق أعلى معدلات النجاح.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Stages Methodology */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <Layers size={18} />
                <span>رحلة الاستثمار</span>
              </div>
              <h2>مراحل الاستثمار والتمكين الخمس</h2>
              <p>
                كيف نأخذ بيدك خطوة بخطوة لتحويل فكرتك التجارية إلى صرح اقتصادي مستدام.
              </p>
            </div>
          </ScrollReveal>

          <div className="stages-flow-container">
            {investmentStages.map((stage, idx) => (
              <ScrollReveal key={stage.step} animation="fade-up" delay={idx * 120}>
                <div className="stage-step-card">
                  {/* Number Block */}
                  <div className="stage-number-box">
                    <span className="stage-num-text">{stage.step}</span>
                    <span className="stage-badge-small">{stage.badge}</span>
                  </div>

                  {/* Main Info */}
                  <div className="stage-main-info">
                    <h3>{stage.title}</h3>
                    <div style={{ color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.6rem' }}>
                      {stage.summary}
                    </div>
                    <p>{stage.details}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="stage-deliverables-box">
                    <h4>
                      <FileCheck2 size={16} />
                      <span>المخرجات والمكتسبات</span>
                    </h4>
                    <ul className="stage-deliverables-list">
                      {stage.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <CheckCircle2 size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section style={{ padding: '5rem 0', background: '#ffffff' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <ShieldCheck size={18} />
                <span>معايير الاختيار</span>
              </div>
              <h2>ما الذي نبحث عنه في المشاريع الواعدة؟</h2>
              <p>
                نحرص على توجيه استثماراتنا نحو الفرص التي تحمل مقومات النجاح والنمو الحقيقي.
              </p>
            </div>
          </ScrollReveal>

          <div className="criteria-grid">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="criteria-card">
                <div className="criteria-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  القيمة المضافة والابتكار
                </h3>
                <p style={{ color: 'var(--dark-600)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  أن يقدم المشروع حلاً مبتكراً لمشكلة قائمة في السوق أو يرفع من جودة تجربة المستهلك بمعايير متقدمة.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="criteria-card">
                <div className="criteria-icon-box">
                  <TrendingUp size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  قابلية التوسع والانتشار
                </h3>
                <p style={{ color: 'var(--dark-600)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  امتلاك المشروع لنموذج عمل مرن يسمح بالانتشار والتوسع في مناطق ومحافظات المملكة المختلفة والخليج.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <div className="criteria-card">
                <div className="criteria-icon-box">
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  فريق عمل شغوف ومؤهل
                </h3>
                <p style={{ color: 'var(--dark-600)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  وجود مؤسسين يمتلكون الشغف والالتزام والخبرة اللازمة لقيادة العمليات وتحقيق الأهداف الاستراتيجية.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Banner */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenPitchModal}
                style={{ padding: '0.9rem 2.4rem', fontSize: '1.05rem' }}
              >
                <span>ابدأ رحلتك معنا وقدّم فكرتك</span>
                <ArrowLeft size={18} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
