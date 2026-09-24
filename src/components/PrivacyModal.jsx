import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import '../styles/PrivacyModal.css';

export function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="privacy-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          style={{ background: 'var(--bg-subtle)', color: 'var(--dark-800)' }}
          aria-label="إغلاق"
        >
          <X size={20} />
        </button>

        <div className="privacy-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary-600)', fontWeight: 700, fontSize: '0.9rem' }}>
            <ShieldCheck size={18} />
            <span>الحوكمة والامتثال</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.3rem', color: 'var(--dark-900)' }}>
            سياسة الخصوصية والشروط العامة
          </h2>
        </div>

        <div className="privacy-modal-body">
          <div>
            <h3 className="privacy-section-title">
              <Lock size={18} color="var(--primary-600)" />
              <span>1. حماية البيانات والسرية</span>
            </h3>
            <p>
              تلتزم شركة <strong>نثيل للاستثمار وتطوير الأعمال</strong> بحماية خصوصية كافة المستخدمين والشركاء ورواد الأعمال. يتم التعامل مع جميع البيانات والمعلومات ومقترحات المشاريع (Pitch Decks) بأعلى معايير السرية والأمان ووفقاً للأنظمة المعمول بها في المملكة العربية السعودية.
            </p>
          </div>

          <div>
            <h3 className="privacy-section-title">
              <FileText size={18} color="var(--primary-600)" />
              <span>2. حقوق الملكية الفكرية</span>
            </h3>
            <p>
              تحتفظ كافة الجهات ورواد الأعمال بحقوق الملكية الفكرية الكاملة لأفكارهم ونماذج أعمالهم المقدمة عبر المنصة، ولا يتم استخدام أي مادة أو مشاركتها مع أطراف خارجية إلا بعد توقيع اتفاقيات عدم الإفصاح والشراكة الرسمية.
            </p>
          </div>

          <div>
            <h3 className="privacy-section-title">
              <CheckCircle2 size={18} color="var(--primary-600)" />
              <span>3. الاستخدام المشروع للموقع</span>
            </h3>
            <p>
              يُحظر استخدام المنصة أو أي من محتوياتها لأغراض غير قانونية أو انتهاك حقوق أي طرف. تخضع هذه الشروط وتُفسر وفقاً للأنظمة واللوائح السارية في المملكة العربية السعودية ومحاكم منطقة حائل.
            </p>
          </div>
        </div>

        <div className="privacy-modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            <span>فهمت وموافق</span>
          </button>
        </div>
      </div>
    </div>
  );
}
