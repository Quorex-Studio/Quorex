import React, { useState } from 'react';
import './Precios.css';

const devNames = {
  '150': 'Landing Page',
  '300': 'Página Corporativa',
  '350': 'Catálogo Digital',
  '500': 'E-commerce'
};

const hostNames = {
  '0':   'Sin hosting',
  '30':  'Plan Starter',
  '75':  'Plan Business',
  '120': 'Plan Enterprise'
};

const Precios = () => {
  const [dev, setDev] = useState(null);
  const [hosting, setHosting] = useState('0');
  const [extras, setExtras] = useState({
    db: false,
    rush: false,
    seo: false,
    multi: false
  });
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleExtraChange = (key) => {
    setExtras(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateTotalDev = () => {
    if (!dev) return 0;
    let total = parseInt(dev);
    if (extras.rush) total += 100;
    if (extras.seo) total += 80;
    if (extras.multi) total += 60;
    return total;
  };

  const calculateTotalHosting = () => {
    let total = parseInt(hosting);
    if (extras.db) total += 40;
    return total;
  };

  const getNote = () => {
    if (dev === '500' && !extras.db) {
      return <>💡 El e-commerce requiere base de datos. Te recomendamos añadir <span>Supabase Pro (+$40/mes)</span>.</>;
    } else if (hosting === '0') {
      return <>💡 Sin hosting tu sitio no estará disponible en internet. Puedes agregarlo después del desarrollo.</>;
    } else if (hosting === '30' && dev === '500') {
      return <>💡 Para e-commerce recomendamos el plan <span>Business</span> que incluye backups y mayor soporte.</>;
    } else {
      return <>✅ Todo listo. Contáctanos para confirmar los detalles y comenzar tu proyecto.</>;
    }
  };

  return (
    <div className="pricing-page pricing-page-container">
      <div className="hero">
        <div className="hero-glow"></div>
        <div className="hero-badge"><div className="bdot"></div>Precios transparentes · Sin sorpresas</div>
        <h1>Desarrollo <span>&amp;</span><br/>Hosting.</h1>
        <p className="hero-sub">Los planes de hosting tienen precios fijos. El costo de desarrollo es un estimado — un asesor confirmará el valor exacto según los detalles de tu proyecto.</p>
      </div>

      <div className="ticker-wrap">
        <div className="ticker">
          <span className="ticker-item"><span>✦</span>Precios aproximados · Sujetos a confirmación</span>
          <span className="ticker-item"><span>✦</span>Web Corporativa desde $300</span>
          <span className="ticker-item"><span>✦</span>E-commerce desde $500</span>
          <span className="ticker-item"><span>✦</span>Hosting desde $30/mes</span>
          <span className="ticker-item"><span>✦</span>Dominio .com incluido</span>
          <span className="ticker-item"><span>✦</span>SSL gratuito</span>
          <span className="ticker-item"><span>✦</span>Email corporativo disponible</span>
          <span className="ticker-item"><span>✦</span>Supabase incluido según plan</span>
          {/* Duplicate for infinite loop */}
          <span className="ticker-item"><span>✦</span>Precios aproximados · Sujetos a confirmación</span>
          <span className="ticker-item"><span>✦</span>Web Corporativa desde $300</span>
          <span className="ticker-item"><span>✦</span>E-commerce desde $500</span>
          <span className="ticker-item"><span>✦</span>Hosting desde $30/mes</span>
          <span className="ticker-item"><span>✦</span>Dominio .com incluido</span>
          <span className="ticker-item"><span>✦</span>SSL gratuito</span>
          <span className="ticker-item"><span>✦</span>Email corporativo disponible</span>
          <span className="ticker-item"><span>✦</span>Supabase incluido según plan</span>
        </div>
      </div>

      {/* CALCULADORA */}
      <section id="calc" className="section-padding">
        <div className="reveal visible">
          <div className="section-label">{"// 01 — Calculadora"}</div>
          <h2 className="section-title">¿Cuánto cuesta mi proyecto?</h2>
          <p className="section-desc text-center" style={{margin:'0 auto'}}>El precio de <strong style={{color:'#F0F1F5'}}>desarrollo es un estimado</strong> — un asesor lo confirmará. Los <strong style={{color:'#00E5A0'}}>planes de hosting son precios fijos</strong> e innegociables.</p>
        </div>

        <div className="notice reveal visible mt-10">
          <div className="notice-text">
            💡 <strong>¿Cómo funciona el precio?</strong> El desarrollo es un <strong>pago único</strong> por construir tu sitio.
            El hosting es un <strong>pago mensual separado</strong> para mantenerlo en línea con dominio, SSL y soporte incluidos.
            Son dos servicios independientes — puedes contratar solo el desarrollo y agregar hosting después.
          </div>
        </div>

        <div className="calc-grid reveal visible">
          <div className="calc-form">
            {/* DESARROLLO */}
            <div className="calc-group">
              <span className="calc-label">1. ¿Qué necesitas desarrollar?</span>
              <div className="calc-options">
                <label className={`calc-option hoverable ${dev === '150' ? 'sel' : ''}`}>
                  <input type="radio" name="dev" value="150" checked={dev === '150'} onChange={(e) => setDev(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Landing Page</div>
                    <div className="opt-desc">Una página de impacto para captar clientes. Diseño premium, animaciones y formulario de contacto.</div>
                  </div>
                  <div className="opt-price">$150</div>
                </label>

                <label className={`calc-option hoverable ${dev === '300' ? 'sel' : ''}`}>
                  <input type="radio" name="dev" value="300" checked={dev === '300'} onChange={(e) => setDev(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Página Corporativa</div>
                    <div className="opt-desc">Sitio completo con múltiples secciones, quiénes somos, servicios y contacto.</div>
                  </div>
                  <div className="opt-price">$300</div>
                </label>

                <label className={`calc-option hoverable ${dev === '350' ? 'sel' : ''}`}>
                  <input type="radio" name="dev" value="350" checked={dev === '350'} onChange={(e) => setDev(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Catálogo Digital</div>
                    <div className="opt-desc">Muestra tus productos con filtros y búsqueda avanzada. Sin carrito de compras.</div>
                  </div>
                  <div className="opt-price">$350</div>
                </label>

                <label className={`calc-option hoverable ${dev === '500' ? 'sel' : ''}`}>
                  <input type="radio" name="dev" value="500" checked={dev === '500'} onChange={(e) => setDev(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">E-commerce</div>
                    <div className="opt-desc">Tienda online completa con carrito, pagos integrados y panel de administración.</div>
                  </div>
                  <div className="opt-price">$500</div>
                </label>
              </div>
            </div>

            <div className="divider"></div>

            {/* HOSTING */}
            <div className="calc-group">
              <span className="calc-label">2. ¿Necesitas hosting mensual?</span>
              <div className="calc-options">
                <label className={`calc-option hoverable ${hosting === '0' ? 'sel' : ''}`}>
                  <input type="radio" name="hosting" value="0" checked={hosting === '0'} onChange={(e) => setHosting(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Sin hosting por ahora</div>
                    <div className="opt-desc">Solo el desarrollo. Puedes agregar hosting cuando lo necesites.</div>
                  </div>
                  <div className="opt-price muted">$0/mes</div>
                </label>

                <label className={`calc-option hoverable ${hosting === '30' ? 'sel' : ''}`}>
                  <input type="radio" name="hosting" value="30" checked={hosting === '30'} onChange={(e) => setHosting(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Starter — $30/mes</div>
                    <div className="opt-desc">Hosting Vercel + dominio .com + SSL. Para landing pages y webs corporativas.</div>
                  </div>
                  <div className="opt-price">$30/mes</div>
                </label>

                <label className={`calc-option hoverable ${hosting === '75' ? 'sel' : ''}`}>
                  <input type="radio" name="hosting" value="75" checked={hosting === '75'} onChange={(e) => setHosting(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Business ⭐ — $75/mes</div>
                    <div className="opt-desc">Starter + backups diarios + soporte 24h + monitoreo + email corporativo (5 cuentas Zoho).</div>
                  </div>
                  <div className="opt-price">$75/mes</div>
                </label>

                <label className={`calc-option hoverable ${hosting === '120' ? 'sel' : ''}`}>
                  <input type="radio" name="hosting" value="120" checked={hosting === '120'} onChange={(e) => setHosting(e.target.value)} />
                  <div className="opt-body">
                    <div className="opt-name">Enterprise — $120/mes</div>
                    <div className="opt-desc">Business + mantenimiento mensual + actualizaciones + SEO + email (10 cuentas) + soporte 4h.</div>
                  </div>
                  <div className="opt-price">$120/mes</div>
                </label>
              </div>
            </div>

            <div className="divider"></div>

            {/* EXTRAS */}
            <div className="calc-group">
              <span className="calc-label">3. ¿Extras? (opcional)</span>
              <div className="extras-grid">
                <label className={`calc-extra hoverable ${extras.db ? 'sel' : ''}`}>
                  <input type="checkbox" checked={extras.db} onChange={() => handleExtraChange('db')} />
                  <div className="extra-name">
                    Base de datos Supabase Pro
                    <div style={{fontSize:'0.76rem', color:'rgba(240,241,245,0.45)', marginTop:'2px'}}>Necesario para e-commerce, sistemas con login y datos de usuarios.</div>
                  </div>
                  <div className="extra-price">+$40/mes</div>
                </label>

                <label className={`calc-extra hoverable ${extras.rush ? 'sel' : ''}`}>
                  <input type="checkbox" checked={extras.rush} onChange={() => handleExtraChange('rush')} />
                  <div className="extra-name">
                    Entrega urgente (Rush)
                    <div style={{fontSize:'0.76rem', color:'rgba(240,241,245,0.45)', marginTop:'2px'}}>Prioridad máxima, entrega en la mitad del tiempo estimado.</div>
                  </div>
                  <div className="extra-price">+$100</div>
                </label>

                <label className={`calc-extra hoverable ${extras.seo ? 'sel' : ''}`}>
                  <input type="checkbox" checked={extras.seo} onChange={() => handleExtraChange('seo')} />
                  <div className="extra-name">
                    SEO inicial (setup completo)
                    <div style={{fontSize:'0.76rem', color:'rgba(240,241,245,0.45)', marginTop:'2px'}}>Meta tags, sitemap, Google Search Console y optimización básica.</div>
                  </div>
                  <div className="extra-price">+$80</div>
                </label>

                <label className={`calc-extra hoverable ${extras.multi ? 'sel' : ''}`}>
                  <input type="checkbox" checked={extras.multi} onChange={() => handleExtraChange('multi')} />
                  <div className="extra-name">
                    Idioma adicional (ES/EN)
                    <div style={{fontSize:'0.76rem', color:'rgba(240,241,245,0.45)', marginTop:'2px'}}>Versión del sitio en un segundo idioma.</div>
                  </div>
                  <div className="extra-price">+$60</div>
                </label>
              </div>
            </div>
          </div>

          {/* RESULTADO */}
          <div className="calc-result">
            {!dev ? (
              <div className="res-empty" id="res-empty">
                <span style={{fontSize:'2rem', display:'block', marginBottom:'0.75rem'}}>🧮</span>
                Selecciona un tipo de proyecto<br/>para ver el estimado de precio.
              </div>
            ) : (
              <div id="res-content">
                <div className="res-title">Estimado de precio</div>

                <div className="res-section">Desarrollo (pago único)</div>
                <div className="res-line">
                  <span className="res-name">{devNames[dev]}</span>
                  <span className="res-val">${dev}</span>
                </div>
                {extras.rush && <div className="res-line"><span className="res-name">Entrega urgente</span><span className="res-val">+$100</span></div>}
                {extras.seo && <div className="res-line"><span className="res-name">SEO inicial</span><span className="res-val">+$80</span></div>}
                {extras.multi && <div className="res-line"><span className="res-name">Idioma adicional</span><span className="res-val">+$60</span></div>}

                <div className="res-hr"></div>
                <div className="res-total-dev">
                  <span className="res-total-dev-label">Total desarrollo</span>
                  <span className="res-total-dev-val">${calculateTotalDev()}</span>
                </div>

                <div className="res-section">Hosting (mensual)</div>
                <div className="res-line">
                  <span className="res-name">{hostNames[hosting]}</span>
                  <span className={`res-val ${hosting === '0' ? 'zero' : ''}`}>${hosting}/mes</span>
                </div>
                {extras.db && <div className="res-line"><span className="res-name">Supabase Pro</span><span className="res-val">+$40/mes</span></div>}

                <div className="res-hr"></div>
                <div className="res-total-hosting">
                  <span className="res-hosting-label">Total mensual</span>
                  <span className="res-hosting-val">${calculateTotalHosting()}/mes</span>
                </div>

                <div className="res-note">{getNote()}</div>
                <a href="#cta-final" className="res-cta hoverable">Solicitar cotización →</a>
                <div style={{marginTop:'0.85rem', padding:'0.75rem', background:'rgba(255,107,107,0.06)', border:'1px solid rgba(255,107,107,0.2)', fontSize:'0.74rem', color:'rgba(240,241,245,0.55)', lineHeight:1.55, textAlign:'center', fontFamily:"'JetBrains Mono',monospace"}}>
                  ⚠️ El precio de desarrollo es estimado y será confirmado por un asesor.<br/>Los planes de hosting son <strong style={{color:'#00E5A0'}}>precios fijos e innegociables</strong>.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PLANES DE HOSTING */}
      <section id="plans" className="section-padding">
        <div className="reveal visible" style={{textAlign:'center', marginBottom:'0'}}>
          <div className="section-label" style={{justifyContent:'center'}}>{"// 02 — Hosting"}</div>
          <h2 className="section-title">Planes de hosting</h2>
          <p className="section-desc" style={{margin:'0 auto'}}>Servicio mensual independiente al desarrollo. Cancela cuando quieras.</p>
        </div>

        <div className="plans-note reveal visible mt-10">
          <strong>Precios fijos e innegociables.</strong> Los planes de hosting tienen un precio establecido que no varía. El desarrollo de tu sitio web es un costo separado y único — el estimado de la calculadora será confirmado por un asesor de Quorex Studio según los detalles de tu proyecto.
        </div>

        <div className="plans-grid reveal visible">
          {/* STARTER */}
          <div className="plan-card">
            <div className="plan-badge pb-basic">Starter</div>
            <div className="plan-name">Starter</div>
            <div className="plan-price" style={{color:'#F0F1F5'}}>$30<span>/mes</span></div>
            <div className="plan-period">~$360/año</div>
            <p className="plan-desc">Ideal para landing pages, webs corporativas y catálogos. Todo lo esencial para estar en línea.</p>
            <div className="plan-features">
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Hosting Vercel Edge Network</div>
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Dominio .com incluido (1 año)</div>
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Certificado SSL gratuito</div>
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Deploy automático desde GitHub</div>
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Soporte por email (48h)</div>
              <div className="pf off"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="6" x2="10" y2="6"/></svg></div>Backups automáticos</div>
              <div className="pf off"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="6" x2="10" y2="6"/></svg></div>Email corporativo</div>
            </div>
            <div className="plan-addon">➕ Email corporativo disponible: +$10/mes</div>
            <a href="#cta-final" className="plan-cta pc-out hoverable">Contratar →</a>
          </div>

          {/* BUSINESS */}
          <div className="plan-card featured">
            <div className="plan-badge pb-pop">⭐ Más popular</div>
            <div className="plan-name">Business</div>
            <div className="plan-price" style={{background:'linear-gradient(135deg,#6C63FF,#FF6B6B)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>$75<span style={{WebkitTextFillColor:'rgba(240,241,245,0.45)', fontSize:'0.95rem', fontWeight:'400'}}>/mes</span></div>
            <div className="plan-period">~$900/año · Hosting + email incluido</div>
            <p className="plan-desc">Para empresas que necesitan tranquilidad total. Email corporativo incluido para todo el equipo.</p>
            <div className="plan-features">
              <div className="pf"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Todo lo del plan Starter</div>
              <div className="pf"><div className="fc r"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Backups automáticos diarios</div>
              <div className="pf"><div className="fc r"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Soporte prioritario (24h)</div>
              <div className="pf"><div className="fc r"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Monitoreo de uptime 24/7</div>
              <div className="pf"><div className="fc r"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Reporte mensual de rendimiento</div>
              <div className="pf"><div className="fc r"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Email corporativo (hasta 5 cuentas Zoho)</div>
              <div className="pf off"><div className="fc p"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><line x1="2" y1="6" x2="10" y2="6"/></svg></div>Mantenimiento de contenido</div>
            </div>
            <div className="plan-addon">➕ Supabase Pro disponible: +$40/mes</div>
            <a href="#cta-final" className="plan-cta pc-solid hoverable">Contratar Business →</a>
          </div>

          {/* ENTERPRISE */}
          <div className="plan-card">
            <div className="plan-badge pb-prem">Enterprise</div>
            <div className="plan-name">Enterprise</div>
            <div className="plan-price" style={{color:'#00E5A0'}}>$120<span>/mes</span></div>
            <div className="plan-period">~$1,440/año · Todo incluido</div>
            <p className="plan-desc">Cero preocupaciones técnicas. Nos encargamos de todo para que tú te enfoques en tu negocio.</p>
            <div className="plan-features">
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Todo lo del plan Business</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Mantenimiento mensual incluido</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Actualizaciones de contenido</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Email corporativo (hasta 10 cuentas)</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Soporte inmediato (4h)</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Optimización SEO mensual</div>
              <div className="pf"><div className="fc g"><svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="2,6 5,9 10,3"/></svg></div>Supabase Pro incluido</div>
            </div>
            <a href="#cta-final" className="plan-cta pc-green hoverable">Contratar Enterprise →</a>
          </div>
        </div>
      </section>

      {/* INFRAESTRUCTURA */}
      <section id="includes" className="section-padding">
        <div className="reveal visible text-center">
          <div className="section-label">{"// 03 — Infraestructura"}</div>
          <h2 className="section-title">¿Qué usamos?</h2>
          <p className="section-desc" style={{margin:'0 auto'}}>La misma infraestructura que usan Notion, TikTok y Twitch. Solo lo mejor.</p>
        </div>
        <div className="inc-grid reveal visible">
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(108,99,255,0.12)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div className="inc-title">Vercel Edge Network</div>
            <div className="inc-desc">Tu sitio servido desde el servidor más cercano a tu cliente. Tiempos de carga menores a 100ms garantizados.</div>
          </div>
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(255,107,107,0.12)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <div className="inc-title">SSL &amp; Seguridad</div>
            <div className="inc-desc">Certificado SSL automático, HTTPS forzado y headers de seguridad configurados desde el día uno.</div>
          </div>
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(0,229,160,0.1)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <div className="inc-title">Deploy Automático</div>
            <div className="inc-desc">Cada cambio en el código se despliega automáticamente en segundos. Sin pasos manuales ni tiempo de inactividad.</div>
          </div>
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(108,99,255,0.12)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C63FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <div className="inc-title">Backups Diarios</div>
            <div className="inc-desc">Copias de seguridad automáticas cada 24 horas. Si algo falla, restauramos tu sitio en minutos.</div>
          </div>
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(255,107,107,0.12)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div className="inc-title">Monitoreo 24/7</div>
            <div className="inc-desc">Monitoreamos tu sitio en tiempo real. Si cae, somos los primeros en enterarnos y actuar.</div>
          </div>
          <div className="inc-item">
            <div className="inc-icon" style={{background:'rgba(0,229,160,0.1)'}}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="inc-title">Email Corporativo</div>
            <div className="inc-desc">nombre@tuempresa.com con Zoho Mail. Profesional, confiable y accesible desde cualquier dispositivo.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding">
        <div className="reveal visible" style={{textAlign:'center'}}>
          <div className="section-label">{"// 04 — FAQ"}</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        <div className="faq-list reveal visible">
          {[
            { q: '¿El desarrollo y el hosting se pagan juntos?', a: 'No. Son servicios separados. El desarrollo es un pago único por construir tu sitio. El hosting es un pago mensual para mantenerlo en línea. Puedes contratar solo el desarrollo y agregar hosting después.'},
            { q: '¿Necesito Supabase en mi proyecto?', a: 'Depende del proyecto. Para landing pages y webs corporativas simples, no es necesario. Para e-commerce, sistemas con login, catálogos con datos dinámicos o cualquier proyecto que requiera base de datos, sí se necesita Supabase Pro (+$40/mes).'},
            { q: '¿El dominio .com es mío?', a: 'Sí, el dominio queda registrado a tu nombre. Si decides cancelar el hosting, te lo transferimos sin ningún costo adicional.'},
            { q: '¿Puedo cancelar el hosting cuando quiera?', a: 'Sí, sin contratos ni penalizaciones. Cancelas cuando quieras. Te entregamos el código fuente completo y el dominio para que puedas llevarlo a donde prefieras.'},
            { q: '¿Cuánto tiempo tarda el desarrollo?', a: 'Landing page: 3-5 días. Página corporativa: 1-2 semanas. Catálogo digital: 1-2 semanas. E-commerce: 2-4 semanas. Con entrega urgente (Rush) el tiempo se reduce a la mitad.'}
          ].map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-q hoverable" onClick={() => toggleFaq(index)}>
                {faq.q}
                <span className="faq-icon">{faqOpen === index ? '×' : '+'}</span>
              </div>
              <div className={`faq-a ${faqOpen === index ? 'open' : ''}`}>
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta-final" className="section-padding">
        <div className="cta-box reveal visible">
          <h2>¿Listo para empezar?</h2>
          <p>Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas con una propuesta personalizada.</p>
          <div className="cta-btns">
            <a href="mailto:contacto@quorexstudio.com" className="btn-grad hoverable">Solicitar cotización →</a>
            <a href="/" className="btn-out hoverable">Ver proyectos</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Precios;
