import React from 'react';

export function Badge({ children, color, bgColor, size = 'sm', dot = false }: {
  children: React.ReactNode; color?: string; bgColor?: string; size?: 'sm' | 'md'; dot?: boolean;
}) {
  return (
    <span className={`badge ${size === 'md' ? 'badge-md' : 'badge-sm'}`}
      style={{ backgroundColor: bgColor || 'var(--accent-muted)', color: color || 'var(--accent)' }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: color || 'var(--accent)', flexShrink: 0 }} />}
      {children}
    </span>
  );
}
