import React from 'react';
import { otherTechs } from '../data/mock';

const Flexibility = () => (
  <section id="flexibilidad" className="py-24 px-6 bg-[#0a0a0c] border-t border-[#F0F1F5]/08">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Content */}
      <div className="reveal">
        <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#6C63FF] mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {'// 05 — Flexibilidad'}
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-none font-black text-[#F0F1F5] mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          ¿YA TIENES UN PROYECTO EN OTRA TECNOLOGÍA?
        </h2>
        <p className="text-[#F0F1F5]/65 leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          No hay problema. Trabajamos con el stack que tú ya tienes —{' '}
          <span className="text-[#F0F1F5] font-semibold">WordPress, PHP, Laravel, Vue, Angular</span>{' '}
          o cualquier otra tecnología. Lo tomamos, lo entendemos y lo mejoramos.
        </p>
        <p className="text-[#F0F1F5]/65 leading-relaxed mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Y si empezamos desde cero, te explicamos por qué{' '}
          <span className="text-[#F0F1F5] font-semibold">Next.js + Node.js + Supabase</span>{' '}
          es la combinación más práctica, escalable y económica del mercado actual.
        </p>
        <p className="text-[#00E5A0] font-semibold" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Flexibilidad total. Sin dogmas.
        </p>

        {/* Other tech badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {otherTechs.map((t) => (
            <span key={t}
              className="font-mono text-xs px-3 py-1.5 border border-[#F0F1F5]/10 text-[#F0F1F5]/55 hover:border-[#FF6B6B]/40 hover:text-[#FF6B6B] transition-all duration-200 hoverable"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Code visual */}
      <div className="reveal relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6C63FF] via-[#FF6B6B] to-[#00E5A0] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <div className="relative bg-[#050507] rounded-xl border border-white/[0.1] overflow-hidden">

          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#0a0a0c] border-b border-white/[0.05]">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF6B6B]/80 shadow-[0_0_10px_rgba(255,107,107,0.5)]" />
              <div className="w-3 h-3 rounded-full bg-[#F0F1F5]/30" />
              <div className="w-3 h-3 rounded-full bg-[#00E5A0]/80 shadow-[0_0_10px_rgba(0,229,160,0.5)]" />
            </div>
            <div className="mx-auto text-[#F0F1F5]/40 text-xs font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>quorex.config.ts</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm leading-8 overflow-x-auto whitespace-pre animate-[typewriter_2s_steps(40)_forwards]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <div className="text-[#F0F1F5]/30 mb-2">{'// ¿Tu proyecto ya está en otra tecnología?'}</div>
            <div><span className="text-[#6C63FF]">const</span> <span className="text-[#F0F1F5] font-bold">quorex</span> <span className="text-[#FF6B6B]">=</span> {'{'}</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#00E5A0] ml-4">preferredStack</span>: <span className="text-[#FF6B6B]">"Next.js + Supabase"</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#00E5A0] ml-4">canWorkWith</span>: [</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#FF6B6B] ml-8">"WordPress"</span>, <span className="text-[#FF6B6B]">"PHP"</span>, <span className="text-[#FF6B6B]">"Laravel"</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#FF6B6B] ml-8">"Vue"</span>, <span className="text-[#FF6B6B]">"Angular"</span>, <span className="text-[#FF6B6B]">"Django"</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#FF6B6B] ml-8">"...cualquier stack"</span></div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#F0F1F5] ml-4">]</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#00E5A0] ml-4">dogmas</span>: <span className="text-[#6C63FF] italic">false</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#00E5A0] ml-4">flexibility</span>: <span className="text-[#6C63FF] italic">true</span>,</div>
            <div className="hover:bg-white/[0.02] transition-colors"><span className="text-[#00E5A0] ml-4">results</span>: <span className="text-[#FF6B6B]">"guaranteed"</span></div>
            <div>{'};'}</div>
            <br />
            <div className="text-[#00E5A0] mt-2 flex items-center">
              <span>{'// Tu proyecto en buenas manos.'}</span>
              <span className="w-2 h-4 bg-[#00E5A0] ml-2 animate-blink inline-block" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Flexibility;
