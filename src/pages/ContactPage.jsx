import React, { useState } from 'react';
import { siteConfig, faqs } from '../data/siteData';
import { 
  Sparkles, 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { ScrollToTop } from '../components/ScrollToTop';
import '../styles/ContactPage.css';

export function ContactPage({ onNotify, onOpenPitchModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'investment',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('يرجى ملء كافة الحقول الإلزامية', 'warning');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onNotify('تم إرسال رسالتك بنجاح! سيتواصل معك فريق نثيل في أقرب وقت.', 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'investment',
        message: ''
      });
    }, 1000);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="contact-page">
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="container">
          <div className="page-hero-content">
            <div className="page-breadcrumb">
              <span>الرئيسية</span>
              <ChevronLeft size={16} />
              <span>تواصل معنا</span>
            </div>
            <h1 className="page-title">
              نحن هنا للاستماع إلى أفكارك وبناء شراكات استثنائية
            </h1>
            <p className="page-subtitle">
              تواصل مع فريق إدارة الاستثمار وتطوير الأعمال في نثيل، أو تفضل بزيارة مقرنا الرئيسي في حائل.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <ScrollReveal animation="fade-left">
              <div className="contact-form-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-600)', fontWeight: 700, marginBottom: '0.6rem' }}>
                  <MessageSquare size={18} />
                  <span>نموذج التواصل السريع</span>
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark-900)', marginBottom: '1.5rem' }}>
                  أرسل استفسارك أو طلبك
                </h2>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div className="form-group">
                    <label className="form-label">الاسم الكريم *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-input"
                      placeholder="مثال: تركي الشمري"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">البريد الإلكتروني *</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-input"
                        placeholder="turki@example.com"
                        dir="ltr"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">رقم الجوال</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-input"
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">موضوع التواصل</label>
                    <select 
                      name="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="investment">فرصة استثمارية أو شراكة تجارية</option>
                      <option value="real-estate">استفسار عن إدارة وتطوير الأملاك</option>
                      <option value="press">العلاقات العامة والإعلام</option>
                      <option value="general">استفسار عام</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">نص الرسالة *</label>
                    <textarea 
                      name="message"
                      className="form-textarea"
                      rows="5"
                      placeholder="اكتب تفاصيل استفسارك أو طلبك هنا..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ alignSelf: 'flex-start', padding: '0.85rem 2rem' }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Info Cards */}
            <div className="contact-info-cards-stack">
              <ScrollReveal animation="fade-right" delay={100}>
                <div className="contact-quick-card">
                  <div className="contact-card-icon">
                    <MapPin size={22} />
                  </div>
                  <div className="contact-card-details">
                    <h4>المقر الرئيسي</h4>
                    <p>{siteConfig.contact.address}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={180}>
                <div className="contact-quick-card">
                  <div className="contact-card-icon">
                    <Phone size={22} />
                  </div>
                  <div className="contact-card-details">
                    <h4>أرقام التواصل</h4>
                    <p dir="ltr">{siteConfig.contact.phoneDisplay}</p>
                    <p dir="ltr" style={{ color: 'var(--text-muted)' }}>{siteConfig.contact.mobile}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={260}>
                <div className="contact-quick-card">
                  <div className="contact-card-icon">
                    <Mail size={22} />
                  </div>
                  <div className="contact-card-details">
                    <h4>البريد الإلكتروني</h4>
                    <p>{siteConfig.contact.email}</p>
                    <p style={{ color: 'var(--primary-600)', fontWeight: 600 }}>{siteConfig.contact.investmentEmail}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={340}>
                <div className="contact-quick-card">
                  <div className="contact-card-icon">
                    <Clock size={22} />
                  </div>
                  <div className="contact-card-details">
                    <h4>ساعات العمل الرسمية</h4>
                    <p>{siteConfig.contact.workingHours}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Pitch Banner in Contact */}
              <ScrollReveal animation="fade-up" delay={400}>
                <div style={{ background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%)', padding: '1.8rem', borderRadius: 'var(--radius-lg)', color: '#ffffff', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem', color: '#ffffff' }}>
                    هل أنت رائد أعمال وتبحث عن تمويل؟
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#e0f2fe', marginBottom: '1rem' }}>
                    قدّم عرض مشروعك مباشرة إلى لجنة الاستثمار في نثيل
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-white"
                    onClick={onOpenPitchModal}
                    style={{ width: '100%' }}
                  >
                    <Sparkles size={16} />
                    <span>بوابة تقديم الأفكار والمشاريع</span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-subtle)' }}>
        <div className="container">
          <ScrollReveal animation="fade-up">
            <div className="section-header">
              <div className="section-tag">
                <HelpCircle size={18} />
                <span>الأسئلة الشائعة</span>
              </div>
              <h2>كل ما تود معرفته عن الاستثمار مع نثيل</h2>
              <p>إجابات وافية على أكثر الاستفسارات تكراراً من رواد الأعمال والشركاء.</p>
            </div>
          </ScrollReveal>

          <div className="faq-accordion-stack">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={index * 80}>
                <div className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.q}</span>
                    {activeFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {activeFaq === index && (
                    <div className="faq-answer-pane">
                      {faq.a}
                    </div>
                  )}
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
