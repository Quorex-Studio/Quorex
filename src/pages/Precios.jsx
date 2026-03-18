import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Rocket, 
  Activity, 
  Mail, 
  ChevronDown, 
  ArrowLeft,
  Check,
  X,
  Lock,
  History,
  Star,
  Globe,
  ShoppingCart,
  Cpu
} from 'lucide-react';
import './Precios.css';

const QuorexLogo = () => (
  <svg viewBox="0 0 120 120" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="qg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6C63FF" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
      <mask id="qm">
        <rect width="120" height="120" fill="white" />
        <path d="M 65 61 L 88 84 L 65 107" fill="none" stroke="black" strokeWidth="24" strokeLinejoin="miter" strokeLinecap="butt" />
      </mask>
    </defs>
    <circle cx="50" cy="50" r="32" fill="none" stroke="url(#qg)" strokeWidth="14" mask="url(#qm)" />
    <path d="M 65 61 L 88 84 L 65 107" fill="none" stroke="url(#qg)" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="butt" />
  </svg>
);

// Static Data Moved Outside to avoid useEffect dependency issues
const devOptions = [
  { id: 'landing', name: 'Landing Page', price: 150, desc: 'Una página de impacto para captar clientes.' },
  { id: 'corp', name: 'Página Corporativa', price: 300, desc: 'Sitio completo con múltiples secciones.' },
  { id: 'catalog', name: 'Catálogo Digital', price: 350, desc: 'Muestra tus productos sin carrito de compras.' },
  { id: 'ecommerce', name: 'E-commerce', price: 500, desc: 'Tienda online con carrito, pagos y panel admin.' },
  { id: 'erp', name: 'Sistema Administrativo / ERP', price: 800, desc: 'Dashboard, CRM o sistema a la medida.' },
  { id: 'saas', name: 'SaaS / Plataforma', price: 1500, desc: 'Plataforma completa con suscripciones y roles.' }
];

const hostingOptions = [
  { id: 'none', name: 'Sin hosting por ahora', price: 0, desc: 'Solo el desarrollo. Puedes agregar hosting después.' },
  { id: 'starter', name: 'Starter', price: 30, desc: 'Hosting + dominio .com* + SSL. Ideal para landings.' },
  { id: 'business', name: 'Business', price: 75, desc: 'Starter + backups + soporte 24h + email (5 cuentas).' },
  { id: 'enterprise', name: 'Enterprise', price: 120, desc: 'Business + mantenimiento + SEO + email (10 cuentas).' }
];

const extraOptions = [
  { id: 'supabase', name: 'Supabase Pro', price: 40, type: 'monthly', desc: 'Base de datos para e-commerce/sistemas' },
  { id: 'email', name: 'Email corporativo', price: 10, type: 'monthly', desc: 'Solo plan Starter' },
  { id: 'seo', name: 'SEO inicial', price: 80, type: 'once', desc: 'Setup completo' },
  { id: 'rush', name: 'Entrega urgente / Rush', price: 100, type: 'once', desc: 'Prioridad máxima' },
  { id: 'multi', name: 'Idioma adicional ES/EN', price: 60, type: 'once', desc: 'Versión bilingüe' }
];

