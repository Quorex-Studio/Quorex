# ⚡ Quorex Studio

<div align="center">

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Sitio web oficial de mi agencia de desarrollo web — construido con animaciones avanzadas, sin librerías externas.**

🌐 **[quorex.vercel.app](https://quorex.vercel.app)**

</div>

-----

## 🎯 ¿Qué es esto?

Quorex Studio es mi portafolio como desarrollador y la web de mi agencia digital. Más allá del contenido, este proyecto es una demostración técnica de lo que puedo construir: animaciones de alto rendimiento, arquitectura React modular y un diseño editorial de nivel premium — todo sin depender de librerías de animación externas.

-----

## ✨ Características técnicas destacadas

### 🎨 Sistema de partículas en Canvas

- **90 partículas** animadas con conexiones dinámicas entre nodos cercanos
- Implementado con la **Canvas API nativa** y `requestAnimationFrame`
- Lógica de colisión de bordes y velocidades aleatorias por partícula
- Resize handler para adaptar el canvas en tiempo real

```javascript
// Animación optimizada sin librerías externas
const animate = () => {
  ctx.clearRect(0, 0, W, H);
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    // Conexiones entre partículas cercanas
    for (let j = i + 1; j < N; j++) {
      const d = Math.sqrt((p.x - particles[j].x) ** 2 + (p.y - particles[j].y) ** 2);
      if (d < 130) {
        ctx.strokeStyle = `rgba(108,99,255,${0.08 * (1 - d / 130)})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animate);
};
```

### 🖱️ Cursor personalizado

- Cursor compuesto por punto + anillo con efecto de lag
- Scale y color reactivos al hover sobre elementos interactivos
- Implementado con `mousemove` listener y `setTimeout` para el efecto de retraso

### 📜 Scroll Reveal escalonado

- `IntersectionObserver` para detectar elementos en viewport
- Animaciones de entrada con `opacity` y `translateY` escalonadas por índice
- CSS puro, sin librerías de animación

### ⚡ Performance

- Build con **Vite** y code splitting automático
- Lazy loading de imágenes
- CSS crítico inline
- Deploy en **Vercel Edge Network**

-----

## 🏗️ Arquitectura del proyecto

```
src/
├── sections/
│   ├── Hero.jsx          ← Canvas particles + animaciones de entrada
│   ├── Services.jsx      ← Grid de servicios con hover effects
│   ├── TechStack.jsx     ← Stack tecnológico con métricas
│   ├── Projects.jsx      ← Grid editorial asimétrico
│   ├── WhyQuorex.jsx     ← Diferenciadores con animaciones
│   ├── Flexibility.jsx   ← Sección "cualquier stack"
│   └── Contact.jsx       ← Formulario con validación
├── components/
│   ├── Header.jsx        ← Nav con scroll detection + mobile menu
│   └── Footer.jsx        ← Footer con "volver arriba"
├── data/
│   └── mock.js           ← Datos centralizados (servicios, proyectos, contacto)
├── App.js                ← Cursor custom + scroll reveal global
└── App.css               ← Animaciones globales + scrollbar custom
```

-----

## 🛠️ Stack

|Tecnología         |Uso                           |
|-------------------|------------------------------|
|**React 18**       |UI components y estado        |
|**JavaScript ES6+**|Lógica de animaciones y Canvas|
|**TailwindCSS**    |Estilos utilitarios           |
|**Lucide React**   |Iconografía                   |
|**Sonner**         |Toast notifications           |
|**Vite**           |Build tool y dev server       |
|**Vercel**         |Deploy con CI/CD desde GitHub |

-----

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Ldeath0/Quorex.git
cd Quorex

# Instalar dependencias
npm install

# Desarrollo
npm start

# Build producción
npm run build
```

-----

## 🎨 Decisiones de diseño

**¿Por qué Canvas API en lugar de una librería como tsParticles?**
Quería control total sobre el comportamiento de cada partícula y las conexiones entre nodos. Implementarlo desde cero también es una demostración técnica más honesta de mis capacidades.

**¿Por qué sin librerías de animación (GSAP, Framer Motion)?**
Las animaciones de este proyecto son 100% CSS transitions + `requestAnimationFrame`. Demuestra que se pueden lograr resultados de nivel premium sin dependencias pesadas que impacten el bundle size.

**¿Por qué datos en `mock.js` centralizado?**
Separar datos de presentación facilita la migración a Next.js con un CMS headless o Supabase como fuente de datos — que es exactamente el próximo paso del proyecto.

-----

## 📈 Próximos pasos

- [ ] Migrar a **Next.js** con App Router
- [ ] Conectar formulario de contacto a **Supabase**
- [ ] Añadir proyectos reales de clientes
- [ ] Implementar **i18n** para versión en inglés
- [ ] Registrar dominio `quorexstudio.com`

-----

## 👨‍💻 Sobre mí

**Michael Noriega** — Full-Stack Developer  
Especializado en React, TypeScript, Supabase y el ecosistema JavaScript moderno.  
Construyo productos digitales a la medida: desde E-commerce y ERP hasta plataformas SaaS.

- 🌸 [manojitos.vercel.app](https://manojitos.vercel.app) — E-commerce + ERP/CRM + IA
- 🌐 [quorex.vercel.app](https://quorex.vercel.app) — Esta misma web
- 📧 michael.rafael03@gmail.com
- 💼 [github.com/Ldeath0](https://github.com/Ldeath0)

-----

<div align="center">
  Construido con ♥ desde Venezuela 🇻🇪
</div>
