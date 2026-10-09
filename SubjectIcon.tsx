import React from 'react';
import {
  BookOpen, ScrollText, Languages, PenLine, FileText, Calculator,
  Scale, Globe, GraduationCap, Pencil, Microscope, Atom, FlaskConical, Sprout,
} from 'lucide-react';

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  'quran-tajweed': BookOpen,
  'hadith': ScrollText,
  'arabic-1': Languages,
  'arabic-2': PenLine,
  'bangla-1': FileText,
  'math': Calculator,
  'aqaid-fiqh': Scale,
  'english-1': Globe,
  'english-2': GraduationCap,
  'bangla-2': Pencil,
  'biology': Microscope,
  'physics': Atom,
  'chemistry': FlaskConical,
  'agriculture': Sprout,
};

export function SubjectIcon({ subjectId, size = 20, className, style }: { subjectId: string; size?: number; className?: string; style?: React.CSSProperties }) {
  const Icon = ICONS[subjectId] || BookOpen;
  return <Icon size={size} className={className} style={style} />;
}
