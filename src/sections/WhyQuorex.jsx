import React from 'react';
import { Code2, HeadphonesIcon, Clock, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { features } from '../data/mock';

const iconMap = { Code2, HeadphonesIcon, Clock, Shield, Smartphone, TrendingUp };

const WhyQuorex = () => (
  <section id="por-que" className="py-24 px-6 bg-[#050507] relative overflow-hidden">
    <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#6C63FF]/08 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#FF6B6B]/08 rounded-full blur-3xl pointer-events-none" />
    <div className="max-w-7xl mx-auto relative">
      <div className="text-center mb-14 reveal">
        <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{'// 04 — Diferenciadores'}</div>
        <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>¿POR QUÉ QUOREX?</h2>
        <p className="text-[#F0F1F5]/55 mt-3" style={{ fontFamily: "'Outfit',sans-serif" }}>Lo que nos diferencia del resto.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0F1F5]/08 reveal">
        {features.map(f => {
          const Icon = iconMap[f.icon];
          return (
            <div key={f.id} className="group relative bg-[#050507] p-8 hover:bg-[#0a0a0c] transition-colors overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" style={{ background: f.color }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                style={{ background: `${f.color}18`, border: `1.5px solid ${f.color}40` }}>
                {Icon && <Icon className="w-7 h-7" style={{ color: f.color }} />}
              </div>
              <h3 className="font-bold text-[#F0F1F5] text-xl mb-2" style={{ fontFamily: "'Outfit',sans-serif" }}>{f.title}</h3>
              <p className="text-[#F0F1F5]/55 text-sm leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>{f.description}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Banner */}
      <div className="mt-16 p-px bg-gradient-to-r from-[#6C63FF] via-[#FF6B6B] to-[#00E5A0] rounded-2xl reveal">
        <div className="bg-[#0a0a0c] rounded-2xl p-10 text-center">
          <div className="text-5xl mb-4">⚡</div>
          <h3 className="text-3xl font-black text-[#F0F1F5] mb-3" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>LISTO PARA CONSTRUIR TU PROYECTO</h3>
          <p className="text-[#F0F1F5]/60 mb-7 max-w-md mx-auto" style={{ fontFamily: "'Outfit',sans-serif" }}>Sin plantillas. Sin atajos. Código limpio y profesional.</p>
          <a href="#contacto" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,99,255,0.4)] transition-all duration-300 hoverable" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Comencemos a trabajar
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default WhyQuorex;
