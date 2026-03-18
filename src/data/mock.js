// ── Quorex Studio — Data ──────────────────────────────────────────────────────
import React from 'react';
import { Zap, Code, Terminal, Server, Flame, Database, Palette, Cloud, Box, Atom } from 'lucide-react';

const dataES = {
  services: [
    { id: 1, title: "E-Commerce", icon: "ShoppingCart", color: "purple", tags: ["React", "Node.js", "Stripe"], description: "Tiendas online completas con pasarelas de pago integradas, gestión de inventario y panel administrativo." },
    { id: 2, title: "Sistemas Administrativos", icon: "LayoutDashboard", color: "red", tags: ["TypeScript", "PostgreSQL", "Supabase"], description: "Dashboards personalizados con roles de usuario, reportes en tiempo real y gestión avanzada de datos." },
    { id: 3, title: "Landing Pages", icon: "Rocket", color: "green", tags: ["Next.js", "TailwindCSS", "Vercel"], description: "Páginas de alta conversión optimizadas para SEO, con animaciones y diseño responsive." },
    { id: 4, title: "Páginas Corporativas", icon: "Globe", color: "purple", tags: ["React", "SEO", "Hosting"], description: "Sitios profesionales con dominio, hosting, SSL y diseño personalizado para tu marca." },
    { id: 5, title: "Catálogos Digitales", icon: "BookOpen", color: "red", tags: ["React", "Search", "Mobile"], description: "Catálogos interactivos con búsqueda avanzada, filtros y vista optimizada para productos." },
    { id: 6, title: "APIs & Automatizaciones", icon: "Code2", color: "green", tags: ["Node.js", "Python", "REST"], description: "Desarrollo de APIs REST, integraciones con servicios externos y automatización de procesos." },
    { id: 7, title: "Sistemas de Reservas", icon: "Calendar", color: "purple", tags: ["React", "Supabase", "Email"], description: "Plataformas de reservas online con calendario, notificaciones y gestión de citas." },
    { id: 8, title: "Plataformas SaaS", icon: "Layers", color: "red", tags: ["Full Stack", "Cloud", "Scale"], description: "Sistemas completos SaaS con suscripciones, multi-tenancy y escalabilidad." },
    { id: 9, title: "Hosting & Soporte", icon: "Server", color: "green", tags: ["DevOps", "SSL", "Backups"], description: "Gestión de hosting, dominio, SSL, backups y soporte técnico mensual continuo." },
  ],
  projects: [
    {
      id: "manojitos",
      slug: "manojitos",
      category: "ecommerce",
      title: "Manojitos",
      description: "Plataforma E-commerce + ERP/CRM con IA integrada para venta de ropa, perfumes y accesorios.",
      image: "/images/manojitos-dashboard.png",
      color: "#FF6B6B",
    },
    {
      id: "dashboard-financiero",
      slug: "dashboard-financiero",
      category: "dashboard",
      title: "Dashboard Financiero",
      description: "Sistema de análisis financiero con reportes en tiempo real y visualización de datos avanzada.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70",
      color: "#6C63FF",
    },
    {
      id: "eina-shop",
      slug: "eina-shop",
      category: "landing",
      title: "Eina Shop",
      description: "Landing page premium para tienda de maquillaje, skincare y accesorios en Isla Margarita, Venezuela.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800",
      color: "#78293c",
    },
    {
      id: "dulces-cakes",
      slug: "dulces-cakes",
      category: "landing",
      title: "Dulce's Cakes",
      description: "Landing page premium para pastelería artesanal venezolana con 13 productos y fotos reales.",
      image: "https://dulcescakes.vercel.app/assets/marquesas.jpeg",
      color: "#FF6B6B",
    }
  ],
  features: [
    { id: 1, title: "Código a la Medida", icon: "Code2", color: "#6C63FF", description: "Todo desarrollado desde cero según tus necesidades específicas. Cero plantillas." },
    { id: 2, title: "Soporte Incluido", icon: "HeadphonesIcon", color: "#FF6B6B", description: "Soporte técnico continuo y mantenimiento para que tu proyecto siempre funcione." },
    { id: 3, title: "Entrega Puntual", icon: "Clock", color: "#00E5A0", description: "Cumplimos con los tiempos acordados. Tu proyecto listo cuando lo necesites." },
    { id: 4, title: "Seguridad Premium", icon: "Shield", color: "#6C63FF", description: "Mejores prácticas de seguridad con Supabase y encriptación robusta incluida." },
    { id: 5, title: "100% Responsive", icon: "Smartphone", color: "#FF6B6B", description: "Diseño adaptable a todos los dispositivos: móvil, tablet y desktop." },
    { id: 6, title: "Escalable", icon: "TrendingUp", color: "#00E5A0", description: "Arquitectura preparada para crecer con tu negocio. De 10 a 10,000 usuarios." },
  ]
};

