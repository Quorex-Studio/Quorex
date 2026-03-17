import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ExternalLink } from 'lucide-react';
import { caseStudies } from '../data/mock';

const CaseStudyPage = () => {
  const { slug, projectSlug } = useParams();
  const navigate = useNavigate();
  const project = caseStudies.find(p => p.slug === projectSlug);
  const nextProjectData = project ? caseStudies.find(p => p.slug === project.nextProject) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-bebas text-white mb-4">Caso de estudio no encontrado</h2>
          <Link to={`/proyectos/${slug}`} className="text-[#6C63FF] font-mono flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Volver a {slug}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end px-6 pb-20 overflow-hidden">
        {/* Background Image/Gradient */}
        <div className="absolute inset-0 z-0">
          {project.heroImage ? (
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover brightness-[0.3]"
            />
          ) : (
            <div 
              className="w-full h-full opacity-30"
              style={{ background: `linear-gradient(135deg, ${project.color}, #050507)` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 reveal">
          <button 
            onClick={() => navigate(`/proyectos/${slug}`)}
            className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs mb-12 uppercase tracking-widest"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            VOLVER A {project.categoryTitle}
          </button>

          <span 
            className="inline-block px-3 py-1 rounded-full text-[10px] font-mono border mb-6 uppercase tracking-widest"
            style={{ 
              borderColor: `${project.color}40`, 
              color: project.color,
              backgroundColor: `${project.color}10`,
              fontFamily: "'JetBrains Mono',monospace"
            }}
          >
            {project.categoryTitle}
          </span>
          
          <h1 
            className="text-[clamp(4rem,10vw,9rem)] font-black text-white leading-[0.8] mb-6 uppercase"
            style={{ fontFamily: "'Bebas Neue',sans-serif" }}
          >
            {project.title}
          </h1>
          <p 
            className="text-xl md:text-3xl text-white/80 max-w-4xl font-outfit font-light leading-relaxed"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Grid Specs */}
      <section className="px-6 py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 reveal">
          <div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Cliente</div>
            <div className="text-lg text-white font-outfit">{project.client}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Año</div>
            <div className="text-lg text-white font-outfit">{project.year}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Timeline</div>
            <div className="text-lg text-white font-outfit">{project.timeline}</div>
          </div>
          <div>
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Categoría</div>
            <div className="text-lg text-white font-outfit">{project.categoryTitle}</div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-1 border-r border-white/5 hidden lg:block">
              <span className="text-sm font-mono text-white/10 [writing-mode:vertical-lr] rotate-180 uppercase tracking-[0.5em]">CASE STUDY</span>
            </div>
            
            <div className="lg:col-span-5 reveal">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-6xl font-bebas text-white/5">01</span>
                <h2 className="text-4xl font-bebas text-white tracking-wide uppercase">El Desafío</h2>
              </div>
              <p className="text-lg text-white/60 leading-relaxed font-outfit">
                {project.challenge}
              </p>
            </div>

            <div className="lg:col-span-5 reveal">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-6xl font-bebas text-white/5">02</span>
                <h2 className="text-4xl font-bebas text-white tracking-wide uppercase">La Solución</h2>
              </div>
              <p className="text-lg text-white/60 leading-relaxed font-outfit mb-12">
                {project.solution}
              </p>
              
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">Stack de Tecnologías</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <span 
                      key={tech} 
                      className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-mono"
                      style={{ fontFamily: "'JetBrains Mono',monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-6xl font-bebas text-white/5">03</span>
              <h2 className="text-4xl font-bebas text-white tracking-wide uppercase">Resultados</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16">
              <p className="text-2xl md:text-3xl text-white font-outfit font-light leading-relaxed italic">
                "{project.results}"
              </p>
            </div>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div className="reveal">
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-4xl font-bebas text-white tracking-wide uppercase">GALERÍA DEL PROYECTO</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className={`rounded-2xl overflow-hidden border border-white/5 ${idx % 3 === 0 ? 'md:col-span-2' : ''}`}>
                    <img src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="reveal">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-4xl font-bebas text-white tracking-wide uppercase">CARACTERÍSTICAS PRINCIPALES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  >
                    <Check size={18} />
                  </div>
                  <span className="text-lg text-white/80 font-outfit">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 reveal">
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/10"
            style={{ background: `linear-gradient(135deg, ${project.color}20, #0a0a0c)` }}
          >
            <div className="relative z-10 text-center">
              <h2 className="text-5xl md:text-7xl font-bebas text-white mb-8 tracking-wide uppercase">¿NECESITAS ALGO SIMILAR?</h2>
              <p className="text-xl text-white/50 max-w-2xl mx-auto font-outfit mb-12 leading-relaxed">
                Podemos desarrollar una solución a medida similar a esta para tu negocio. Hablemos sobre tus objetivos.
              </p>
              <a 
                href="#contacto"
                className="inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                COTIZAR PROYECTO
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <section className="px-6 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center reveal">
          <Link 
            to={`/proyectos/${slug}`}
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={16} /> VOLVER A {project.categoryTitle}
          </Link>

          {nextProjectData && (
            <Link 
              to={`/proyectos/${nextProjectData.category}/${nextProjectData.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                SIGUIENTE PROYECTO <ArrowRight size={12} />
              </div>
              <div className="text-2xl font-bebas text-white group-hover:text-[#6C63FF] transition-colors tracking-widest uppercase">
                {nextProjectData.title}
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
