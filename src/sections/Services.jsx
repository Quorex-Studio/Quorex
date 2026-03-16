import React from 'react';
import { ShoppingCart, LayoutDashboard, Rocket, Globe, BookOpen, Code2, Calendar, Layers, Server, ArrowRight } from 'lucide-react';
import { getLocalizedData } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = { ShoppingCart, LayoutDashboard, Rocket, Globe, BookOpen, Code2, Calendar, Layers, Server, ArrowRight };
const colorMap = {
  purple: { bg: 'rgba(108,99,255,0.12)', border: 'rgba(108,99,255,0.3)', text: '#6C63FF', glow: 'rgba(108,99,255,0.15)' },
  red: { bg: 'rgba(255,107,107,0.12)', border: 'rgba(255,107,107,0.3)', text: '#FF6B6B', glow: 'rgba(255,107,107,0.15)' },
  green: { bg: 'rgba(0,229,160,0.12)', border: 'rgba(0,229,160,0.3)', text: '#00E5A0', glow: 'rgba(0,229,160,0.15)' },
};

const Services = () => {
  const { language, t } = useLanguage();
  const localizedServices = getLocalizedData(language).services;

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t('services.tag')}</div>
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{t('services.title')}</h2>
          <p className="text-[#F0F1F5]/55 mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Outfit',sans-serif" }}>{t('hero.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0F1F5]/08 reveal">
          {localizedServices.map((s, i) => {
            const Icon = iconMap[s.icon];
            const c = colorMap[s.color];
            const num = String(i + 1).padStart(2, '0');
            return (
              <div key={s.id} className="group relative bg-[#0a0a0c] p-8 hover:bg-[#111116] transition-all duration-500 overflow-hidden hover:-translate-y-2" style={{ boxShadow: `inset 0 0 0 1px transparent`, transitionProperty: 'transform, background-color, box-shadow' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `inset 0 0 0 1px ${c.text}, 0 20px 40px ${c.glow}`; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `inset 0 0 0 1px transparent`; }}>

                {/* Giant background number */}
                <div className="absolute top-4 right-4 font-bebas text-8xl leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 select-none pointer-events-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
                  {num}
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at top right, ${c.glow}, transparent 65%)` }} />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                    {Icon && <Icon className="w-7 h-7" style={{ color: c.text }} />}
                  </div>
                  <div className="font-bold text-[#F0F1F5] text-xl mb-2 group-hover:text-white transition-colors" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.title}</div>
                  <div className="font-mono text-sm font-semibold mb-4" style={{ color: c.text, fontFamily: "'JetBrains Mono',monospace" }}>{s.price}</div>
                  <p className="text-[#F0F1F5]/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="font-mono text-[0.65rem] px-3 py-1 bg-white/[0.02] border border-[#F0F1F5]/10 text-[#F0F1F5]/50 tracking-wilde rounded-full group-hover:bg-[#F0F1F5]/10 transition-colors" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
