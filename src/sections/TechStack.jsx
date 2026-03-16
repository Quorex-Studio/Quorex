import React from 'react';
import { techStack } from '../data/mock';

const TechStack = () => (
  <section id="stack" className="py-24 px-6 bg-[#050507]">
    <div className="max-w-7xl mx-auto">
      <div className="reveal mb-14">
        <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{'// 02 — Tecnologías'}</div>
        <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>NUESTRO STACK</h2>
        <p className="text-[#F0F1F5]/55 mt-3 max-w-xl" style={{ fontFamily: "'Outfit',sans-serif" }}>Herramientas modernas y probadas en producción. Sin compromisos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 reveal">
        {/* Tech Grid */}
        <div className="flex flex-wrap gap-4 content-start">
          {techStack.map((t, i) => (
            <div key={t.name} className="group relative bg-[#0a0a0c] border border-white/[0.04] p-4 rounded-xl flex items-center gap-3 hover:-translate-y-2 transition-all duration-300 hover:border-[#6C63FF]/50 hover:shadow-[0_10px_30px_rgba(108,99,255,0.15)] animate-float" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="text-2xl group-hover:scale-110 transition-transform">{t.icon}</div>
              <div className="font-mono text-sm tracking-wide text-[#F0F1F5]/80 group-hover:text-white transition-colors" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t.name}</div>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-px bg-[#F0F1F5]/08 rounded-2xl overflow-hidden border border-white/[0.04]">
          {[
            { num: '99.9%', label: 'Uptime garantizado', grad: 'from-[#6C63FF] to-[#FF6B6B]' },
            { num: '<100ms', label: 'Response Time', grad: 'from-[#FF6B6B] to-[#00E5A0]' },
            { num: 'A+', label: 'Security Score', grad: 'from-[#00E5A0] to-[#6C63FF]' },
            { num: '2 SEM', label: 'Tiempo promedio entrega', grad: 'from-[#6C63FF] to-[#00E5A0]' },
          ].map((m, i) => (
            <div key={i} className="bg-[#050507] p-8 text-center flex flex-col justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${m.grad} bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-500`} style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{m.num}</div>
              <div className="text-xs text-[#F0F1F5]/45 mt-3 tracking-widest uppercase font-semibold" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
