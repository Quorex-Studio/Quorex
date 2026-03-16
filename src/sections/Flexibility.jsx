import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const faqs = [
  { id: 1, q: 'flex.faq_1_q', a: 'flex.faq_1_a' },
  { id: 2, q: 'flex.faq_2_q', a: 'flex.faq_2_a' },
  { id: 3, q: 'flex.faq_3_q', a: 'flex.faq_3_a' },
];

const Flexibility = () => {
  const [open, setOpen] = useState(1);
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-[#0a0a0c] border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#00E5A0] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t('flex.tag')}</div>
            <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none mb-8" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{t('flex.title')}</h2>
            
            <div className="space-y-6 text-xl text-[#F0F1F5]/70 font-light" style={{ fontFamily: "'Outfit',sans-serif" }}>
              <p>
                {t('flex.content_1')} <span className="font-bold text-[#00E5A0]">{t('flex.content_1_highlight')}</span>
              </p>
              <p>
                {t('flex.content_2')} <span className="font-bold text-[#FF6B6B]">{t('flex.content_2_highlight')}</span>
              </p>
            </div>

            <a href="#contacto" className="inline-flex items-center gap-3 mt-10 text-[#00E5A0] font-mono tracking-wide hover:gap-5 transition-all duration-300 group hoverable" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
              {t('flex.cta')} <ArrowRight className="w-5 h-5 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="space-y-3 reveal">
            {faqs.map(f => (
              <div 
                key={f.id} 
                className={`bg-[#050507] border transition-all duration-500 rounded-xl overflow-hidden ${open === f.id ? 'border-[#00E5A0]/50 shadow-[0_10px_30px_rgba(0,229,160,0.1)]' : 'border-white/[0.04] hover:border-white/[0.1]'}`}
              >
                <button 
                  className="w-full text-left px-8 py-6 flex justify-between items-center group cursor-pointer hoverable"
                  onClick={() => setOpen(open === f.id ? null : f.id)}
                >
                  <span className={`font-bebas text-2xl md:text-3xl tracking-wide transition-colors ${open === f.id ? 'text-[#00E5A0]' : 'text-[#F0F1F5] group-hover:text-white'}`} style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
                    {t(f.q)}
                  </span>
                  <ChevronRight className={`w-6 h-6 transition-transform duration-500 ${open === f.id ? 'rotate-90 text-[#00E5A0]' : 'text-white/30 group-hover:text-white'}`} />
                </button>
                <div 
                  className="px-8 overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: open === f.id ? '200px' : '0px', opacity: open === f.id ? 1 : 0 }}
                >
                  <p className="pb-6 text-[#F0F1F5]/60 font-outfit text-base leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    {t(f.a)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Flexibility;
