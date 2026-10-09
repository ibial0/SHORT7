import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export function Modal({ isOpen, onClose, title, children, maxWidth = '520px' }: {
  isOpen: boolean; onClose: () => void; title?: string; children: React.ReactNode; maxWidth?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [isOpen]);
  useEffect(() => { const h = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); }; document.addEventListener('keydown', h); return () => document.removeEventListener('keydown', h); }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div ref={ref} className="modal-overlay" onClick={e => { if (e.target === ref.current) onClose(); }}>
      <div className="modal-content" style={{ maxWidth }} role="dialog" aria-modal="true">
        {title && (
          <div className="flex items-center justify-between" style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--text-primary)' }}>{title}</h2>
            <button onClick={onClose} className="btn btn-ghost btn-icon" style={{ padding: 6 }} aria-label="Close"><X size={18} /></button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
