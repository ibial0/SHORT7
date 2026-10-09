import React from 'react';
import { Search, X } from 'lucide-react';

export function SearchInput({ value, onChange, placeholder = 'Search...' }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative">
      <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
      <input type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="input-field" style={{ paddingLeft: 44, paddingRight: 36 }} />
      {value && (
        <button onClick={() => onChange('')} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex' }}>
          <X size={14} />
        </button>
      )}
    </div>
  );
}
