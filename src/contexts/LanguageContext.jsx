import React, { createContext, useContext, useState, useEffect } from 'react';

// Español translations (Default)
const es = {
  // Navigation
  "nav.services": "Servicios",
  "nav.stack": "Stack",
  "nav.projects": "Proyectos",
  "nav.why": "¿Por qué?",
  "nav.pricing": "Precios",
  "nav.contact": "Contacto",
  "nav.quote": "Cotizar",

  // Hero
  "hero.badge": "Desarrollo Web Premium",
  "hero.tagline": "Diseño. Desarrollo. Resultados.",
  "hero.description": "Transformamos ideas en productos digitales de alto impacto. Código a la medida, sin plantillas.",
  "hero.cta_projects": "Ver Proyectos",
  "hero.cta_quote": "Cotizar Proyecto",
  "hero.stats_projects": "Proyectos",
  "hero.stats_clients": "Clientes",
  "hero.stats_satisfaction": "Satisfacción",

  // Sections Common
  "common.available": "Disponible para nuevos proyectos",
  "common.start_project": "Iniciar proyecto →",
  "common.view_study": "Ver caso de estudio",
  
  // Services
  "services.tag": "// 01 — Nuestros Servicios",
  "services.title": "SOLUCIONES DIGITALES",
  
  // TechStack
  "stack.tag": "// 02 — Tecnologías",
  "stack.title": "STACK TECNOLÓGICO",
  "stack.desc": "Herramientas modernas y probadas en producción. Sin compromisos.",
  "stack.m_uptime": "Uptime garantizado",
  "stack.m_response": "Tiempo de Respuesta",
  "stack.m_security": "Puntaje de Seguridad",
  "stack.m_delivery": "Tiempo promedio entrega",
  "stack.footer": "Y otras 15+ tecnologías dominadas internamente...",

  // Projects
  "projects.tag": "// 03 — Proyectos",
  "projects.title": "TRABAJO SELECCIONADO",

  // Why Quorex
  "why.tag": "// 04 — ¿Por qué Quorex?",
  "why.title": "NUESTRA DIFERENCIA",
  "why.intro": "No somos una agencia tradicional. Somos tu departamento de ingeniería externo. Construimos software escalable, seguro y estéticamente superior.",

  // Flexibility
  "flex.tag": "// 05 — Flexibilidad",
  "flex.title": "CÓMO TRABAJAMOS",
  "flex.content_1": "Nos adaptamos a las necesidades de tu negocio. Si necesitas desarrollo continuo, actuamos como",
  "flex.content_1_highlight": "tu equipo in-house.",
  "flex.content_2": "Si necesitas un proyecto cerrado, entregamos con",
  "flex.content_2_highlight": "tiempos y costes fijos.",
  "flex.cta": "Agendar Diagnóstico",
  
  "flex.faq_1_q": "¿Cuánto tiempo toma un proyecto típico?",
  "flex.faq_1_a": "Depende de la complejidad. Una Landing Page toma 1-2 semanas, un E-Commerce 3-4 semanas, y un Sistema SaaS o CRM de 6 a 12 semanas. Siempre establecemos un cronograma claro desde el día 1.",
  "flex.faq_2_q": "¿Ofrecen mantenimiento después del lanzamiento?",
  "flex.faq_2_a": "Sí. Incluimos 30 días de garantía sin costo por bugs. Además, ofrecemos planes mensuales de soporte, hosting gestionado y desarrollo continuo.",
  "flex.faq_3_q": "¿Cuál es la forma de pago?",
  "flex.faq_3_a": "Trabajamos con un anticipo del 50% para iniciar, y el 50% restante a contra-entrega tras tu aprobación final. Aceptamos transferencias, Stripe y criptomonedas.",

  // Contact
  "contact.tag": "// 06 — Contacto",
  "contact.title": "HABLEMOS SOBRE TU PROYECTO",
  "contact.subtitle": "Cuéntanos sobre tu idea. Te responderemos en menos de 24 horas con una propuesta de valor.",
  "contact.name_placeholder": "Tu nombre o empresa",
  "contact.email_placeholder": "correo@ejemplo.com",
  "contact.service_placeholder": "¿Qué servicio te interesa?",
  "contact.budget_placeholder": "Presupuesto estimado",
  "contact.details_placeholder": "Cuéntanos los detalles de tu proyecto...",
  "contact.submit": "Enviar Mensaje",
  "contact.direct": "Contacto directo",
  "contact.location": "Remoto, Global",

  // Footer
  "footer.rights": "Todos los derechos reservados.",
  
  // Project Detail
  "detail.back": "Volver",
  "detail.not_found": "Proyecto no encontrado",
  "detail.back_home": "Volver al inicio",
  "detail.client": "Cliente",
  "detail.year": "Año",
  "detail.timeline": "Timeline",
  "detail.category": "Categoría",
  "detail.stack": "// Stack Utilizado",
  "detail.challenge": "El Desafío",
  "detail.solution": "La Solución",
  "detail.results": "Resultados",
  "detail.gallery": "// Galería del Proyecto",
  "detail.cta_title": "¿Necesitas algo similar?",
  "detail.cta_subtitle": "Hablemos sobre tu proyecto. Te ayudamos a transformar tu idea en un producto digital de alto impacto.",
  "detail.cta_button": "Cotizar Proyecto",
  "detail.prev": "Anterior",
  "detail.next": "Siguiente",
  
  // Preloader
  "preloader.connecting": "CONECTANDO AL SERVIDOR"
};

