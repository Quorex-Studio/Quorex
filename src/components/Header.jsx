import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'stack', label: 'Stack' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'por-que', label: '¿Por qué?' },
  { id: 'contacto', label: 'Contacto' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const go = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setOpen(false); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#050507]/60 backdrop-blur-md border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 hoverable group">
          <div className="w-8 h-8 bg-gradient-to-br from-[#6C63FF] to-[#FF6B6B] flex items-center justify-center transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110 shadow-[0_0_15px_rgba(108,99,255,0.4)]">
            <span className="font-black text-white text-sm transition-transform duration-500 group-hover:-rotate-180" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>Q</span>
          </div>
          <div className="leading-none text-left">
            <div className="font-black text-[#F0F1F5] text-base tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:to-[#00E5A0] transition-all duration-300" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>QUOREX</div>
            <div className="text-[0.45rem] tracking-[0.18em] text-[#F0F1F5]/40 uppercase" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Studio</div>
          </div>
        </button>
        <div className="hidden md:flex items-center gap-7">
          {navItems.map(i => (
            <button key={i.id} onClick={() => go(i.id)} className="relative py-1 text-sm text-[#F0F1F5]/60 hover:text-[#F0F1F5] transition-colors group hoverable font-medium tracking-wide" style={{ fontFamily: "'Outfit',sans-serif" }}>
              {i.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
        </div>
        <button onClick={() => go('contacto')} className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white text-sm font-bold tracking-wide hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(108,99,255,0.4)] transition-all duration-300 hoverable rounded-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>Cotizar</button>
        <button className="md:hidden text-[#F0F1F5] p-1 hoverable" onClick={() => setOpen(v => !v)}>{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
      </nav>
      {open && (
        <div className="md:hidden bg-[#050507]/98 border-t border-white/[0.08] px-6 py-6 flex flex-col gap-5 animate-fade-in">
          {navItems.map(i => (<button key={i.id} onClick={() => go(i.id)} className="text-left text-[#F0F1F5]/70 hover:text-[#F0F1F5] text-base" style={{ fontFamily: "'Outfit',sans-serif" }}>{i.label}</button>))}
          <button onClick={() => go('contacto')} className="py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white font-semibold text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>Cotizar</button>
        </div>
      )}
    </header>
  );
};
export default Header;