const dataEN = {
  services: [
    { id: 1, title: "E-Commerce", icon: "ShoppingCart", color: "purple", tags: ["React", "Node.js", "Stripe"], description: "Complete online stores with integrated payment gateways, inventory management, and admin panel." },
    { id: 2, title: "Admin Systems", icon: "LayoutDashboard", color: "red", tags: ["TypeScript", "PostgreSQL", "Supabase"], description: "Custom dashboards with user roles, real-time reporting, and advanced data management." },
    { id: 3, title: "Landing Pages", icon: "Rocket", color: "green", tags: ["Next.js", "TailwindCSS", "Vercel"], description: "High conversion pages optimized for SEO, with animations and responsive design." },
    { id: 4, title: "Corporate Sites", icon: "Globe", color: "purple", tags: ["React", "SEO", "Hosting"], description: "Professional sites with domain, hosting, SSL, and custom design for your brand." },
    { id: 5, title: "Digital Catalogs", icon: "BookOpen", color: "red", tags: ["React", "Search", "Mobile"], description: "Interactive catalogs with advanced search, filters, and optimized product views." },
    { id: 6, title: "APIs & Automation", icon: "Code2", color: "green", tags: ["Node.js", "Python", "REST"], description: "Development of REST APIs, integrations with external services, and process automation." },
    { id: 7, title: "Booking Systems", icon: "Calendar", color: "purple", tags: ["React", "Supabase", "Email"], description: "Online booking platforms with calendar, notifications, and appointment management." },
    { id: 8, title: "SaaS Platforms", icon: "Layers", color: "red", tags: ["Full Stack", "Cloud", "Scale"], description: "Complete SaaS systems with subscriptions, multi-tenancy, and scalability." },
    { id: 9, title: "Hosting & Support", icon: "Server", color: "green", tags: ["DevOps", "SSL", "Backups"], description: "Management of hosting, domain, SSL, backups, and continuous monthly technical support." },
  ],
  projects: [
    {
      id: "manojitos",
      slug: "manojitos",
      category: "ecommerce",
      title: "Manojitos",
      description: "E-commerce + ERP/CRM platform with integrated AI for clothing, perfumes, and accessories brand.",
      image: "/images/manojitos-dashboard.png",
      color: "#FF6B6B",
    },
    {
      id: "dashboard-financiero",
      slug: "dashboard-financiero",
      category: "dashboard",
      title: "Financial Dashboard",
      description: "Financial analysis system with real-time reports and advanced data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=70",
      color: "#6C63FF",
    },
    {
      id: "eina-shop",
      slug: "eina-shop",
      category: "landing",
      title: "Eina Shop",
      description: "Premium landing page for makeup, skincare, and accessories shop in Isla Margarita, Venezuela.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      color: "#78293c",
    },
    {
      id: "dulces-cakes",
      slug: "dulces-cakes",
      category: "landing",
      title: "Dulce's Cakes",
      description: "Premium landing page for Venezuelan artisanal bakery with 13 products and real photos.",
      image: "https://dulcescakes.vercel.app/assets/marquesas.jpeg",
      color: "#FF6B6B",
    }
  ],
  features: [
    { id: 1, title: "Custom Code", icon: "Code2", color: "#6C63FF", description: "Everything developed from scratch according to your specific needs. Zero templates." },
    { id: 2, title: "Support Included", icon: "HeadphonesIcon", color: "#FF6B6B", description: "Continuous technical support and maintenance so your project always works." },
    { id: 3, title: "On-Time Delivery", icon: "Clock", color: "#00E5A0", description: "We meet agreed deadlines. Your project ready when you need it." },
    { id: 4, title: "Premium Security", icon: "Shield", color: "#6C63FF", description: "Best security practices with Supabase and robust encryption included." },
    { id: 5, title: "100% Responsive", icon: "Smartphone", color: "#FF6B6B", description: "Adaptable design for all devices: mobile, tablet, and desktop." },
    { id: 6, title: "Scalable", icon: "TrendingUp", color: "#00E5A0", description: "Architecture ready to grow with your business. From 10 to 10,000 users." },
  ]
};

