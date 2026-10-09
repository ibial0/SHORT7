import React from 'react';

export function EmptyState({ icon, title, description, action }: { icon?: React.ReactNode; title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {icon && <div className="mb-4" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>{icon}</div>}
      <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, marginBottom: 8, color: 'var(--text-primary)' }}>{title}</h3>
      {description && <p style={{ fontSize: '0.875rem', maxWidth: 360, marginBottom: 20, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{description}</p>}
      {action}
    </div>
  );
}
