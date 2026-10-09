import React from 'react';

export function ProgressBar({ value, color = 'var(--accent)', height = 5, showLabel = false }: { value: number; color?: string; height?: number; showLabel?: boolean }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="flex items-center gap-2">
      <div className="progress-track" style={{ height }}>
        <div className="progress-fill" style={{ width: `${v}%`, backgroundColor: color }} />
      </div>
      {showLabel && <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', minWidth: 36 }}>{Math.round(v)}%</span>}
    </div>
  );
}
