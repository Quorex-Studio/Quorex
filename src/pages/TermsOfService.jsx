import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Términos de Servicio | Quorex Studio';
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
            <FileText className="w-8 h-8 text-[#6C63FF]" />
            <h1
              className="text-[clamp(3rem,8vw,5rem)] font-black text-white uppercase"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Términos de Servicio
            </h1>
          </div>
          <p className="text-lg text-white/60" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Última actualización: Abril 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-white/70" style={{ fontFamily: "'Outfit', sans-serif" }}>
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
            <p className="leading-relaxed">
              Al acceder y utilizar los servicios de Quorex Studio, aceptas cumplir con estos Términos de Servicio. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Servicios Ofrecidos</h2>
            <p className="leading-relaxed">
              Quorex Studio ofrece servicios de desarrollo web y diseño digital, incluyendo pero no limitado a:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Desarrollo de E-Commerce</li>
              <li>Sistemas administrativos y dashboards</li>
              <li>Landing pages y sitios corporativos</li>
              <li>Catálogos digitales</li>
              <li>APIs y automatizaciones</li>
              <li>Plataformas SaaS</li>
              <li>Hosting y soporte técnico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Proceso de Contratación</h2>
            <div className="space-y-4">
              <p className="leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span><strong className="text-white">Consulta inicial:</strong> Nos contactas a través de nuestro formulario o medios directos para discutir tu proyecto.</span>
              </p>
              <p className="leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span><strong className="text-white">Propuesta:</strong> Te enviamos una cotización personalizada con alcance, timeline y precio.</span>
              </p>
              <p className="leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span><strong className="text-white">Pago inicial:</strong> 50% de anticipo para iniciar el proyecto.</span>
              </p>
              <p className="leading-relaxed flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span><strong className="text-white">Entrega:</strong> 50% restante contra entrega y aprobación final.</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Precios y Pagos</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#FF6B6B] mt-1 flex-shrink-0" />
                <span>Los precios de desarrollo son <strong className="text-white">estimados</strong> y serán confirmados por un asesor según los detalles del proyecto.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>Los precios de hosting son <strong className="text-white">fijos e innegociables</strong>.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>El dominio .com está incluido el primer año. Renovación anual: $15/año.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>Aceptamos transferencias bancarias, Stripe y criptomonedas.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Propiedad Intelectual</h2>
            <p className="leading-relaxed">
              <strong className="text-white">Código fuente:</strong> Una vez completado el pago total, el código fuente del proyecto es propiedad del cliente. Quorex Studio se reserva el derecho de reutilizar componentes genéricos y conocimientos adquiridos en otros proyectos.
            </p>
            <p className="mt-4">
              <strong className="text-white">Diseño y marca:</strong> Los diseños creados son propiedad del cliente. Quorex Studio puede mostrar el proyecto en su portafolio salvo acuerdo contrario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Garantía y Soporte</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>Incluimos <strong className="text-white">30 días de garantía</strong> sin costo para corrección de bugs.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>La garantía no cubre nuevas funcionalidades, cambios de diseño o problemas causados por modificaciones del cliente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00E5A0] mt-1 flex-shrink-0" />
                <span>Ofrecemos planes mensuales de soporte y mantenimiento continuado.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Hosting y Dominios</h2>
            <p className="leading-relaxed">
              El servicio de hosting es mensual e independiente al pago de desarrollo. Puedes cancelar en cualquier momento sin penalizaciones. Te entregamos el código fuente completo y el dominio para que puedas llevarlo a donde prefieras.
            </p>
            <p className="mt-4">
              Si el dominio no se renueva, vence y queda disponible para registro por terceros. Te avisamos con 30 días de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Limitación de Responsabilidad</h2>
            <p className="leading-relaxed">
              Quorex Studio no se hace responsable por:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Pérdidas de datos causadas por el cliente sin backups adecuados</li>
              <li>Problemas causados por modificaciones no autorizadas al código</li>
              <li>Servicios de terceros (hosting, dominios, APIs externas)</li>
              <li>Incumplimiento de plazos causados por demoras del cliente en proporcionar información o aprobaciones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Cancelación</h2>
            <p className="leading-relaxed">
              <strong className="text-white">Por el cliente:</strong> Puedes cancelar en cualquier momento. Se te entregará el trabajo realizado proporcionalmente al pago efectuado.
            </p>
            <p className="mt-4">
              <strong className="text-white">Por Quorex Studio:</strong> Nos reservamos el derecho de cancelar el servicio en caso de comportamiento abusivo, ilegal o violación de estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Ley Aplicable</h2>
            <p className="leading-relaxed">
              Estos términos se rigen por las leyes aplicables en Venezuela. Cualquier disputa será resuelta en los tribunales competentes.
            </p>
          </section>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">¿Tienes preguntas?</h3>
            <p className="text-white/60 mb-6">
              Si tienes dudas sobre estos términos, contáctanos antes de contratar nuestros servicios.
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

export default TermsOfService;
