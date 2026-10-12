import React, { useState, useRef, useEffect } from 'react';
import { useSimulator } from '../context/SimulatorContext';

export default function LanguageDropdown({ dark = false }) {
  const { lang, setLang } = useSimulator();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { code: 'ar', label: 'العربية', sub: 'Arabic', flag: '🇸🇦' },
    { code: 'en', label: 'English', sub: 'الإنجليزية', flag: '🇬🇧' }
  ];

  const current = options.find((o) => o.code === lang) || options[0];

  return (
    <div className="relative inline-block text-start" ref={containerRef} id="language-switcher-dropdown">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm focus:outline-none focus:ring-2 ${
          dark
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md focus:ring-brand-400'
            : 'bg-white hover:bg-slate-50 text-slate-750 border border-slate-200/90 text-slate-700 hover:text-brand-700 focus:ring-brand-500'
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span className="font-bold tracking-tight">{current.label}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${
            dark ? 'text-white/70' : 'text-slate-400'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute ${lang === 'en' ? 'right-0' : 'left-0'} mt-2 w-48 rounded-2xl shadow-xl py-1.5 z-50 border transition-all ${
            dark
              ? 'bg-[#111c2e] border-white/15 text-white ring-1 ring-black/30'
              : 'bg-white border-slate-100 text-slate-800 ring-1 ring-black/5'
          }`}
          role="listbox"
        >
          <div className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${dark ? 'text-slate-400' : 'text-slate-400'}`}>
            {lang === 'en' ? 'Select Language' : 'اختر اللغة'}
          </div>
          {options.map((item) => (
            <button
              key={item.code}
              type="button"
              role="option"
              aria-selected={lang === item.code}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2 text-xs transition-colors text-start ${
                lang === item.code
                  ? dark
                    ? 'bg-white/15 text-brand-300 font-bold'
                    : 'bg-brand-50 text-brand-700 font-bold'
                  : dark
                  ? 'hover:bg-white/5 text-slate-200'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-base leading-none">{item.flag}</span>
                <div>
                  <div className="font-bold leading-tight">{item.label}</div>
                  <div className={`text-[10px] ${dark ? 'text-slate-400' : 'text-slate-400'}`}>{item.sub}</div>
                </div>
              </div>
              {lang === item.code && (
                <svg className={`h-4 w-4 ${dark ? 'text-brand-300' : 'text-brand-600'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