const Precios = () => {
  const [dev, setDev] = useState('landing');
  const [hosting, setHosting] = useState('starter');
  const [extras, setExtras] = useState({
    supabase: false,
    email: false,
    seo: false,
    rush: false,
    multi: false
  });

  const [prices, setPrices] = useState({
    dev: 150,
    host: 30,
    extraDev: 0,
    extraHost: 0
  });

  const [faqOpen, setFaqOpen] = useState(null);

  useEffect(() => {
    const selectedDev = devOptions.find(o => o.id === dev);
    const selectedHost = hostingOptions.find(o => o.id === hosting);
    
    let extraOnce = 0;
    if (extras.seo) extraOnce += 80;
    if (extras.rush) extraOnce += 100;
    if (extras.multi) extraOnce += 60;

    let extraMonthly = 0;
    if (extras.supabase) extraMonthly += 40;
    if (extras.email && hosting === 'starter') extraMonthly += 10;

    setPrices({
      dev: selectedDev.price,
      host: selectedHost.price,
      extraDev: extraOnce,
      extraHost: extraMonthly
    });
  }, [dev, hosting, extras]);

  // Reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const totalDev = prices.dev + prices.extraDev;
  const totalHost = prices.host + prices.extraHost;

  const notes = [];
  if ((dev === 'ecommerce' || dev === 'erp') && !extras.supabase) {
    notes.push({ type: 'warning', text: 'El proyecto seleccionado requiere base de datos. Añade Supabase Pro +$40/mes.' });
  }
  if (dev === 'saas' && hosting !== 'enterprise') {
    notes.push({ type: 'info', text: 'Para SaaS recomendamos el plan Enterprise que incluye Supabase Pro.' });
  }
  if (hosting === 'none') {
    notes.push({ type: 'info', text: 'Sin hosting tu sitio no estará disponible en internet.' });
  }
  if (dev === 'landing' && hosting === 'none') {
    notes.push({ type: 'info', text: 'Te recomendamos el plan Starter — ideal para landing pages.' });
  }

  return (
    <div className="pricing-page">
      {/* SECCIÓN 1 — NAV FIJO */}
      <nav className="pricing-nav">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <QuorexLogo />
            <div className="leading-none text-left">
              <div className="font-black text-[#F0F1F5] text-base tracking-wide" style={{fontFamily:"'Bebas Neue',sans-serif"}}>QUOREX</div>
              <div className="text-[0.45rem] tracking-[0.18em] text-[#F0F1F5]/40 uppercase" style={{fontFamily:"'JetBrains Mono',monospace"}}>Studio</div>
            </div>
          </div>
          <a href="/" className="back-link">
            <ArrowLeft size={14} /> {"← Volver al sitio"}
          </a>
        </div>
        <a href="#calc" className="cta-btn">Cotizar</a>
      </nav>

      {/* SECCIÓN 2 — HERO */}
      <section className="hero-section">
        <div className="hero-glow"></div>
        <div className="reveal">
          <div className="badge-anim">
            <div className="pulse-dot"></div>
            {"Precios en USD · Actualizados 2026"}
          </div>
          <h1>DESARROLLO &<br/>HOSTING.</h1>
          <p className="hero-sub">Precios transparentes. Sin sorpresas. El desarrollo es un pago único, el hosting es mensual.</p>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-container">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="ticker-item">Landing Page $150</span>
              <span className="ticker-item">Página Corporativa $300</span>
              <span className="ticker-item">Catálogo Digital $350</span>
              <span className="ticker-item">E-commerce $500</span>
              <span className="ticker-item">Sistema ERP $800</span>
              <span className="ticker-item">SaaS $1,500</span>
              <span className="ticker-item">Hosting Starter $30/mes</span>
              <span className="ticker-item">Business $75/mes</span>
              <span className="ticker-item">Enterprise $120/mes</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* SECCIÓN 3 — AVISO IMPORTANTE */}
      <section className="calc-section">
        <div className="reveal">
          <div className="bg-[#0a0a0c] border border-white/10 border-l-4 border-l-[#6C63FF] p-8 rounded-2xl mb-20">
            <h3 className="text-xl mb-4 flex items-center gap-3">
              <span className="text-2xl">💡</span> ¿Cómo funcionan los precios?
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-white/50 leading-relaxed">
              <div className="space-y-4">
                <p>El <strong className="text-white">DESARROLLO</strong> es un pago único por construir tu sitio web.</p>
                <p>El <strong className="text-white">HOSTING</strong> es un pago mensual separado para mantenerlo en línea.</p>
                <p>Los precios de hosting son <strong className="text-[#00E5A0]">FIJOS E INNEGOCIABLES</strong>.</p>
                <p>El precio de desarrollo es un estimado — un asesor de Quorex Studio confirmará el valor exacto según los detalles de tu proyecto.</p>
              </div>
              <div className="space-y-4">
                <p>El dominio .com está incluido el primer año en todos los planes de hosting. A partir del segundo año se factura una renovación anual de $15.</p>
                <p>El dominio está sujeto a disponibilidad. Si el .com que deseas ya está registrado, te ofrecemos alternativas: .net, .co, .store u .online al mismo precio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 4 — CALCULADORA INTERACTIVA */}
        <div id="calc" className="calc-grid reveal">
          <div className="calc-form">
            {/* Paso 1 */}
            <div className="calc-step">
              <span className="step-label">{"// Paso 1"}</span>
              <h3>¿Qué necesitas desarrollar?</h3>
              <div className="radio-cards">
                {devOptions.map(opt => (
                  <div 
                    key={opt.id} 
                    className={`radio-card ${dev === opt.id ? 'selected' : ''}`}
                    onClick={() => setDev(opt.id)}
                  >
                    <div className="info">
                      <div className="name">{opt.name}</div>
                      <div className="desc">{opt.desc}</div>
                    </div>
                    <div className="price">${opt.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paso 2 */}
            <div className="calc-step">
              <span className="step-label">{"// Paso 2"}</span>
              <h3>¿Necesitas hosting mensual?</h3>
              <div className="radio-cards">
                {hostingOptions.map(opt => (
                  <div 
                    key={opt.id} 
                    className={`radio-card ${hosting === opt.id ? 'selected' : ''}`}
                    onClick={() => setHosting(opt.id)}
                  >
                    <div className="info">
                      <div className="name">{opt.name}</div>
                      <div className="desc">{opt.desc}</div>
                    </div>
                    <div className="price">{opt.price === 0 ? '$0/mes' : `$${opt.price}/mes`}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paso 3 */}
            <div className="calc-step">
              <span className="step-label">{"// Paso 3"}</span>
              <h3>Extras opcionales</h3>
              <div className="checkbox-cards">
                {extraOptions.map(opt => (
                  <div 
                    key={opt.id} 
                    className={`checkbox-card ${extras[opt.id] ? 'selected' : ''}`}
                    onClick={() => setExtras(prev => ({ ...prev, [opt.id]: !prev[opt.id] }))}
                  >
                    <div className="check-box">
                      {extras[opt.id] && <Check size={14} />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{opt.name}</div>
                      <div className="text-xs text-white/40">{opt.desc}</div>
                    </div>
                    <div className="text-sm font-mono text-[#00E5A0]">
                      +{opt.price}{opt.type === 'monthly' ? '/mes' : ' único'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RESULTADO STICKY */}
          <div className="result-panel">
            <h4>ESTIMADO DE PRECIO</h4>
            
            <div className="res-sec">
              <div className="res-sec-title">— DESARROLLO (pago único) —</div>
              <div className="res-line">
                <span className="name">{devOptions.find(o => o.id === dev)?.name}</span>
                <span>${prices.dev}</span>
              </div>
              {extras.rush && <div className="res-line"><span className="name">Rush</span><span>+$100</span></div>}
              {extras.seo && <div className="res-line"><span className="name">SEO inicial</span><span>+$80</span></div>}
              {extras.multi && <div className="res-line"><span className="name">Idioma adicional</span><span>+$60</span></div>}
              
              <div className="res-total">
                <span className="label">Total desarrollo</span>
                <span className="value total-dev-val">${totalDev}</span>
              </div>
            </div>

            <div className="res-sec">
              <div className="res-sec-title">— HOSTING (mensual) —</div>
              <div className="res-line">
                <span className="name">Plan {hostingOptions.find(o => o.id === hosting)?.name}</span>
                <span>${prices.host}/mes</span>
              </div>
              {extras.supabase && <div className="res-line"><span className="name">Supabase Pro</span><span>+$40/mes</span></div>}
              {extras.email && hosting === 'starter' && <div className="res-line"><span className="name">Email corporativo</span><span>+$10/mes</span></div>}
              
              <div className="res-total">
                <span className="label">Total mensual</span>
                <span className="value total-host-val">${totalHost}/mes</span>
              </div>
            </div>

            <div className="res-note">
              <p>📌 Dominio incluido el 1er año · Sujeto a disponibilidad</p>
              <p className="mt-1 opacity-50">Renovación: $15/año a partir del segundo año</p>
            </div>

            {notes.map((note, i) => (
              <div key={i} className={`smart-note ${note.type === 'warning' ? 'text-[#FF6B6B]' : 'text-blue-400'}`}>
                {note.type === 'warning' ? '⚠️' : '💡'} {note.text}
              </div>
            ))}

            <button
              className="res-btn"
              onClick={() => {
                const contactSection = document.getElementById('contacto');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#contacto';
                }
              }}
            >
              Solicitar cotización →
            </button>
            
            <div className="text-[10px] text-white/30 text-center mt-6 uppercase tracking-wider leading-relaxed">
              ⚠️ El precio de desarrollo es estimado y será confirmado por un asesor. Los planes de hosting son precios FIJOS e innegociables.
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — PLANES DE HOSTING */}
      <section className="hosting-section">
        <div className="reveal text-center mb-20">
          <div className="badge-anim border-[#00E5A0]/20 text-[#00E5A0]">
            {"✦ Precios fijos e innegociables"}
          </div>
          <p className="text-white/50 max-w-2xl mx-auto mt-4">Servicio mensual independiente al desarrollo. Cancela cuando quieras sin penalizaciones.</p>
        </div>

        <div className="plans-grid reveal">
          {/* STARTER */}
          <div className="plan-card">
            <div className="text-xs font-mono text-white/30 mb-4 tracking-[0.2em] uppercase">Starter</div>
            <div className="price">$30<span>/mes</span></div>
            <ul className="features-list">
              <li><Check size={16} className="text-[#00E5A0]" /> Hosting Vercel Edge Network</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Protección y CDN Cloudflare</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Dominio incluido (1er año)*</li>
              <li><Check size={16} className="text-[#00E5A0]" /> SSL gratuito y automático</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Deploy automático desde GitHub</li>
              <li className="no"><X size={16} /> Backups automáticos</li>
              <li className="no"><X size={16} /> Email corporativo</li>
            </ul>
            <div className="mt-auto pt-8 text-xs text-[#00E5A0] font-mono">➕ Email corporativo: +$10/mes</div>
          </div>

          {/* BUSINESS */}
          <div className="plan-card business">
            <div className="text-xs font-mono text-[#6C63FF] mb-4 tracking-[0.2em] uppercase flex justify-between">
              Business <span>⭐ POPULAR</span>
            </div>
            <div className="price">$75<span>/mes</span></div>
            <ul className="features-list">
              <li><Check size={16} className="text-[#00E5A0]" /> Todo lo del plan Starter</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Cloudflare incluido (DDoS Protection)</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Backups automáticos diarios</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Soporte prioritario (24h)</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Monitoreo uptime 24/7</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Zoho Mail (5 cuentas)</li>
              <li className="no"><X size={16} /> SEO mensual</li>
            </ul>
            <div className="mt-auto pt-8 text-xs text-white/50 font-mono">➕ Supabase Pro: +$40/mes</div>
          </div>

          {/* ENTERPRISE */}
          <div className="plan-card">
            <div className="text-xs font-mono text-white/30 mb-4 tracking-[0.2em] uppercase">Enterprise</div>
            <div className="price">$120<span>/mes</span></div>
            <ul className="features-list">
              <li><Check size={16} className="text-[#00E5A0]" /> Todo lo del plan Business</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Full Cloudflare WAF & Optimization</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Mantenimiento mensual</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Zoho Mail (10 cuentas)</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Soporte inmediato (4h)</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Optimización SEO mensual</li>
              <li><Check size={16} className="text-[#00E5A0]" /> Supabase Pro incluido</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — COMBOS SUGERIDOS */}
      <section className="calc-section">
        <div className="reveal mb-12">
          <span className="step-label">{"// Combos sugeridos"}</span>
          <h2 className="font-bebas text-4xl mt-2">SOLUCIONES COMPLETAS</h2>
        </div>
        
        <div className="combos-container reveal">
          {[
            { icon: <Rocket size={20} />, title: 'Landing Starter', dev: 'Landing Page', host: 'Starter', price: 180, next: 30 },
            { icon: <Star size={20} />, title: 'Landing Business', dev: 'Landing Page', host: 'Business', price: 225, next: 75 },
            { icon: <Globe size={20} />, title: 'Web Corporativa', dev: 'Pág. Corporativa', host: 'Starter', price: 330, next: 30 },
            { icon: <ShoppingCart size={20} />, title: 'E-commerce Completo', dev: 'E-commerce', host: 'Business + DB', price: 615, next: 115 },
            { icon: <Cpu size={20} />, title: 'Sistema Pro', dev: 'ERP', host: 'Enterprise', price: 920, next: 120 }
          ].map((c, i) => (
            <div key={i} className="combo-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#6C63FF]">{c.icon}</div>
                <div className="text-xl font-bebas tracking-wide">{c.title}</div>
              </div>
              <div className="text-sm text-white/50 mb-6">{c.dev} + Hosting {c.host}</div>
              <div className="space-y-1">
                <div className="text-xl font-bold">Mes 1: ${c.price}</div>
                <div className="text-[#00E5A0] font-mono text-xs">Siguientes: ${c.next}/mes</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 7 — INFRAESTRUCTURA */}
      <section className="calc-section bg-[#0a0a0c]">
        <div className="grid md:grid-cols-3 gap-8 reveal">
          {[
            { icon: <Zap />, title: 'Vercel Edge Network', desc: 'Tiempos de carga menores a 100ms garantizados.' },
            { icon: <Lock />, title: 'SSL & Seguridad', desc: 'Certificado SSL automático y HTTPS forzado.' },
            { icon: <Rocket />, title: 'Deploy Automático', desc: 'Cada cambio se despliega en segundos automáticamente.' },
            { icon: <History />, title: 'Backups Diarios', desc: 'Copias de seguridad cada 24h con restauración en minutos.' },
            { icon: <Activity />, title: 'Monitoreo 24/7', desc: 'Sistemas de alerta en tiempo real ante cualquier caída.' },
            { icon: <Mail />, title: 'Email Corporativo', desc: 'Profesionalismo con Zoho Mail en todos tus dispositivos.' }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="text-[#6C63FF] mb-6">{item.icon}</div>
              <div className="font-semibold mb-3">{item.title}</div>
              <div className="text-sm text-white/40 leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 8 — FAQ */}
      <section className="calc-section">
        <div className="reveal text-center mb-16">
          <span className="step-label">{"// Preguntas frecuentes"}</span>
          <h2 className="font-bebas text-5xl mt-4">RESOLVEMOS TUS DUDAS</h2>
        </div>
        
        <div className="faq-list reveal">
          {[
            { q: '¿El desarrollo y el hosting se pagan juntos?', a: 'No. Son servicios completamente separados. El desarrollo es un pago único por construir tu sitio. El hosting es un pago mensual para mantenerlo en línea. Puedes contratar solo el desarrollo y agregar hosting después cuando lo necesites.' },
            { q: '¿Los precios de hosting son negociables?', a: 'No. Los planes de hosting tienen precios fijos establecidos que no varían. Lo que sí puede ajustarse es el precio de desarrollo según la complejidad específica de tu proyecto — un asesor te confirmará el valor exacto.' },
            { q: '¿Necesito Supabase en mi proyecto?', a: 'Depende del proyecto. Para landing pages y webs corporativas simples no es necesario. Para e-commerce, sistemas administrativos, plataformas con login o cualquier proyecto que requiera base de datos, sí se necesita Supabase Pro (+$40/mes). La calculadora te avisa automáticamente.' },
            { q: '¿El dominio .com es mío para siempre?', a: 'Sí. El dominio queda registrado a tu nombre desde el primer día. Está incluido el primer año en todos los planes de hosting. A partir del segundo año la renovación cuesta $15/año — te avisamos con 30 días de anticipación.' },
            { q: '¿Qué pasa si el dominio .com que quiero no está disponible?', a: 'Es más común de lo que parece. En ese caso te ofrecemos alternativas: .net, .co, .store, .online, .ve. Todas al mismo precio de renovación ($15/año). Si el dominio es premium, el precio puede variar.' },
            { q: '¿Qué pasa si no renuevo el dominio?', a: 'Si el dominio no se renueva vence y queda disponible para que cualquier persona lo registre. Por eso te avisamos con 30 días de anticipación. La renovación es opcional — si ya no necesitas el sitio simplemente no la realizas. Una vez vencido recuperarlo puede ser más costoso o imposible.' },
            { q: '¿Puedo cancelar el hosting cuando quiera?', a: 'Sí, sin contratos ni penalizaciones. Cancelas cuando quieras. Te entregamos el código fuente completo y el dominio para que puedas llevarlo a donde prefieras.' },
            { q: '¿Cuánto tiempo tarda el desarrollo?', a: 'Landing Page: 3-5 días · Corporativa: 1-2 semanas · Catálogo: 1-2 semanas · E-commerce: 2-4 semanas · ERP: 4-6 semanas · SaaS: 6-10 semanas. Con Rush el tiempo se reduce a la mitad.' }
          ].map((item, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                {item.q}
                <ChevronDown className={`transition-transform ${faqOpen === i ? 'rotate-180' : ''}`} />
              </div>
              <div className={`faq-a ${faqOpen === i ? 'open' : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 9 — CTA FINAL */}
      <section className="final-cta">
        <div className="cta-glow"></div>
        <div className="reveal">
          <h2 className="font-bebas text-7xl mb-6">¿LISTO PARA EMPEZAR?</h2>
          <p className="text-white/50 max-w-xl mx-auto mb-10 text-lg">Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="res-btn !mt-0 !w-auto !px-12"
              onClick={() => { window.location.href = '/#contacto'; }}
            >
              Solicitar cotización →
            </button>
            <a href="/" className="px-12 items-center flex border border-white/10 rounded-full text-sm font-mono hover:bg-white/5 transition-colors">Ver proyectos</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 10 — FOOTER */}
      <footer className="calc-section !py-12 border-top border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white/30 text-xs font-mono">
          © 2026 Quorex Studio · Todos los derechos reservados
        </div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="/" className="hover:text-[#6C63FF] transition-colors">Inicio</a>
          <a href="/#contact" className="hover:text-[#6C63FF] transition-colors">Contacto</a>
        </div>
      </footer>
    </div>
  );
};

export default Precios;
