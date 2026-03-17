import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Check, Layers } from 'lucide-react';
import { categoryDetails, caseStudies } from '../data/mock';

const CategoryPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const category = categoryDetails[slug];
  const projects = caseStudies.filter(p => p.category === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#050507] flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-bebas text-white mb-4">Categoría no encontrada</h2>
          <Link to="/" className="text-[#6C63FF] font-mono flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Volver al Inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050507] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm mb-12"
          style={{ fontFamily: "'JetBrains Mono',monospace" }}
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          VOLVER A PROYECTOS
        </button>

        {/* Header */}
        <div className="mb-20 reveal">
          <span 
            className="inline-block px-3 py-1 rounded-full text-[10px] font-mono border mb-6 uppercase tracking-widest"
            style={{ 
              borderColor: `${category.color}40`, 
              color: category.color,
              backgroundColor: `${category.color}10`,
              fontFamily: "'JetBrains Mono',monospace"
            }}
          >
            Categoría
          </span>
          <h1 
            className="text-[clamp(4rem,10vw,8rem)] font-black text-white leading-[0.9] mb-6 uppercase"
            style={{ fontFamily: "'Bebas Neue',sans-serif" }}
          >
            {category.title}
          </h1>
          <p 
            className="text-xl md:text-2xl text-white/70 max-w-3xl font-outfit leading-relaxed"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            {category.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 py-12 border-y border-white/5 reveal">
          <div>
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Servicio</div>
            <div className="text-lg text-white font-outfit">{category.title}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Stack Principal</div>
            <div className="flex flex-wrap gap-2">
              {category.stack.map(s => (
                <span key={s} className="text-white/80 font-outfit">{s}{s !== category.stack[category.stack.length-1] ? ' · ' : ''}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Proyectos Realizados</div>
            <div className="text-lg text-white font-outfit">{projects.length} Casos de éxito</div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 reveal">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-bebas text-white/10">01</span>
              <h2 className="text-4xl font-bebas text-white tracking-wide">EL DESAFÍO</h2>
            </div>
            <p className="text-lg text-white/60 leading-relaxed font-outfit">
              {category.challenge}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-bebas text-white/10">02</span>
              <h2 className="text-4xl font-bebas text-white tracking-wide">LA SOLUCIÓN</h2>
            </div>
            <p className="text-lg text-white/60 leading-relaxed font-outfit mb-8">
              {category.solution}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.stack.map(tech => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50 font-mono"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bebas text-white mb-12 tracking-wide reveal">PROYECTOS EN ESTA CATEGORÍA</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-[#0a0a0c] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 reveal"
                >
                  {/* Project image/gradient */}
                  <div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#1a1a1f] to-[#0a0a0c]">
                    {project.heroImage ? (
                      <img 
                        src={project.heroImage} 
                        alt={project.title} 
                        className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{ background: `linear-gradient(45deg, ${category.color}, transparent)` }}
                      />
                    )}
                    <div className="absolute top-6 left-6">
                      <span 
                        className="px-3 py-1 rounded-full text-[10px] font-mono border uppercase"
                        style={{ 
                          borderColor: `${category.color}40`, 
                          color: category.color,
                          backgroundColor: `${category.color}10`,
                          fontFamily: "'JetBrains Mono',monospace"
                        }}
                      >
                        {project.categoryTitle}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-4xl font-bebas text-white mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-white/40" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                          <span>{project.client}</span>
                          <span className="text-white/10">|</span>
                          <span>{project.year}</span>
                          <span className="text-white/10">|</span>
                          <span>{project.timeline}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {project.features.slice(0, 4).map(feat => (
                        <div key={feat} className="flex items-start gap-2 text-sm text-white/60 font-outfit">
                          <Check size={14} className="mt-1 text-[#00E5A0]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-[10px] font-mono text-white/20 uppercase tracking-wider">{tech}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
                      <Link 
                        to={`/proyectos/${slug}/${project.slug}`}
                        className="flex items-center gap-2 text-white hover:text-white transition-opacity font-mono text-xs uppercase tracking-widest group/btn"
                        style={{ fontFamily: "'JetBrains Mono',monospace" }}
                      >
                        VER CASO DE ESTUDIO
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest"
                          style={{ fontFamily: "'JetBrains Mono',monospace" }}
                        >
                          VER EN VIVO
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div 
                className="col-span-full p-12 rounded-3xl border-2 border-dashed border-white/5 flex flex-col items-center justify-center text-center reveal"
                style={{ borderColor: `${category.color}20` }}
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
                  style={{ backgroundColor: `${category.color}10`, color: category.color }}
                >
                  <Layers size={40} />
                </div>
                <h3 className="text-3xl font-bebas text-white mb-4">¿QUIERES SER EL PRIMERO?</h3>
                <p className="text-white/50 max-w-md font-outfit mb-8">
                  Aún no tenemos proyectos de {category.title} publicados. El tuyo podría ser el primero en esta sección.
                </p>
                <a 
                  href="#contacto"
                  className="px-8 py-4 rounded-full font-mono text-sm uppercase tracking-widest transition-all hover:scale-105"
                  style={{ backgroundColor: category.color, color: '#000' }}
                >
                  COTIZAR PROYECTO
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#0a0a0c] rounded-[2rem] p-12 md:p-20 text-center border border-white/5 reveal">
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-8 tracking-wide">
            ¿NECESITAS UN/UNA {category.title.toUpperCase()}?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-outfit">
            Hablemos sobre tu proyecto y cómo podemos ayudarte a llevarlo al siguiente nivel con tecnología de vanguardia.
          </p>
          <a 
            href="#contacto"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-mono text-sm uppercase tracking-widest hover:bg-white/90 transition-all hover:scale-105"
            style={{ fontFamily: "'JetBrains Mono',monospace" }}
          >
            COTIZAR PROYECTO
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
