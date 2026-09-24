import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import '../styles/Toast.css';

export function Toast({ toasts, onDismiss }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-message-card ${toast.type || 'info'}`}>
          <div className="toast-icon-wrap">
            {toast.type === 'success' ? (
              <CheckCircle2 size={18} />
            ) : toast.type === 'warning' ? (
              <AlertCircle size={18} />
            ) : (
              <Info size={18} />
            )}
          </div>

          <div style={{ flexGrow: 1 }}>{toast.message}</div>

          <button 
            type="button" 
            onClick={() => onDismiss(toast.id)}
            style={{ background: 'transparent', color: '#94a3b8', padding: '0.2rem' }}
            aria-label="إغلاق الإشعار"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
}
