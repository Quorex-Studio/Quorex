import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Users, Calendar, Clock, Folder } from 'lucide-react';
import { getLocalizedData } from '../data/mock';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const localizedProjects = getLocalizedData(language).projects;
  
  const [projectIndex, setProjectIndex] = useState(-1);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const index = localizedProjects.findIndex(p => p.slug === slug);
    setProjectIndex(index);
  }, [slug, localizedProjects]);

  useEffect(() => {
    if (projectIndex !== -1) {
      document.title = `${localizedProjects[projectIndex].title} | Quorex Studio`;
    } else {
      document.title = "Quorex Studio | Desarrollo Web Premium";
    }
  }, [projectIndex, localizedProjects]);

  if (projectIndex === -1) {
    return (
      <div className="min-h-screen bg-[#050507] flex flex-col items-center justify-center text-white font-outfit">
        <h1 className="font-bebas text-6xl mb-4">404</h1>
        <p className="text-white/60 mb-8">{t('detail.not_found')}</p>
        <Link to="/" className="text-[#00E5A0] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> {t('detail.back_home')}
        </Link>
      </div>
    );
  }

  const project = localizedProjects[projectIndex];
  const nextProject = projectIndex < localizedProjects.length - 1 ? localizedProjects[projectIndex + 1] : null;
  const prevProject = projectIndex > 0 ? localizedProjects[projectIndex - 1] : null;

  return (
    <div className="bg-[#050507] min-h-screen text-[#F0F1F5] font-outfit selection:bg-[#6C63FF]/30">
      
      {/* Lightbox */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-[#050507]/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-fade-in"
          onClick={() => setLightboxImg(null)}
        >
          <button aria-label="Close Gallery" className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 p-2 rounded-full">
            <X className="w-6 h-6" />
          </button>
          <img src={lightboxImg} alt="Gallery view" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-16 overflow-hidden">
        {/* Background Image with Parallax & Tint */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 opacity-40 mix-blend-color" style={{ backgroundColor: project.color }} />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 relative z-10 animate-[fadeUp_0.8s_ease_both]">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group text-sm font-mono uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> {t('detail.back')}
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest bg-white/5 backdrop-blur-md" style={{ color: project.color }}>
              {project.category}
            </div>
          </div>
          
          <h1 className="font-bebas text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tight mb-6 drop-shadow-2xl">
            {project.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Metadata Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 mb-16 animate-[fadeUp_0.8s_0.2s_ease_both]">
          {[
            { labelKey: 'detail.client', value: project.client, icon: <Users size={16} /> },
            { labelKey: 'detail.year', value: project.year, icon: <Calendar size={16} /> },
            { labelKey: 'detail.timeline', value: project.timeline, icon: <Clock size={16} /> },
            { labelKey: 'detail.category', value: project.category, icon: <Folder size={16} /> }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-xs font-mono tracking-widest text-white/40 uppercase mb-2 flex items-center gap-2">
                <span className="opacity-50 grayscale">{item.icon}</span> {t(item.labelKey)}
              </div>
              <div className="text-lg font-semibold text-white/90">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8 space-y-16 animate-[fadeUp_0.8s_0.3s_ease_both]">
            
            {/* Storytelling Sections */}
            {[
              { titleKey: 'detail.challenge', content: project.challenge, num: '01' },
              { titleKey: 'detail.solution', content: project.solution, num: '02' },
              { titleKey: 'detail.results', content: project.results, num: '03' }
            ].map((section, i) => (
              <div key={i} className="relative">
                <div className="font-bebas text-6xl text-white/5 mb-[-2rem] ml-[-1rem] pointer-events-none select-none">
                  {section.num}
                </div>
                <h3 className="font-bebas text-4xl mb-6 flex items-center gap-4">
                  {t(section.titleKey)}
                  <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                </h3>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Gallery */}
            <div className="pt-8">
              <h3 className="text-sm font-mono tracking-widest text-[#6C63FF] uppercase mb-8">
                {t('detail.gallery')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, i) => (
                  <div 
                    key={i} 
                    className={`overflow-hidden rounded-xl bg-white/5 border border-white/5 cursor-zoom-in group ${i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}
                    onClick={() => setLightboxImg(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} screenshot ${i+1}`} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4 space-y-12 animate-[fadeUp_0.8s_0.4s_ease_both]">
            
            <div className="sticky top-32 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <h4 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-6">
                {t('detail.stack')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-[#050507] border border-white/10 rounded-lg text-sm text-white/70 font-mono transition-colors hover:bg-white/5 hover:border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* CTA specific to case studies */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#6C63FF]/20 to-[#FF6B6B]/10 border border-[#6C63FF]/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#6C63FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl uppercase font-bold" />
              <h4 className="font-bebas text-3xl mb-4 relative z-10">{t('detail.cta_title')}</h4>
              <p className="text-white/70 text-sm mb-6 relative z-10 font-light leading-relaxed">
                {t('detail.cta_subtitle')}
              </p>
              <button 
                onClick={() => navigate('/#contacto')}
                className="w-full py-3 bg-white text-black font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-[#00E5A0] transition-colors relative z-10"
              >
                {t('detail.cta_button')} <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-24 py-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          {prevProject ? (
            <Link to={`/proyecto/${prevProject.slug}`} className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-widest mb-1">{t('detail.prev')}</div>
                <div className="font-bebas text-2xl tracking-wide">{prevProject.title}</div>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/proyecto/${nextProject.slug}`} className="group flex items-center gap-4 text-white/50 hover:text-white transition-colors text-right">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest mb-1">{t('detail.next')}</div>
                <div className="font-bebas text-2xl tracking-wide">{nextProject.title}</div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ) : <div />}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