// English translations
const en = {
  // Navigation
  "nav.services": "Services",
  "nav.stack": "Stack",
  "nav.projects": "Projects",
  "nav.why": "Why us?",
  "nav.pricing": "Pricing",
  "nav.contact": "Contact",
  "nav.quote": "Get Quote",

  // Hero
  "hero.badge": "Premium Web Development",
  "hero.tagline": "Design. Development. Results.",
  "hero.description": "We transform ideas into high-impact digital products. Custom code, no templates.",
  "hero.cta_projects": "View Projects",
  "hero.cta_quote": "Start a Project",
  "hero.stats_projects": "Projects",
  "hero.stats_clients": "Clients",
  "hero.stats_satisfaction": "Satisfaction",

  // Sections Common
  "common.available": "Available for new projects",
  "common.start_project": "Start your project →",
  "common.view_study": "View case study",
  
  // Services
  "services.tag": "// 01 — Our Services",
  "services.title": "DIGITAL SOLUTIONS",
  
  // TechStack
  "stack.tag": "// 02 — Technologies",
  "stack.title": "TECHNOLOGY STACK",
  "stack.desc": "Modern and production-tested tools. No compromises.",
  "stack.m_uptime": "Guaranteed Uptime",
  "stack.m_response": "Response Time",
  "stack.m_security": "Security Score",
  "stack.m_delivery": "Average Delivery Time",
  "stack.footer": "And 15+ other technologies mastered internally...",

  // Projects
  "projects.tag": "// 03 — Projects",
  "projects.title": "SELECTED WORK",

  // Why Quorex
  "why.tag": "// 04 — Why Quorex?",
  "why.title": "OUR DIFFERENCE",
  "why.intro": "We are not a traditional agency. We are your external engineering department. We build scalable, secure, and aesthetically superior software.",

  // Flexibility
  "flex.tag": "// 05 — Flexibility",
  "flex.title": "HOW WE WORK",
  "flex.content_1": "We adapt to your business needs. If you need continuous development, we act as",
  "flex.content_1_highlight": "your in-house team.",
  "flex.content_2": "If you need a closed project, we deliver with",
  "flex.content_2_highlight": "fixed times and costs.",
  "flex.cta": "Schedule Discovery",
  
  "flex.faq_1_q": "How long does a typical project take?",
  "flex.faq_1_a": "It depends on complexity. A Landing Page takes 1-2 weeks, an E-Commerce 3-4 weeks, and a SaaS/CRM System from 6 to 12 weeks. We always set a clear timeline from day 1.",
  "flex.faq_2_q": "Do you offer post-launch maintenance?",
  "flex.faq_2_a": "Yes. We include a 30-day bug-free guarantee at no cost. Additionally, we offer monthly support plans, managed hosting, and continuous development.",
  "flex.faq_3_q": "What are the payment terms?",
  "flex.faq_3_a": "We work with a 50% upfront payment to start, and the remaining 50% upon final approval before delivery. We accept wire transfers, Stripe, and crypto.",

  // Contact
  "contact.tag": "// 06 — Contact",
  "contact.title": "LET'S TALK ABOUT YOUR PROJECT",
  "contact.subtitle": "Tell us about your idea. We will respond in less than 24 hours with a value proposal.",
  "contact.name_placeholder": "Your name or company",
  "contact.email_placeholder": "email@example.com",
  "contact.service_placeholder": "What service are you interested in?",
  "contact.budget_placeholder": "Estimated budget",
  "contact.details_placeholder": "Tell us the details of your project...",
  "contact.submit": "Send Message",
  "contact.direct": "Direct contact",
  "contact.location": "Remote, Global",

  // Footer
  "footer.rights": "All rights reserved.",
  
  // Project Detail
  "detail.back": "Go back",
  "detail.not_found": "Project not found",
  "detail.back_home": "Back to Home",
  "detail.client": "Client",
  "detail.year": "Year",
  "detail.timeline": "Timeline",
  "detail.category": "Category",
  "detail.stack": "// Stack Used",
  "detail.challenge": "The Challenge",
  "detail.solution": "The Solution",
  "detail.results": "The Results",
  "detail.gallery": "// Project Gallery",
  "detail.cta_title": "Need something similar?",
  "detail.cta_subtitle": "Let's talk about your project. We help you transform your idea into a high-impact digital product.",
  "detail.cta_button": "Get a Quote",
  "detail.prev": "Previous",
  "detail.next": "Next",
  
  // Preloader
  "preloader.connecting": "CONNECTING TO SERVER"
};

const translations = { es, en };

const LanguageContext = createContext({
  language: 'es',
  toggleLanguage: () => {},
  t: (key) => key
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const saved = localStorage.getItem('quorex_lang');
    if (saved && (saved === 'es' || saved === 'en')) {
      setLanguage(saved);
    } else {
      // Check browser preference if no saved lang
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'en') {
        setLanguage('en');
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newVal = language === 'es' ? 'en' : 'es';
    setLanguage(newVal);
    localStorage.setItem('quorex_lang', newVal);
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
