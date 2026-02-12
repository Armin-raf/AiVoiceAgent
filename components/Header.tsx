
import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [lang, setLang] = useState('DE');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Anwendungsfälle', id: 'solutions' },
    { name: 'Effizienz', id: 'mission' },
    { name: 'Sicherheit', id: 'security' },
    { name: 'Implementierung', id: 'process' }
  ];

  const languages = [
    { code: 'DE', label: 'Deutsch' },
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
    { code: 'ES', label: 'Español' },
    { code: 'IT', label: 'Italiano' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group shrink-0">
          <span className={`material-symbols-outlined !text-3xl text-primary transition-transform group-hover:rotate-12`}>smart_toy</span>
          <h2 className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Blue AI Voice Agent
          </h2>
        </a>

        {/* Restore Original Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                isScrolled 
                  ? 'text-slate-600 hover:text-primary' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="relative" ref={langMenuRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-bold ${
                isScrolled 
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-50' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined !text-sm">language</span>
              {lang}
              <span className={`material-symbols-outlined !text-xs transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-bold hover:bg-slate-50 transition-colors flex items-center justify-between ${
                      lang === l.code ? 'text-primary' : 'text-slate-600'
                    }`}
                  >
                    {l.label}
                    {lang === l.code && <span className="material-symbols-outlined !text-xs">check</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            className={`hidden sm:block bg-primary text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-lg ${
              isScrolled ? 'shadow-primary/20' : 'shadow-none'
            }`}
          >
            Termin buchen
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
