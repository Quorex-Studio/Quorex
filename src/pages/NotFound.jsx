import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = '404 — Página no encontrada | Quorex Studio';
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Glitch Effect */}
        <div
          className="text-[clamp(8rem,20vw,16rem)] font-black leading-none mb-8 animate-glitch"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            background: 'linear-gradient(135deg, #6C63FF, #FF6B6B, #00E5A0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </div>

        <h1
          className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          Página no encontrada
        </h1>

        <p className="text-lg text-white/60 mb-12 max-w-lg mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
          La página que buscas no existe o ha sido movida. Volvamos al camino correcto.
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link
            to="/"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold hover:shadow-[0_12px_40px_rgba(108,99,255,0.45)] hover:-translate-y-1 transition-all duration-300"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-4 border-2 border-[#00E5A0] text-[#00E5A0] rounded-full font-semibold hover:bg-[#00E5A0] hover:text-[#050507] transition-all duration-300"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Página anterior
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">
            ENLACES RÁPIDOS
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'Servicios', path: '/#servicios' },
              { label: 'Proyectos', path: '/#proyectos' },
              { label: 'Precios', path: '/precios' },
              { label: 'Contacto', path: '/#contacto' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60 hover:text-white hover:border-[#6C63FF]/50 transition-all font-mono"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
