import React from 'react';

export function Tabs({ tabs, activeTab, onChange }: { tabs: { id: string; label: string; icon?: React.ReactNode }[]; activeTab: string; onChange: (id: string) => void }) {
  return (
    <div className="flex gap-1.5 overflow-x-auto" role="tablist" style={{ scrollbarWidth: 'none' }}>
      {tabs.map(tab => (
        <button key={tab.id} role="tab" aria-selected={activeTab === tab.id} onClick={() => onChange(tab.id)}
          className={`pill-tab ${activeTab === tab.id ? 'active' : ''}`}>
          {tab.icon}{tab.label}
        </button>
      ))}
    </div>
  );
}
