import React from 'react';
import { ArrowUpRight, ShoppingCart, BarChart2, Rocket, BookOpen, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectCategories } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  ecommerce: ShoppingCart,
  dashboard: BarChart2,
  landing: Rocket,
  catalogo: BookOpen,
  plataforma: Layers
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="proyectos" className="py-24 px-6 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4 reveal">
          <div>
            <div className="text-xs font-mono tracking-[0.14em] uppercase text-[#6C63FF] mb-3" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t('projects.tag')}</div>
            <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-[#F0F1F5] leading-none" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{t('projects.title')}</h2>
          </div>
          <a href="#contacto" className="px-5 py-2.5 border border-[#F0F1F5]/15 text-[#F0F1F5]/65 hover:border-[#6C63FF]/50 hover:text-[#6C63FF] transition-all text-sm font-mono hoverable" style={{ fontFamily: "'JetBrains Mono',monospace" }}>{t('common.start_project')}</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {projectCategories.map((cat) => {
            const Icon = iconMap[cat.slug] || Layers;
            
            return (
              <Link
                key={cat.id}
                to={`/proyectos/${cat.slug}`}
                className="group relative bg-[#0a0a0c] p-8 rounded-2xl border border-white/[0.04] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] block overflow-hidden"
                style={{ '--hover-color': cat.color }}
              >
                {/* Hover border glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 rounded-2xl" 
                  style={{ borderColor: cat.color, boxShadow: `inset 0 0 20px ${cat.color}20, 0 0 20px ${cat.color}20` }}
                />

                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: `${cat.color}15`, color: cat.color }}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bebas text-4xl text-white tracking-wide" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{cat.title}</h3>
                    {cat.projectCount > 0 ? (
                      <span 
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider"
                        style={{ backgroundColor: `${cat.color}20`, color: cat.color, border: `1px solid ${cat.color}30`, fontFamily: "'JetBrains Mono',monospace" }}
                      >
                        {cat.projectCount} {cat.projectCount === 1 ? 'PROYECTO' : 'PROYECTOS'}
                      </span>
                    ) : (
                      <span 
                        className="font-mono text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider bg-white/5 text-white/40 border border-white/10"
                        style={{ fontFamily: "'JetBrains Mono',monospace" }}
                      >
                        Próximamente
                      </span>
                    )}
                  </div>

                  <p className="text-base text-white/60 leading-relaxed font-outfit mb-6" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    {cat.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0" style={{ color: cat.color, fontFamily: "'JetBrains Mono',monospace" }}>
                    <span>Ver proyectos</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
