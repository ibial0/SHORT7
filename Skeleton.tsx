import React from 'react';

export function Skeleton({ width = '100%', height = '1rem', className = '' }: { width?: string; height?: string; className?: string }) {
  return <div className={`skeleton ${className}`} style={{ width, height }} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="s7-card">
      <Skeleton height="1.25rem" width="60%" className="mb-3" />
      <Skeleton height="0.875rem" width="100%" className="mb-2" />
      <Skeleton height="0.875rem" width="80%" className="mb-3" />
      <div className="flex gap-2"><Skeleton height="1.5rem" width="4rem" /><Skeleton height="1.5rem" width="5rem" /></div>
    </div>
  );
}