// CATEGORÍAS (lo que se ve en la sección de proyectos del home)
export const projectCategories = [
  {
    id: 1,
    slug: "ecommerce",
    title: "E-Commerce",
    color: "#FF6B6B",
    description: "Tiendas online completas con carrito, pagos y panel administrativo.",
    projectCount: 1,
  },
  {
    id: 2,
    slug: "dashboard",
    title: "Dashboard Analítico",
    color: "#6C63FF",
    description: "Paneles de control con métricas en tiempo real y visualización de datos.",
    projectCount: 1,
  },
  {
    id: 3,
    slug: "landing",
    title: "Landing Page",
    color: "#00E5A0",
    description: "Páginas de alto impacto diseñadas para convertir visitantes en clientes.",
    projectCount: 2,
  },
  {
    id: 4,
    slug: "catalogo",
    title: "Catálogo Digital",
    color: "#6C63FF",
    description: "Catálogos interactivos con búsqueda avanzada y filtros por categoría.",
    projectCount: 0,
  },
  {
    id: 5,
    slug: "plataforma",
    title: "Plataforma Web",
    color: "#FF6B6B",
    description: "Sistemas SaaS, CRM y ERP desarrollados completamente a la medida.",
    projectCount: 0,
  },
];

// DETALLES DE CADA CATEGORÍA
export const categoryDetails = {
  ecommerce: {
    title: "E-Commerce",
    color: "#FF6B6B",
    description: "Transformamos tu negocio en una tienda online profesional que vende las 24 horas.",
    challenge: "Negocios que venden por WhatsApp o Instagram pierden ventas porque no tienen un proceso de compra profesional. Sin inventario, sin pagos automáticos y sin datos de clientes es imposible escalar.",
    solution: "Construimos tiendas online completas con catálogo dinámico, carrito persistente, pasarela de pagos y panel de administración. El cliente controla todo desde un solo lugar.",
    stack: ["React 18", "TypeScript", "Supabase", "Stripe", "TailwindCSS"],
    projects: ["manojitos"]
  },
  dashboard: {
    title: "Dashboard Analítico",
    color: "#6C63FF",
    description: "Convertimos tus datos dispersos en decisiones claras con paneles en tiempo real.",
    challenge: "Empresas que toman decisiones a ciegas porque sus datos están en Excel, WhatsApp y correos. Sin visibilidad del negocio es imposible crecer con estrategia.",
    solution: "Desarrollamos dashboards personalizados con métricas en tiempo real, reportes automáticos y acceso por roles. Cada miembro del equipo ve exactamente lo que necesita.",
    stack: ["React 18", "TypeScript", "Supabase", "Recharts", "TanStack Query"],
    projects: ["dashboard-financiero"]
  },
  landing: {
    title: "Landing Page",
    color: "#00E5A0",
    description: "Una primera impresión que convierte visitantes en clientes desde el primer scroll.",
    challenge: "Negocios sin presencia digital que pierden clientes frente a competidores con mejor imagen. Una mala primera impresión equivale a una venta perdida.",
    solution: "Diseñamos landing pages de alto impacto con animaciones premium y CTAs optimizados. Trabajamos con React o HTML/CSS puro según las necesidades del proyecto — sin frameworks innecesarios cuando no hacen falta.",
    stack: ["React 18", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "Vite", "Vercel"],
    projects: ["eina-shop", "dulces-cakes"]
  },
  catalogo: {
    title: "Catálogo Digital",
    color: "#6C63FF",
    description: "Tu catálogo siempre actualizado, siempre accesible, sin PDFs ni listas de WhatsApp.",
    challenge: "Negocios que comparten catálogos en PDF desactualizados por WhatsApp. Los clientes no pueden buscar, filtrar ni ver bien los productos en móvil.",
    solution: "Catálogos digitales con búsqueda en tiempo real, filtros avanzados, vista de detalle y precios actualizables al instante desde Supabase.",
    stack: ["React 18", "TailwindCSS", "Supabase", "Vite"],
    projects: []
  },
  plataforma: {
    title: "Plataforma Web",
    color: "#FF6B6B",
    description: "Sistemas SaaS y plataformas empresariales construidas exactamente para tu negocio.",
    challenge: "Empresas que usan herramientas genéricas que no se adaptan a sus procesos. Tiempo perdido en workarounds y datos dispersos entre múltiples sistemas.",
    solution: "Desarrollamos plataformas SaaS completas con autenticación, roles, suscripciones y toda la lógica específica de tu negocio desde cero.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    projects: []
  }
}

