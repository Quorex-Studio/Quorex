import React from 'react';
import { otherTechs } from '../data/mock';

const Flexibility = () => (
  <section id="flexibilidad" className="py-24 px-6 bg-[#0a0a0c] border-t border-[#F0F1F5]/08">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Content */}
      <div className="reveal">
        <div className="font-mono text-xs tracking-[0.14em] uppercase text-[#6C63FF] mb-4"
          style={{ fontFamily:"'JetBrains Mono', monospace" }}>
          // 05 — Flexibilidad
        </div>
        <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-none font-black text-[#F0F1F5] mb-6"
          style={{ fontFamily:"'Bebas Neue', sans-serif" }}>
          ¿YA TIENES UN PROYECTO EN OTRA TECNOLOGÍA?
        </h2>
        <p className="text-[#F0F1F5]/65 leading-relaxed mb-4" style={{ fontFamily:"'Outfit', sans-serif" }}>
          No hay problema. Trabajamos con el stack que tú ya tienes —{' '}
          <span className="text-[#F0F1F5] font-semibold">WordPress, PHP, Laravel, Vue, Angular</span>{' '}
          o cualquier otra tecnología. Lo tomamos, lo entendemos y lo mejoramos.
        </p>
        <p className="text-[#F0F1F5]/65 leading-relaxed mb-4" style={{ fontFamily:"'Outfit', sans-serif" }}>
          Y si empezamos desde cero, te explicamos por qué{' '}
          <span className="text-[#F0F1F5] font-semibold">Next.js + Node.js + Supabase</span>{' '}
          es la combinación más práctica, escalable y económica del mercado actual.
        </p>
        <p className="text-[#00E5A0] font-semibold" style={{ fontFamily:"'Outfit', sans-serif" }}>
          Flexibilidad total. Sin dogmas.
        </p>

        {/* Other tech badges */}
        <div className="flex flex-wrap gap-2 mt-6">
          {otherTechs.map((t) => (
            <span key={t}
              className="font-mono text-xs px-3 py-1.5 border border-[#F0F1F5]/10 text-[#F0F1F5]/55 hover:border-[#FF6B6B]/40 hover:text-[#FF6B6B] transition-all duration-200 hoverable"
              style={{ fontFamily:"'JetBrains Mono', monospace" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Code visual */}
      <div className="reveal bg-[#050507] border border-[#F0F1F5]/08 p-6 font-mono text-sm leading-8"
        style={{ fontFamily:"'JetBrains Mono', monospace" }}>
        <div className="text-[#F0F1F5]/25">// ¿Tu proyecto ya está en otra tecnología?</div>
        <div><span className="text-[#6C63FF]">const</span> <span className="text-[#F0F1F5]">quorex</span> = {'{'}</div>
        <div>&nbsp;&nbsp;<span className="text-[#FF6B6B]">preferredStack</span>: <span className="text-[#00E5A0]">'Next.js + Supabase'</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#FF6B6B]">canWorkWith</span>: [</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00E5A0]">'WordPress'</span>, <span className="text-[#00E5A0]">'PHP'</span>, <span className="text-[#00E5A0]">'Laravel'</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00E5A0]">'Vue'</span>, <span className="text-[#00E5A0]">'Angular'</span>, <span className="text-[#00E5A0]">'Django'</span>,</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00E5A0]">'...cualquier stack'</span></div>
        <div>&nbsp;&nbsp;],</div>
        <div>&nbsp;&nbsp;<span className="text-[#FF6B6B]">dogmas</span>: <span className="text-[#FF6B6B]">false</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#FF6B6B]">flexibility</span>: <span className="text-[#00E5A0]">true</span>,</div>
        <div>&nbsp;&nbsp;<span className="text-[#FF6B6B]">results</span>: <span className="text-[#00E5A0]">'guaranteed'</span></div>
        <div>{'}'}</div>
        <br/>
        <div className="text-[#F0F1F5]/25">// Tu proyecto en buenas manos.</div>
      </div>

    </div>
  </section>
);

export default Flexibility;
