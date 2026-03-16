import React from 'react';
import { Github, Linkedin, Twitter, Heart, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => (
  <footer className="bg-[#050507] border-t border-white/[0.08]">
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="font-black text-3xl bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] bg-clip-text text-transparent" style={{fontFamily:"'Bebas Neue',sans-serif"}}>QUOREX</div>
          <div className="text-xs tracking-[0.18em] text-[#F0F1F5]/40 mb-3" style={{fontFamily:"'JetBrains Mono',monospace"}}>STUDIO</div>
          <p className="text-sm text-[#F0F1F5]/50 leading-relaxed" style={{fontFamily:"'Outfit',sans-serif"}}>Desarrollo web a la medida. Transformando ideas en productos digitales de alto impacto.</p>
        </div>
        <div>
          <h3 className="font-semibold text-[#F0F1F5] mb-4" style={{fontFamily:"'Outfit',sans-serif"}}>Enlaces Rápidos</h3>
          <ul className="flex flex-col gap-2">
            {[['Servicios','servicios'],['Stack','stack'],['Proyectos','proyectos'],['¿Por qué?','por-que'],['Contacto','contacto']].map(([l,id]) => (
              <li key={id}><a href={`#${id}`} className="text-sm text-[#F0F1F5]/50 hover:text-[#6C63FF] transition-colors" style={{fontFamily:"'Outfit',sans-serif"}}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#F0F1F5] mb-4" style={{fontFamily:"'Outfit',sans-serif"}}>Contacto</h3>
          <a href={`mailto:${contactInfo.email}`} className="block text-sm text-[#F0F1F5]/50 hover:text-[#6C63FF] transition-colors mb-2" style={{fontFamily:"'Outfit',sans-serif"}}>{contactInfo.email}</a>
          <a href={`tel:${contactInfo.phone}`} className="block text-sm text-[#F0F1F5]/50 hover:text-[#FF6B6B] transition-colors mb-4" style={{fontFamily:"'Outfit',sans-serif"}}>{contactInfo.phone}</a>
          <div className="flex gap-2">
            {[[contactInfo.social.github,Github],[contactInfo.social.linkedin,Linkedin],[contactInfo.social.twitter,Twitter]].map(([h,I],i) => (
              <a key={i} href={h} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/10 flex items-center justify-center text-[#F0F1F5]/50 hover:border-[#6C63FF]/50 hover:text-[#6C63FF] transition-all"><I className="w-4 h-4" /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-7 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#F0F1F5]/40 flex items-center gap-1.5" style={{fontFamily:"'Outfit',sans-serif"}}>© {new Date().getFullYear()} Quorex Studio. Hecho con <Heart className="w-3 h-3 text-[#FF6B6B] fill-current" /> y código</p>
        <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })} className="flex items-center gap-1.5 text-xs text-[#F0F1F5]/40 hover:text-[#6C63FF] transition-colors" style={{fontFamily:"'Outfit',sans-serif"}}>Volver arriba <ArrowUp className="w-3.5 h-3.5" /></button>
      </div>
    </div>
  </footer>
);
export default Footer;
