import React, { useEffect } from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, Building2, Tag, ArrowLeft } from 'lucide-react';
import '../styles/ProjectModal.css';

export function ProjectModal({ project, onClose, onInquire }) {
  useEffect(() => {
    // Only lock scroll when project modal is actually open
    if (project) {
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
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="project-modal-dialog" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="إغلاق النافذة"
        >
          <X size={20} />
        </button>

        {/* Modal Header Image */}
        <div className="modal-image-header">
          <img src={project.image} alt={project.nameAr} />
          <div className="modal-image-gradient" />

          <div className="modal-header-meta">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title-ar">
              <span>{project.nameAr}</span>
              <span className="modal-title-en">({project.nameEn})</span>
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body-content">
          {/* Tagline */}
          <div style={{ color: 'var(--primary-600)', fontWeight: 800, fontSize: '1.15rem' }}>
            {project.tagline}
          </div>

          {/* Description */}
          <div>
            <h3 className="modal-section-title">
              <Sparkles size={18} color="var(--primary-500)" />
              <span>نبذة عن المشروع ونموذج العمل</span>
            </h3>
            <p className="modal-description-text">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <TrendingUp size={18} color="var(--primary-500)" />
                <span>مؤشرات وإنجازات رئيسية</span>
              </h3>
              <div className="modal-metrics-grid">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="modal-metric-card">
                    <div className="modal-metric-val">{metric.value}</div>
                    <div className="modal-metric-lbl">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Services & Capabilities */}
          {project.services && project.services.length > 0 && (
            <div>
              <h3 className="modal-section-title">
                <Building2 size={18} color="var(--primary-500)" />
                <span>الخدمات والحلول المقدمة</span>
              </h3>
              <ul className="modal-services-list">
                {project.services.map((service, idx) => (
                  <li key={idx} className="modal-service-item">
                    <CheckCircle2 size={18} />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <Tag size={16} color="var(--text-muted)" />
              {project.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Dialog Footer Actions */}
          <div className="modal-dialog-footer">
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              الحالة: <strong style={{ color: 'var(--accent-emerald)' }}>{project.status}</strong>
            </span>

            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onClose}
              >
                إغلاق
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => {
                  onClose();
                  onInquire(project);
                }}
              >
                <span>طلب استفسار أو شراكة</span>
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
