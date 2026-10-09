import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  elevated?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Card({ children, className = '', padding = 'md', elevated, onClick, style }: CardProps) {
  const cls = [
    elevated ? 's7-card-elevated' : 's7-card',
    onClick ? 's7-card-interactive' : '',
    padding === 'none' ? 's7-card-p-none' : padding === 'sm' ? 's7-card-p-sm' : padding === 'lg' ? 's7-card-p-lg' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={cls}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      style={style}
    >
      {children}
    </div>
  );
}
