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

      <div className="grid grid-cols-12 gap-px bg-[#F0F1F5]/08 reveal">
        {projects.map(p => (
          <div key={p.id} className={`group relative bg-[#111116] overflow-hidden hover:bg-[#15151c] transition-colors duration-300 ${p.span >= 7 ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-5'}`}>
            <div className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-[#F0F1F5]/08 opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-4 h-4 text-[#6C63FF]" />
            </div>
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover brightness-50 saturate-75 group-hover:brightness-70 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500" />
            <div className="p-6">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tags.map(t => <span key={t} className="font-mono text-[0.6rem] px-2 py-0.5 border border-[#F0F1F5]/10 text-[#F0F1F5]/45" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t}</span>)}
              </div>
              <h3 className="font-bold text-[#F0F1F5] text-lg mb-1.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#6C63FF] group-hover:to-[#FF6B6B] transition-all duration-300" style={{ fontFamily: "'Outfit',sans-serif" }}>{p.title}</h3>
              <p className="text-sm text-[#F0F1F5]/50 leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>{p.description}</p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle at bottom right, ${p.color}12, transparent 70%)` }} />
          </div>
        ))}
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
