import React from 'react';
import { Code2, HeadphonesIcon, Clock, Shield, Smartphone, TrendingUp } from 'lucide-react';
import { getLocalizedData } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = { Code2, HeadphonesIcon, Clock, Shield, Smartphone, TrendingUp };

const WhyQuorex = () => {
  const { language, t } = useLanguage();
  const localizedFeatures = getLocalizedData(language).features;

  return (
    <section id="por-que" className="py-24 px-6 bg-[#050507] relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#6C63FF]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#FF6B6B]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-14 reveal">
          <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t('why.tag')}</div>
          <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{t('why.title')}</h2>
          <p className="text-[#F0F1F5]/55 mt-3 max-w-2xl mx-auto" style={{ fontFamily: "'Outfit',sans-serif" }}>{t('why.intro')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F0F1F5]/08 reveal">
          {localizedFeatures.map(f => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.id} className="group relative bg-[#0a0a0c] p-8 hover:bg-[#111116] transition-all duration-500 overflow-hidden rounded-2xl border border-white/[0.04] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-fade-in" style={{ animationDelay: `${f.id * 150}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" style={{ background: f.color, boxShadow: `0 0 20px ${f.color}` }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(circle at top right, ${f.color}, transparent 70%)` }} />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                    {Icon && <Icon className="w-8 h-8" style={{ color: f.color }} />}
                  </div>
                  <h3 className="font-bebas text-2xl text-[#F0F1F5] mb-2 tracking-wide" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{f.title}</h3>
                  <p className="text-[#F0F1F5]/55 text-sm leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyQuorex;