// CASOS DE ESTUDIO INDIVIDUALES
export const caseStudies = [
  {
    id: "manojitos",
    slug: "manojitos",
    category: "ecommerce",
    categoryTitle: "E-Commerce",
    title: "Manojitos",
    subtitle: "Plataforma E-commerce + ERP/CRM con IA integrada para venta de ropa, perfumes y accesorios.",
    client: "Manojitos · Boutique",
    location: "Venezuela",
    year: "2025",
    timeline: "8 semanas",
    color: "#FF6B6B",
    heroImage: "/images/manojitos-dashboard.png",
    challenge: "La marca manejaba sus ventas por WhatsApp con procesos 100% manuales. Sin control de inventario de tallas/colores, sin seguimiento de clientes y sin forma profesional de mostrar su catálogo de moda y fragancias.",
    solution: "Desarrollamos una SPA completa con storefront B2C, portal de clientes, backoffice ERP/CRM y una IA nativa llamada Ángela con 4 modos: soporte al cliente, personal shopper, cotizador y copilot administrativo.",
    results: "La marca pasó de gestión 100% manual a un sistema digitalizado completo. El tiempo de procesamiento de pedidos se redujo un 70%. Los clientes ahora pueden explorar el catálogo de moda, perfumes y accesorios, rastrear pedidos y usar créditos desde su portal personal.",
    stack: ["React 18", "TypeScript", "TailwindCSS", "shadcn/ui", "Supabase", "TanStack Query", "Zustand", "Vite"],
    features: [
      "Storefront B2C con catálogo dinámico, carrito persistente y checkout completo",
      "Portal de clientes con historial de pedidos, créditos y métodos de pago",
      "Backoffice ERP/CRM con dashboard analítico y gestión de inventario",
      "Motor de precios parametrizable con reglas de negocio automatizadas",
      "Sistema de deudas y créditos entre la marca y clientes",
      "IA nativa 'Ángela' con 4 modos: soporte, personal shopper, cotizador y copilot",
      "Importación masiva de productos y gestión de proveedores"
    ],
    gallery: [],
    link: "https://manojitos.vercel.app",
    nextProject: "eina-shop"
  },
  {
    id: "dashboard-financiero",
    slug: "dashboard-financiero",
    category: "dashboard",
    categoryTitle: "Dashboard Analítico",
    title: "Dashboard Financiero",
    subtitle: "Sistema de análisis financiero con reportes en tiempo real y visualización de datos avanzada.",
    client: "Fintech Startup",
    location: "Venezuela",
    year: "2025",
    timeline: "6 semanas",
    color: "#6C63FF",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80",
    challenge: "El cliente necesitaba un panel de control financiero que procesara miles de transacciones en tiempo real, con visualizaciones interactivas y alertas automáticas para anomalías en los flujos de dinero.",
    solution: "Desarrollamos un dashboard reactivo con Supabase Realtime para actualizaciones instantáneas, gráficas interactivas con Recharts y un sistema de alertas configurable por el usuario.",
    results: "Reducción del 40% en tiempo de análisis financiero. El sistema procesa +5,000 transacciones por segundo con latencia menor a 200ms. El cliente reportó un aumento del 60% en la eficiencia de su equipo de finanzas.",
    stack: ["React 18", "TypeScript", "Supabase", "TailwindCSS", "Recharts", "Zustand"],
    features: [
      "Dashboard en tiempo real con Supabase Realtime",
      "Gráficas interactivas de ventas, ingresos y métricas clave",
      "Sistema de alertas automáticas para anomalías",
      "Reportes exportables en PDF y Excel",
      "Roles y permisos por usuario",
      "Historial de transacciones con filtros avanzados"
    ],
    gallery: [],
    link: null,
    nextProject: "manojitos"
  },
  {
    id: "eina-shop",
    slug: "eina-shop",
    category: "landing",
    categoryTitle: "Landing Page",
    title: "Eina Shop",
    subtitle: "Landing page premium para tienda de maquillaje, skincare y accesorios en Isla Margarita, Venezuela.",
    client: "Eina Shop",
    location: "Isla Margarita, Venezuela",
    year: "2025",
    timeline: "4 días",
    color: "#78293c",
    heroImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800",
    challenge: "La tienda operaba 100% por Instagram sin presencia web propia. Sin catálogo digital, los clientes no podían ver todos los productos disponibles ni sus precios. La imagen de marca no reflejaba la calidad premium del maquillaje y skincare coreano que ofrecen.",
    solution: "Diseñamos una landing page de estética K-beauty, femenina y premium con HTML5, CSS3 y JavaScript vanilla puro. Hero con animación de estrella giratoria, marquee animado con productos, grid de 5 destacados con fotos reales e integración directa con WhatsApp Business.",
    results: "La marca ahora tiene presencia web profesional que refleja su identidad K-beauty premium. Los clientes pueden explorar productos y contactar directamente desde la página sin depender del algoritmo de Instagram.",
    stack: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    features: [
      "Hero con animación de estrella giratoria en CSS puro",
      "Marquee animado con productos destacados",
      "Grid de 5 productos con imágenes reales de la tienda",
      "Formulario de contacto con integración directa a WhatsApp Business",
      "Botones de producto con link al catálogo de WhatsApp",
      "Tipografía editorial: Cormorant Garamond + Source Sans 3",
      "Paleta K-beauty: #78293c · #e1ae9d · #f4e7d7 · #252024"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600",
      "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=400"
    ],
    link: "https://einashop.vercel.app",
    nextProject: "dulces-cakes"
  },
  {
    id: "dulces-cakes",
    slug: "dulces-cakes",
    category: "landing",
    categoryTitle: "Landing Page",
    title: "Dulce's Cakes",
    subtitle: "Landing page premium para pastelería artesanal venezolana con 13 productos y fotos reales.",
    client: "Dulce's Cakes",
    location: "Venezuela",
    year: "2024",
    timeline: "3 días",
    color: "#FF6B6B",
    heroImage: "https://dulcescakes.vercel.app/assets/marquesas.jpeg",
    challenge: "La pastelería tomaba pedidos únicamente por Instagram sin presencia web propia. Sin catálogo digital, los clientes no podían ver todos los postres disponibles con sus fotos reales. La marca necesitaba una imagen profesional que reflejara la calidad artesanal de sus productos.",
    solution: "Diseñamos una landing page cálida y premium con HTML5 y CSS3 puro sin ningún framework. Hero con logo animado y floating pills de productos, marquee animado, grid de 13 postres con fotos reales, historia de marca y CTAs directos a WhatsApp e Instagram.",
    results: "La pastelería ahora tiene presencia web profesional con los 13 postres de su catálogo fotografiados y publicados. Los clientes pueden explorar cada postre con descripción y hacer el pedido directamente por WhatsApp desde la página.",
    stack: ["HTML5", "CSS3", "Vercel"],
    features: [
      "Hero con logo animado, floating pills y CTA directo a WhatsApp",
      "Marquee animado con todos los productos del menú",
      "Grid de 13 postres con fotos reales del cliente y descripción",
      "Tipografía editorial: Playfair Display · Cormorant Garamond · DM Sans",
      "Animaciones 100% CSS nativo con @keyframes — cero JavaScript",
      "Sección 'Nosotras' con historia de marca y badges artesanales",
      "CTAs directos a WhatsApp Business e Instagram @dulce_scakes19"
    ],
    gallery: [
      "https://dulcescakes.vercel.app/assets/marquesas.jpeg",
      "https://dulcescakes.vercel.app/assets/tres_leches_tradicional.jpeg",
      "https://dulcescakes.vercel.app/assets/torta_de_chocolate.jpeg",
      "https://dulcescakes.vercel.app/assets/chocoflan.jpeg"
    ],
    link: "https://dulcescakes.vercel.app",
    nextProject: "dashboard-financiero"
  }
];

