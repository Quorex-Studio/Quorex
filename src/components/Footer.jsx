import React from 'react';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => (
  <footer className="bg-[#050507] relative overflow-hidden border-t-0">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent opacity-30" />

    {/* Giant Background Q */}
    <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 text-[40vw] font-bebas text-white/[0.02] leading-none pointer-events-none select-none z-0" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
      Q
    </div>

    <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="font-black text-4xl bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent inline-block mb-1" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>QUOREX</div>
          <div className="text-xs tracking-[0.2em] text-[#F0F1F5]/40 mb-4 font-semibold" style={{ fontFamily: "'JetBrains Mono',monospace" }}>STUDIO</div>
          <p className="text-base text-[#F0F1F5]/50 leading-relaxed max-w-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>Desarrollo web a la medida. Transformando ideas audaces en productos digitales de alto impacto. Código sin dogmas.</p>
        </div>
        <div>
          <h3 className="font-bold text-[#F0F1F5] mb-6 tracking-wide" style={{ fontFamily: "'Outfit',sans-serif" }}>Enlaces Rápidos</h3>
          <ul className="flex flex-col gap-3">
            {[['Servicios', 'servicios'], ['Stack', 'stack'], ['Proyectos', 'proyectos'], ['¿Por qué?', 'por-que'], ['Contacto', 'contacto']].map(([l, id]) => (
              <li key={id}>
                <button onClick={() => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm text-[#F0F1F5]/50 hover:text-[#00E5A0] transition-colors relative group font-medium" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  {l}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00E5A0] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[#F0F1F5] mb-6 tracking-wide" style={{ fontFamily: "'Outfit',sans-serif" }}>Contacto</h3>
          <a href={`mailto:${contactInfo.email}`} className="block text-sm text-[#F0F1F5]/50 hover:text-[#6C63FF] transition-colors mb-2 font-medium" style={{ fontFamily: "'Outfit',sans-serif" }}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone}`} className="block text-sm text-[#F0F1F5]/50 hover:text-[#FF6B6B] transition-colors mb-6 font-medium" style={{ fontFamily: "'Outfit',sans-serif" }}>{contactInfo.phone}</a>
          <div className="flex gap-3">
            {[[contactInfo.social.github, Github, '#6C63FF'], [contactInfo.social.linkedin, Linkedin, '#FF6B6B'], [contactInfo.social.twitter, Twitter, '#00E5A0']].map(([h, I, c], i) => (
              <a key={i} href={h} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#F0F1F5]/50 hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ hoverBackgroundColor: `${c}15`, hoverColor: c }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = `${c}15`; e.currentTarget.style.color = c; e.currentTarget.style.borderColor = c; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(240, 241, 245, 0.5)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; }}>
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#F0F1F5]/40 flex items-center gap-1.5" style={{ fontFamily: "'Outfit',sans-serif" }}>© {new Date().getFullYear()} Quorex Studio. Hecho con <Heart className="w-3 h-3 text-[#FF6B6B] fill-current animate-pulse" /> y código</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 text-xs font-semibold text-[#F0F1F5]/40 hover:text-[#00E5A0] transition-colors group" style={{ fontFamily: "'Outfit',sans-serif" }}>
          VOLVER ARRIBA <ArrowUp className="w-4 h-4 p-0.5 rounded-full bg-white/[0.05] group-hover:bg-[#00E5A0]/20 transition-colors" />
        </button>
      </div>
    </div>
  </footer>
);
export default Footer;
