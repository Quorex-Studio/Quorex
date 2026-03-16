import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { id: 'servicios', labelKey: 'nav.services' },
  { id: 'stack', labelKey: 'nav.stack' },
  { id: 'proyectos', labelKey: 'nav.projects' },
  { id: 'por-que', labelKey: 'nav.why' },
  { id: 'contacto', labelKey: 'nav.contact' },
];

const QuorexLogo = () => (
  <svg viewBox="0 0 120 120" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6C63FF" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
      <mask id="qm">
        <rect width="120" height="120" fill="white" />
        <path d="M 65 61 L 88 84 L 65 107" fill="none" stroke="black" strokeWidth="24" strokeLinejoin="miter" strokeLinecap="butt" />
      </mask>
    </defs>
    <circle cx="50" cy="50" r="32" fill="none" stroke="url(#qg)" strokeWidth="14" mask="url(#qm)" />
    <path d="M 65 61 L 88 84 L 65 107" fill="none" stroke="url(#qg)" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="butt" />
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (id) => {
    setOpen(false);
    if (isHome) {
      // On home: smooth scroll to section
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On other pages: navigate to home with hash
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome ? 'bg-[#050507]/60 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => { if (isHome) { window.scrollTo({ top:0, behavior:'smooth' }); } else { navigate('/'); } }} className="flex items-center gap-2 group hoverable">
          <QuorexLogo />
          <div className="leading-none text-left">
            <div className="font-black text-[#F0F1F5] text-base tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:to-[#00E5A0] transition-all duration-300" style={{fontFamily:"'Bebas Neue',sans-serif"}}>QUOREX</div>
            <div className="text-[0.45rem] tracking-[0.18em] text-[#F0F1F5]/40 uppercase" style={{fontFamily:"'JetBrains Mono',monospace"}}>Studio</div>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(i => (
            <button key={i.id} onClick={() => go(i.id)} className="relative py-1 text-sm text-[#F0F1F5]/60 hover:text-[#F0F1F5] transition-colors group hoverable font-medium tracking-wide" style={{ fontFamily: "'Outfit',sans-serif" }}>
              {t(i.labelKey)}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
          
          <button onClick={toggleLanguage} aria-label="Change Language" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.08] hover:border-[#6C63FF]/50 text-[#F0F1F5]/60 hover:text-[#F0F1F5] transition-all hoverable">
            <Globe className="w-3.5 h-3.5" />
            <span className="text-xs font-mono font-bold">{language.toUpperCase()}</span>
          </button>
        </div>
        <button onClick={() => go('contacto')} className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white text-sm font-bold tracking-wide hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(108,99,255,0.4)] transition-all duration-300 hoverable rounded-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>
          {t('nav.quote')}
        </button>
        <button aria-label="Toggle Menu" className="md:hidden text-[#F0F1F5] p-1 hoverable" onClick={() => setOpen(v => !v)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#050507]/98 border-t border-white/[0.08] px-6 py-6 flex flex-col gap-5 animate-fade-in">
          <button onClick={toggleLanguage} className="flex items-center gap-2 text-[#F0F1F5]/70 hover:text-[#F0F1F5] text-sm">
            <Globe className="w-4 h-4" />
            <span className="font-mono">{language === 'es' ? 'English' : 'Español'}</span>
          </button>
          {navItems.map(i => (<button key={i.id} onClick={() => go(i.id)} className="text-left text-[#F0F1F5]/70 hover:text-[#F0F1F5] text-base" style={{ fontFamily: "'Outfit',sans-serif" }}>{t(i.labelKey)}</button>))}
          <button onClick={() => go('contacto')} className="py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white font-semibold text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>
            {t('nav.quote')}
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
