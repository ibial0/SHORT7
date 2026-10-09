import React from 'react';
import type { MasteryStatus } from '../../types';
import { useTranslation } from '../../contexts/AppContext';

const COLORS: Record<MasteryStatus, { bg: string; color: string }> = {
  'new': { bg: 'var(--bg-elevated)', color: 'var(--text-muted)' },
  'learning': { bg: 'var(--info-muted)', color: 'var(--info)' },
  'weak': { bg: 'var(--error-muted)', color: 'var(--error)' },
  'recovering': { bg: 'var(--warning-muted)', color: 'var(--warning)' },
  'provisional-success': { bg: 'var(--success-muted)', color: 'var(--success)' },
  'stable': { bg: 'var(--success-muted)', color: 'var(--success)' },
  'lapsed': { bg: 'var(--error-muted)', color: 'var(--error)' },
};

export function MasteryBadge({ status }: { status: MasteryStatus }) {
  const { t } = useTranslation();
  const c = COLORS[status];
  const labels: Record<MasteryStatus, string> = {
    'new': t.mastery.new, 'learning': t.mastery.learning, 'weak': t.mastery.weak,
    'recovering': t.mastery.recovering, 'provisional-success': t.mastery.provisionalSuccess,
    'stable': t.mastery.stable, 'lapsed': t.mastery.lapsed,
  };
  return (
    <span className="badge badge-sm" style={{ backgroundColor: c.bg, color: c.color }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c.color }} />
      {labels[status]}
    </span>
  );
}
