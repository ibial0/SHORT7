import React from 'react';
import { useTranslation } from '../../contexts/AppContext';

const PCOLORS: Record<number, { bg: string; text: string; dot: string; border: string; labelEn: string; labelBn: string }> = {
  1:  { bg: 'var(--error-muted)', text: 'var(--error)', dot: '#ef4444', border: '#ef4444', labelEn: 'Highest', labelBn: 'সর্বোচ্চ' },
  2:  { bg: 'rgba(249,115,22,0.12)', text: '#fb923c', dot: '#fb923c', border: '#f97316', labelEn: 'Very High', labelBn: 'অনেক বেশি' },
  3:  { bg: 'var(--warning-muted)', text: 'var(--warning)', dot: '#f59e0b', border: '#f59e0b', labelEn: 'High', labelBn: 'বেশি' },
  4:  { bg: 'rgba(132,204,22,0.12)', text: '#a3e635', dot: '#84cc16', border: '#84cc16', labelEn: 'Medium-High', labelBn: 'মাঝারি-বেশি' },
  5:  { bg: 'var(--success-muted)', text: 'var(--success)', dot: '#22c55e', border: '#22c55e', labelEn: 'Medium', labelBn: 'মাঝারি' },
  6:  { bg: 'rgba(20,184,166,0.12)', text: '#2dd4bf', dot: '#14b8a6', border: '#14b8a6', labelEn: 'Medium-Low', labelBn: 'মাঝারি-কম' },
  7:  { bg: 'var(--info-muted)', text: 'var(--info)', dot: '#3b82f6', border: '#3b82f6', labelEn: 'Low', labelBn: 'কম' },
  8:  { bg: 'var(--accent-muted)', text: 'var(--accent)', dot: '#6366f1', border: '#6366f1', labelEn: 'Very Low', labelBn: 'অনেক কম' },
  9:  { bg: 'rgba(139,92,246,0.12)', text: '#a78bfa', dot: '#8b5cf6', border: '#8b5cf6', labelEn: 'Minimal', labelBn: 'ন্যূনতম' },
  10: { bg: 'var(--bg-elevated)', text: 'var(--text-muted)', dot: '#6b7280', border: '#6b7280', labelEn: 'Lowest', labelBn: 'সর্বনিম্ন' },
};

export function PriorityBadge({ level, showLabel = false, size = 'sm' }: { level: number; showLabel?: boolean; size?: 'sm' | 'md' }) {
  const { lang } = useTranslation();
  const c = PCOLORS[level] || PCOLORS[10];
  const label = lang === 'bn' ? c.labelBn : c.labelEn;
  return (
    <span className={`badge ${size === 'md' ? 'badge-md' : 'badge-sm'}`}
      style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}30` }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c.dot, flexShrink: 0 }} />
      L{level}{showLabel && <span style={{ marginLeft: 4 }}>— {label}</span>}
    </span>
  );
}
