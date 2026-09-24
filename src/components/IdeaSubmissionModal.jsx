import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, UploadCloud, ArrowLeft, ArrowRight, User, Briefcase, DollarSign } from 'lucide-react';
import '../styles/IdeaSubmissionModal.css';

export function IdeaSubmissionModal({ isOpen, onClose, onNotify }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'حائل',
    projectName: '',
    sector: 'real-estate',
    stage: 'idea',
    pitchSummary: '',
    requiredFunding: 'under-500k',
    fileName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStep(1);
      setIsSuccess(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFakeFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.phone || !formData.email) {
        onNotify('يرجى تعبئة جميع الحقول الأساسية', 'warning');
        return;
      }
    } else if (step === 2) {
      if (!formData.projectName || !formData.pitchSummary) {
        onNotify('يرجى كتابة اسم المشروع ونبذة واضحة عن الفكرة', 'warning');
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger Confetti effect
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });

      onNotify('تم استلام مقترح مشروعك بنجاح! سيتواصل معك فريق الاستثمار قريباً.', 'success');
    }, 1200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pitch-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          style={{ background: 'var(--bg-subtle)', color: 'var(--dark-800)' }}
          aria-label="إغلاق"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="pitch-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.9rem' }}>
            <Sparkles size={18} />
            <span>بوابة رواد الأعمال والمبتكرين</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.3rem', color: 'var(--dark-900)' }}>
            قدّم فكرتك أو مشروعك الاستثماري
          </h2>

          {!isSuccess && (
            <div className="pitch-steps-bar">
              <div className={`pitch-step-indicator ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>
                <div className="step-circle">{step > 1 ? '✓' : '1'}</div>
                <span>البيانات الشخصية</span>
              </div>
              <div className={`pitch-step-indicator ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>
                <div className="step-circle">{step > 2 ? '✓' : '2'}</div>
                <span>تفاصيل المشروع</span>
              </div>
              <div className={`pitch-step-indicator ${step === 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <span>التمويل والمرفقات</span>
              </div>
            </div>
          )}
        </div>

        {/* Form Body */}
        {isSuccess ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
            <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'var(--accent-emerald-light)', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={40} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--dark-900)' }}>
              تم استلام طلبك بنجاح!
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '420px', lineHeight: 1.7 }}>
              شكراً لثقتك في <strong>نثيل</strong>. يقوم فريق تقييم الفرص الاستثمارية بمراجعة ملف مشروعك وسنتواصل معك عبر الهاتف أو البريد الإلكتروني خلال 5 أيام عمل.
            </p>
            <button 
              type="button" 
              className="btn btn-primary" 
              style={{ marginTop: '1rem' }}
              onClick={onClose}
            >
              العودة إلى المنصة
            </button>
          </div>
        ) : (
          <form onSubmit={step === 3 ? handleSubmit : handleNext}>
            <div className="pitch-form-body">
              {step === 1 && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      <User size={16} />
                      <span>الاسم الثلاثي أو اسم المنشأة *</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      className="form-input"
                      placeholder="مثال: خالد بن إبراهيم الشمري"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">رقم الجوال *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-input"
                        placeholder="05XXXXXXXX"
                        dir="ltr"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">البريد الإلكتروني *</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-input"
                        placeholder="khalid@example.com"
                        dir="ltr"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">المدينة أو المنطقة *</label>
                    <input 
                      type="text" 
                      name="city"
                      className="form-input"
                      placeholder="مثال: حائل، الرياض، إلخ"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      <Briefcase size={16} />
                      <span>اسم المشروع أو الفكرة التجارية *</span>
                    </label>
                    <input 
                      type="text" 
                      name="projectName"
                      className="form-input"
                      placeholder="مثال: منصة لوجستية ذكية لمنطقة حائل"
                      value={formData.projectName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">قطاع المشروع</label>
                      <select 
                        name="sector" 
                        className="form-select"
                        value={formData.sector}
                        onChange={handleChange}
                      >
                        <option value="real-estate">التطوير العقاري والمرافق</option>
                        <option value="hospitality">الضيافة والمطاعم الفاخرة</option>
                        <option value="design">التصميم والأثاث المعماري</option>
                        <option value="tech-marketing">التقنية والتسويق الرقمي</option>
                        <option value="other">قطاع آخر واعد</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">المرحلة الحالية للمشروع</label>
                      <select 
                        name="stage" 
                        className="form-select"
                        value={formData.stage}
                        onChange={handleChange}
                      >
                        <option value="idea">مجرد فكرة / نموذج أولي</option>
                        <option value="mvp">منتج جاهز وبداية إطلاق</option>
                        <option value="operating">مشروع قائم ويحقق إيرادات</option>
                        <option value="expansion">مشروع جاهز للتوسع والامتياز</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">نبذة عن الفكرة والميزة التنافسية *</label>
                    <textarea 
                      name="pitchSummary"
                      className="form-textarea"
                      rows="4"
                      placeholder="اشرح المشكلة التي يحلها مشروعك، ولماذا تعتقد أنه سينجح وما هي القيمة المضافة..."
                      value={formData.pitchSummary}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div className="form-group">
                    <label className="form-label">
                      <DollarSign size={16} />
                      <span>حجم التمويل المطلوب</span>
                    </label>
                    <select 
                      name="requiredFunding" 
                      className="form-select"
                      value={formData.requiredFunding}
                      onChange={handleChange}
                    >
                      <option value="under-500k">أقل من 500,000 ريال سعودي</option>
                      <option value="500k-1m">من 500,000 إلى 1,000,000 ريال سعودي</option>
                      <option value="1m-3m">من 1,000,000 إلى 3,000,000 ريال سعودي</option>
                      <option value="over-3m">أكثر من 3,000,000 ريال سعودي</option>
                      <option value="strategic-only">شراكة تشغيلية واستراتيجية فقط</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span>عرض تقديمي / دراسة جدوى (Pitch Deck) - اختياري</span>
                    </label>
                    <label className="file-dropzone-sim">
                      <input 
                        type="file" 
                        accept=".pdf,.ppt,.pptx,.doc,.docx"
                        style={{ display: 'none' }}
                        onChange={handleFakeFileUpload}
                      />
                      <UploadCloud size={32} color="var(--primary-600)" />
                      <div style={{ fontWeight: 700, color: 'var(--dark-800)', fontSize: '0.95rem' }}>
                        {formData.fileName ? formData.fileName : 'اضغط لرفع العرض التقديمي للمشروع (PDF / PPTX)'}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        الحد الأقصى للملف: 25 ميغابايت
                      </span>
                    </label>
                  </div>

                  <div style={{ background: 'var(--primary-50)', padding: '0.9rem 1.2rem', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', color: 'var(--primary-800)' }}>
                    🔒 جميع البيانات والملفات المقدمة تخضع لاتفاقية سرية المعلومات وحماية الملكية الفكرية من نثيل.
                  </div>
                </>
              )}
            </div>

            {/* Footer Navigation */}
            <div className="pitch-modal-footer">
              {step > 1 ? (
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={handlePrev}
                >
                  <ArrowRight size={16} />
                  <span>السابق</span>
                </button>
              ) : (
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  إلغاء
                </button>
              )}

              {step < 3 ? (
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={handleNext}
                >
                  <span>التالي</span>
                  <ArrowLeft size={16} />
                </button>
              ) : (
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال المقترح الاستثماري'}</span>
                  <Sparkles size={16} />
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