// Export active data based on a language getter
export const getLocalizedData = (lang) => {
  return lang === 'en' ? dataEN : dataES;
};

// Common/agnostic data stays static
export const techStack = [
  { name: "Next.js", icon: <Zap size={24} />, category: "Frontend" },
  { name: "React", icon: <Atom size={24} />, category: "Frontend" },
  { name: "TypeScript", icon: <Code size={24} />, category: "Language" },
  { name: "Node.js", icon: <Server size={24} />, category: "Backend" },
  { name: "Python", icon: <Terminal size={24} />, category: "Backend" },
  { name: "FastAPI", icon: <Zap size={24} />, category: "Backend" },
  { name: "Supabase", icon: <Flame size={24} />, category: "Database" },
  { name: "PostgreSQL", icon: <Database size={24} />, category: "Database" },
  { name: "TailwindCSS", icon: <Palette size={24} />, category: "Styling" },
  { name: "Vercel", icon: <Cloud size={24} />, category: "Deploy" },
  { name: "Docker", icon: <Box size={24} />, category: "Deploy" },
];

export const otherTechs = [
  "WordPress", "PHP", "Laravel", "Vue.js", "Angular",
  "MySQL", "MongoDB", "Django", "Flutter", "Astro", "Svelte",
];

export const contactInfo = {
  email: "michael.rafael03@gmail.com",
  phone: "+58 412 3574858",
  social: {
    github: "https://github.com/Quorex-Studio",
    linkedin: "https://linkedin.com/company/quorexstudio",
    twitter: "https://twitter.com/quorexstudio",
  },
};
