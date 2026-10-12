import React from 'react';
import { useSimulator } from '../context/SimulatorContext';

export default function LanguageToggle({ dark = false }) {
  const { lang, toggleLang } = useSimulator();

  if (dark) {
    return (
      <button
        onClick={toggleLang}
        type="button"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all backdrop-blur-sm shadow-sm"
        title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
      >
        <svg className="h-3.5 w-3.5 text-brand-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        <span>{lang === 'en' ? 'العربية' : 'English'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLang}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-700 text-xs font-bold transition-all shadow-sm ring-1 ring-slate-100"
      title={lang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
    >
      <svg className="h-3.5 w-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{lang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}
