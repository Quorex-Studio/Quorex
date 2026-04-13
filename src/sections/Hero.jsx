import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const canvasRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let raf;
    let particles = [];
    let isRunning = true;

    // Use requestIdleCallback or setTimeout fallback to defer heavy initialization
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas || !isRunning) return;
      const ctx = canvas.getContext('2d');
      let W = canvas.width = window.innerWidth;
      let H = canvas.height = window.innerHeight;
      const COLORS = [[108, 99, 255], [255, 107, 107], [0, 229, 160]];
      const N = 90; // Reducing slightly or keeping same, deferring is the key

      class P {
        constructor() { this.reset(); }
        reset() {
          this.x = Math.random() * W;
          this.y = Math.random() * H;
          this.size = Math.random() * 1.8 + 0.4;
          this.vx = (Math.random() - 0.5) * 0.4;
          this.vy = (Math.random() - 0.5) * 0.4;
          this.alpha = Math.random() * 0.5 + 0.15;
          this.color = COLORS[Math.floor(Math.random() * 3)];
        }
        update() {
          this.x += this.vx; this.y += this.vy;
          if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
        }
        draw() {
          ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.alpha})`;
          ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
        }
      }

      particles = Array.from({ length: N }, () => new P());

      const animate = () => {
        if (!isRunning) return;
        ctx.clearRect(0, 0, W, H);
        particles.forEach((p, i) => {
          p.update(); p.draw();
          for (let j = i + 1; j < N; j++) {
            const dx = p.x - particles[j].x, dy = p.y - particles[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 130) {
              ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - d / 130)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
            }
          }
        });
        raf = requestAnimationFrame(animate);
      };

      // Start animation loop
      raf = requestAnimationFrame(animate);

      const onResize = () => {
        if (canvas) {
          W = canvas.width = window.innerWidth;
          H = canvas.height = window.innerHeight;
        }
      };

      window.addEventListener('resize', onResize);

      // Cleanup resize listener specific to exactly this closure
      return () => window.removeEventListener('resize', onResize);
    };

    // Defer initialization
    let cleanupResize = null;
    const idleCallbackId = (window.requestIdleCallback || window.setTimeout)(() => {
      cleanupResize = initCanvas();
    }, { timeout: 2000 });

    return () => {
      isRunning = false;
      if (window.cancelIdleCallback && window.requestIdleCallback) {
        window.cancelIdleCallback(idleCallbackId);
      } else {
        clearTimeout(idleCallbackId);
      }
      cancelAnimationFrame(raf);
      if (cleanupResize) cleanupResize();
    };
  }, []);

  // Lazy load hero image
  useEffect(() => {
    const preloadImages = () => {
      const images = ['/images/manojitos-dashboard.png'];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    if (window.requestIdleCallback) {
      window.requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 1000);
    }
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050507] px-6 text-center pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050507]/40 to-[#050507] z-[1]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#00E5A0]/50 text-[#00E5A0] px-5 py-2.5 rounded-full mb-8 animate-[fadeUp_0.8s_ease_both] shadow-[0_0_20px_rgba(0,229,160,0.2)] hover:shadow-[0_0_30px_rgba(0,229,160,0.4)] transition-shadow">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase font-semibold">{t('hero.badge')}</span>
        </div>

        {/* Title */}
        <h1 className="font-bebas text-[clamp(6rem,20vw,16rem)] leading-[0.85] tracking-tight text-[#F0F1F5] animate-[fadeUp_0.8s_0.1s_ease_both] hover:animate-glitch transition-all duration-300 w-full"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          QUOREX
        </h1>
        <div className="font-bebas text-[clamp(2.5rem,8vw,6rem)] leading-none tracking-[0.1em] bg-gradient-to-r from-[#6C63FF] via-[#FF6B6B] to-[#00E5A0] bg-clip-text text-transparent animate-[fadeUp_0.8s_0.15s_ease_both]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          STUDIO
        </div>

        {/* Tagline */}
        <p className="text-[clamp(1.1rem,2.5vw,1.4rem)] text-[#F0F1F5]/85 mt-5 animate-[fadeUp_0.8s_0.2s_ease_both]"
          style={{ fontFamily: "'Outfit', sans-serif" }}>
          {t('hero.tagline')}
        </p>
        <p className="text-base text-[#F0F1F5]/55 mt-3 max-w-xl mx-auto leading-relaxed animate-[fadeUp_0.8s_0.25s_ease_both]"
          style={{ fontFamily: "'Outfit', sans-serif" }}>
          {t('hero.description')}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 items-center justify-center mt-8 animate-[fadeUp_0.8s_0.3s_ease_both]">
          <button onClick={() => scrollTo('proyectos')}
            className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold text-base hover:shadow-[0_12px_40px_rgba(108,99,255,0.45)] hover:-translate-y-1 transition-all duration-300 hoverable"
            style={{ fontFamily: "'Outfit', sans-serif" }}>
            {t('hero.cta_projects')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={() => scrollTo('contacto')}
            className="px-7 py-3.5 border-2 border-[#00E5A0] text-[#00E5A0] rounded-full font-semibold text-base hover:bg-[#00E5A0] hover:text-[#050507] transition-all duration-300 hoverable"
            style={{ fontFamily: "'Outfit', sans-serif" }}>
            {t('hero.cta_quote')}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-[#F0F1F5]/10 animate-[fadeUp_0.8s_0.4s_ease_both]">
          {[
            { num: '4', color: '#6C63FF', label: 'Proyectos en producción' },
            { num: '3', color: '#FF6B6B', label: 'Clientes satisfechos' },
            { num: '100%', color: '#00E5A0', label: 'Código a la medida' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black leading-none" style={{ color: s.color, fontFamily: "'Bebas Neue', sans-serif" }}>{s.num}</div>
              <div className="text-xs tracking-[0.1em] uppercase text-[#F0F1F5]/50 mt-1" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#6C63FF]/50 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-[#6C63FF] rounded-full animate-[scroll-dot_2s_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
