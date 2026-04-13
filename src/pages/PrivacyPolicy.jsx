import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad | Quorex Studio';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm mb-12"
        >
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-[#6C63FF]" />
            <h1
              className="text-[clamp(3rem,8vw,5rem)] font-black text-white uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Política de Privacidad
            </h1>
          </div>
          <p className="text-lg text-white/60" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Última actualización: Abril 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-white/70" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Información que Recopilamos</h2>
            <p className="leading-relaxed">
              En Quorex Studio recopilamos información que nos proporcionas directamente a través de nuestro formulario de contacto, incluyendo:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Nombre y/o empresa</li>
              <li>Dirección de correo electrónico</li>
              <li>Servicio de interés</li>
              <li>Presupuesto estimado</li>
              <li>Detalles del proyecto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Cómo Usamos tu Información</h2>
            <p className="leading-relaxed">
              Utilizamos la información recopilada exclusivamente para:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Responder a tus consultas y solicitudes</li>
              <li>Preparar propuestas y cotizaciones personalizadas</li>
              <li>Mejorar nuestros servicios y experiencia de usuario</li>
              <li>Enviar comunicaciones relacionadas con tu proyecto (solo con tu consentimiento)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cookies y Analíticas</h2>
            <p className="leading-relaxed">
              Utilizamos Google Tag Manager y cookies para analizar el tráfico y mejorar la experiencia de usuario. Estas herramientas recopilan información anónima sobre tu visita, incluyendo:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Tipo de navegador y dispositivo</li>
              <li>País de origen de la visita</li>
              <li>Interacciones con el sitio (clics, scroll, formularios)</li>
            </ul>
            <p className="mt-4">
              Puedes configurar tu navegador para rechazar cookies. Esto no afectará tu capacidad para usar nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Protección de Datos</h2>
            <p className="leading-relaxed flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Compartir Información</h2>
            <p className="leading-relaxed">
              <strong className="text-white">No vendemos, intercambiamos ni transferimos</strong> tu información personal a terceros. Solo compartimos información con proveedores de servicios que nos ayudan a operar nuestro sitio (como Google Analytics), bajo estrictos acuerdos de confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Tus Derechos</h2>
            <p className="leading-relaxed flex items-start gap-3">
              <Eye className="w-5 h-5 text-[#6C63FF] mt-1 flex-shrink-0" />
              Tienes derecho a acceder, rectificar, eliminar y portar tus datos personales. Para ejercer estos derechos, contáctanos en:
            </p>
            <a
              href="mailto:michael.rafael03@gmail.com"
              className="inline-flex items-center gap-2 mt-4 text-[#6C63FF] hover:text-[#FF6B6B] transition-colors font-semibold"
            >
              <Mail className="w-4 h-4" />
              michael.rafael03@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Retención de Datos</h2>
            <p className="leading-relaxed">
              Conservamos tu información mientras sea necesario para los propósitos descritos en esta política, o según lo requiera la ley aplicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Cambios a esta Política</h2>
            <p className="leading-relaxed">
              Podemos actualizar esta política periódicamente. Cualquier cambio será publicado en esta página con una fecha de "última actualización" revisada.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes preguntas?</h3>
            <p className="text-white/60 mb-6">
              Si tienes dudas sobre esta política de privacidad, no dudes en contactarnos.
            </p>
            <Link
              to="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] text-white rounded-full font-semibold hover:shadow-lg transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
