import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => (
  <section id="proyectos" className="py-24 px-6 bg-[#0a0a0c]">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-4 reveal">
        <div>
          <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{'// 03 — Proyectos'}</div>
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>TRABAJO SELECCIONADO</h2>
        </div>
        <a href="#contacto" className="px-5 py-2.5 border border-[#F0F1F5]/15 text-[#F0F1F5]/65 hover:border-[#6C63FF]/50 hover:text-[#6C63FF] transition-all text-sm font-mono hoverable" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Iniciar proyecto →</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal">
        {projects.map((p, i) => {
          // Asymmetric layout: first item spans 8 cols, second 4. Third 5, fourth 7.
          const spanClass = i % 4 === 0 ? 'md:col-span-8' : i % 4 === 1 ? 'md:col-span-4' : i % 4 === 2 ? 'md:col-span-5' : 'md:col-span-7';
          return (
            <div key={p.id} className={`group relative bg-[#0a0a0c] overflow-hidden rounded-2xl border border-white/[0.04] transition-all duration-500 hover:border-[#6C63FF]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${spanClass}`}>
              <div className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-[#050507]/80 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-white/[0.1]">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>

              <div className="relative h-72 md:h-96 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover brightness-50 saturate-75 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                {/* Color overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none mix-blend-color" style={{ backgroundColor: p.color }} />
                {/* Dark gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => <span key={t} className="font-mono text-xs px-3 py-1 bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white rounded-full" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t}</span>)}
                </div>
                <h3 className="font-bebas text-4xl text-white mb-2 tracking-wide" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{p.title}</h3>
                <p className="text-base text-white/70 leading-relaxed font-outfit max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" style={{ fontFamily: "'Outfit',sans-serif" }}>{p.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10 reveal">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-[#F0F1F5]/10 rounded-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5A0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5A0]"></span>
          </span>
          <span className="text-xs font-mono text-[#F0F1F5]/55" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Disponible para nuevos proyectos</span>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
