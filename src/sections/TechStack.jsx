import React from 'react';
import { techStack } from '../data/mock';

const cats = [
  { name: 'Frontend', color: '#6C63FF' },
  { name: 'Language', color: '#00E5A0' },
  { name: 'Backend', color: '#FF6B6B' },
  { name: 'Database', color: '#6C63FF' },
  { name: 'Styling', color: '#FF6B6B' },
  { name: 'Deploy', color: '#00E5A0' },
];

const TechStack = () => (
  <section id="stack" className="py-24 px-6 bg-[#050507]">
    <div className="max-w-7xl mx-auto">
      <div className="reveal mb-14">
        <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{'// 02 — Tecnologías'}</div>
        <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>NUESTRO STACK</h2>
        <p className="text-[#F0F1F5]/55 mt-3 max-w-xl" style={{ fontFamily: "'Outfit',sans-serif" }}>Herramientas modernas y probadas en producción. Sin compromisos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">
        {/* Categories */}
        <div className="flex flex-col gap-px bg-[#F0F1F5]/08">
          {cats.map(cat => {
            const items = techStack.filter(t => t.category === cat.name);
            if (!items.length) return null;
            return (
              <div key={cat.name} className="bg-[#0a0a0c] p-5 hover:bg-[#111116] transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                  <span className="font-mono text-xs tracking-[0.12em] uppercase" style={{ color: cat.color, fontFamily: "'JetBrains Mono',monospace" }}>{cat.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(t => (
                    <span key={t.name} className="font-mono text-xs px-3 py-1.5 bg-[#F0F1F5]/05 border border-[#F0F1F5]/10 text-[#F0F1F5] hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/08 transition-all duration-200 hoverable" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                      {t.icon} {t.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics */}
        <div className="flex flex-col gap-px bg-[#F0F1F5]/08">
          {[
            { num: '99.9%', label: 'Uptime garantizado', grad: 'from-[#6C63FF] to-[#FF6B6B]' },
            { num: '<100ms', label: 'Response Time', grad: 'from-[#FF6B6B] to-[#00E5A0]' },
            { num: 'A+', label: 'Security Score', grad: 'from-[#00E5A0] to-[#6C63FF]' },
            { num: '2 SEM', label: 'Tiempo promedio entrega', grad: 'from-[#6C63FF] to-[#00E5A0]' },
            { num: '24/7', label: 'Soporte disponible', grad: 'from-[#FF6B6B] to-[#6C63FF]' },
            { num: '∞', label: 'Revisiones incluidas', grad: 'from-[#00E5A0] to-[#FF6B6B]' },
          ].map(m => (
            <div key={m.num} className="bg-[#0a0a0c] p-5 text-center flex-1 hover:bg-[#111116] transition-colors">
              <div className={`text-3xl font-black bg-gradient-to-r ${m.grad} bg-clip-text text-transparent`} style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{m.num}</div>
              <div className="text-xs text-[#F0F1F5]/45 mt-1 tracking-wide" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TechStack;
