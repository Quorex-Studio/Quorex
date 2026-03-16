import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Layers, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  // Scroll to top on mount / slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  // Parallax effect on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) {
          setParallaxY(window.scrollY * 0.35);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050507] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-bebas text-8xl text-[#F0F1F5] mb-4" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>404</h1>
          <p className="text-[#F0F1F5]/60 text-lg mb-8" style={{ fontFamily: "'Outfit',sans-serif" }}>Proyecto no encontrado</p>
          <Link to="/" className="px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold hoverable" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050507]">
      {/* ── Hero Banner ── */}
      <section ref={heroRef} className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%]"
          style={{ transform: `translateY(-${parallaxY}px)` }}
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover brightness-[0.35] saturate-75"
          />
          {/* Color tint */}
          <div
            className="absolute inset-0 mix-blend-color opacity-40"
            style={{ backgroundColor: project.color }}
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/60 to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 px-4 py-2 bg-[#050507]/50 backdrop-blur-md border border-white/10 rounded-full text-sm text-[#F0F1F5]/70 hover:text-[#F0F1F5] hover:border-[#6C63FF]/50 transition-all hoverable"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver
          </button>
        </div>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 z-10">
          <div className="max-w-7xl mx-auto">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-full mb-6 animate-[fadeUp_0.6s_ease_both]"
              style={{ borderColor: project.color + '60', color: project.color }}>
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-mono text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                {project.category}
              </span>
            </div>

            <h1 className="font-bebas text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] text-[#F0F1F5] mb-4 animate-[fadeUp_0.6s_0.1s_ease_both]"
              style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-[#F0F1F5]/70 max-w-2xl leading-relaxed animate-[fadeUp_0.6s_0.2s_ease_both]"
              style={{ fontFamily: "'Outfit',sans-serif" }}>
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6 animate-[fadeUp_0.6s_0.3s_ease_both]">
              {project.tags.map(t => (
                <span key={t} className="font-mono text-xs px-3 py-1.5 bg-white/[0.08] backdrop-blur-md border border-white/[0.1] text-white/80 rounded-full"
                  style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Metadata Strip ── */}
      <section className="border-b border-white/[0.06] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, label: "Cliente", value: project.client },
              { icon: Calendar, label: "Año", value: project.year },
              { icon: Clock, label: "Timeline", value: project.timeline },
              { icon: Layers, label: "Categoría", value: project.category },
            ].map((meta, i) => (
              <div key={i} className="reveal">
                <div className="flex items-center gap-2 mb-2">
                  <meta.icon className="w-4 h-4 text-[#6C63FF]" />
                  <span className="font-mono text-xs text-[#F0F1F5]/40 tracking-[0.1em] uppercase" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
                    {meta.label}
                  </span>
                </div>
                <p className="text-[#F0F1F5] font-medium text-base" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  {meta.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack Used ── */}
      <section className="border-b border-white/[0.06] bg-[#050507]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          <h3 className="font-mono text-xs text-[#6C63FF] tracking-[0.15em] uppercase mb-5" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
            {'// Stack Utilizado'}
          </h3>
          <div className="flex flex-wrap gap-3">
            {project.stack.map(tech => (
              <span key={tech} className="px-4 py-2 bg-[#F0F1F5]/[0.04] border border-white/[0.08] rounded-lg text-sm text-[#F0F1F5]/80 hover:border-[#6C63FF]/40 hover:bg-[#6C63FF]/[0.06] transition-all duration-300"
                style={{ fontFamily: "'Outfit',sans-serif" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Storytelling: Challenge / Solution / Results ── */}
      <section className="py-20 md:py-28 bg-[#050507]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {[
              { num: "01", title: "El Desafío", text: project.challenge, color: "#FF6B6B" },
              { num: "02", title: "La Solución", text: project.solution, color: "#6C63FF" },
              { num: "03", title: "Resultados", text: project.results, color: "#00E5A0" },
            ].map((block, i) => (
              <div key={i} className="reveal group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-bebas text-4xl leading-none" style={{ color: block.color, fontFamily: "'Bebas Neue',sans-serif" }}>
                    {block.num}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <h3 className="font-bebas text-3xl text-[#F0F1F5] mb-4 tracking-wide" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
                  {block.title}
                </h3>
                <p className="text-[#F0F1F5]/60 leading-relaxed text-base" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-24 bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="font-mono text-xs text-[#6C63FF] tracking-[0.15em] uppercase mb-8" style={{ fontFamily: "'JetBrains Mono',monospace" }}>
            {'// Galería del Proyecto'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className="group relative aspect-video rounded-xl overflow-hidden border border-white/[0.04] hover:border-[#6C63FF]/30 transition-all duration-500 hoverable"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-white/80" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] bg-[#050507]/95 backdrop-blur-xl flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease_both] cursor-pointer"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />
          <button className="absolute top-8 right-8 text-[#F0F1F5]/60 hover:text-[#F0F1F5] text-2xl font-bold transition-colors">
            ✕
          </button>
        </div>
      )}

      {/* ── CTA Section ── */}
      <section className="py-20 bg-[#050507] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bebas text-5xl md:text-6xl text-[#F0F1F5] mb-4" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>
            ¿Necesitas algo similar?
          </h2>
          <p className="text-[#F0F1F5]/60 text-lg mb-8" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Hablemos sobre tu proyecto. Te ayudamos a transformar tu idea en un producto digital de alto impacto.
          </p>
          <Link
            to="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold text-base hover:shadow-[0_12px_40px_rgba(108,99,255,0.45)] hover:-translate-y-1 transition-all duration-300 hoverable"
            style={{ fontFamily: "'Outfit',sans-serif" }}
          >
            Cotizar Proyecto <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ── Prev / Next Navigation ── */}
      <section className="border-t border-white/[0.06] bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
          {/* Prev */}
          <div className="group">
            {prevProject ? (
              <Link to={`/proyecto/${prevProject.slug}`} className="flex items-center gap-4 p-8 md:p-12 hover:bg-white/[0.02] transition-colors hoverable">
                <ArrowLeft className="w-5 h-5 text-[#F0F1F5]/40 group-hover:text-[#6C63FF] group-hover:-translate-x-1 transition-all" />
                <div>
                  <span className="font-mono text-xs text-[#F0F1F5]/40 tracking-[0.1em] uppercase block mb-1" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Anterior</span>
                  <span className="font-bebas text-2xl text-[#F0F1F5] group-hover:text-[#6C63FF] transition-colors" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div className="p-8 md:p-12">
                <Link to="/" className="flex items-center gap-2 text-[#F0F1F5]/40 hover:text-[#6C63FF] transition-colors hoverable" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  <ArrowLeft className="w-4 h-4" /> Volver al inicio
                </Link>
              </div>
            )}
          </div>
          {/* Next */}
          <div className="group">
            {nextProject ? (
              <Link to={`/proyecto/${nextProject.slug}`} className="flex items-center justify-end gap-4 p-8 md:p-12 hover:bg-white/[0.02] transition-colors hoverable text-right">
                <div>
                  <span className="font-mono text-xs text-[#F0F1F5]/40 tracking-[0.1em] uppercase block mb-1" style={{ fontFamily: "'JetBrains Mono',monospace" }}>Siguiente</span>
                  <span className="font-bebas text-2xl text-[#F0F1F5] group-hover:text-[#6C63FF] transition-colors" style={{ fontFamily: "'Bebas Neue',sans-serif" }}>{nextProject.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-[#F0F1F5]/40 group-hover:text-[#6C63FF] group-hover:translate-x-1 transition-all" />
              </Link>
            ) : (
              <div className="p-8 md:p-12 text-right">
                <Link to="/" className="inline-flex items-center gap-2 text-[#F0F1F5]/40 hover:text-[#6C63FF] transition-colors hoverable" style={{ fontFamily: "'Outfit',sans-serif" }}>
                  Volver al inicio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
