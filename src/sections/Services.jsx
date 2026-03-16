import React from 'react';
import { ShoppingCart, LayoutDashboard, Rocket, Globe, BookOpen, Code2, Calendar, Layers, Server } from 'lucide-react';
import { services } from '../data/mock';

const iconMap = { ShoppingCart, LayoutDashboard, Rocket, Globe, BookOpen, Code2, Calendar, Layers, Server };
const colorMap = {
  purple: { bg: 'rgba(108,99,255,0.12)', border: 'rgba(108,99,255,0.3)', text: '#6C63FF', glow: 'rgba(108,99,255,0.15)' },
  red: { bg: 'rgba(255,107,107,0.12)', border: 'rgba(255,107,107,0.3)', text: '#FF6B6B', glow: 'rgba(255,107,107,0.15)' },
  green: { bg: 'rgba(0,229,160,0.12)', border: 'rgba(0,229,160,0.3)', text: '#00E5A0', glow: 'rgba(0,229,160,0.15)' },
};

const Services = () => (
  <section id="servicios" className="py-24 px-6 bg-[#0a0a0c]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14 reveal">
        <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{'// 01 — Servicios'}</div>
        <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>¿QUÉ CONSTRUIMOS?</h2>
        <p className="text-[#F0F1F5]/55 mt-3 max-w-xl mx-auto" style={{ fontFamily: "'Outfit',sans-serif" }}>Soluciones digitales completas para llevar tu negocio al siguiente nivel.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0F1F5]/08 reveal">
        {services.map((s) => {
          const Icon = iconMap[s.icon];
          const c = colorMap[s.color];
          return (
            <div key={s.id} className="group relative bg-[#0a0a0c] p-7 hover:bg-[#111116] transition-colors duration-250 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at top right, ${c.glow}, transparent 65%)` }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                  {Icon && <Icon className="w-6 h-6" style={{ color: c.text }} />}
                </div>
                <div className="font-semibold text-[#F0F1F5] text-lg mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.title}</div>
                <div className="font-mono text-sm font-medium mb-3" style={{ color: c.text, fontFamily: "'JetBrains Mono',monospace" }}>{s.price}</div>
                <p className="text-[#F0F1F5]/55 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="font-mono text-[0.62rem] px-2.5 py-1 border border-[#F0F1F5]/10 text-[#F0F1F5]/50 tracking-wide" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t}</span>
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

export default Services;
