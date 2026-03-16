# Quorex Studio 🚀

Sitio web oficial de **Quorex Studio** — Agencia de desarrollo web premium.

## Stack
- React 18
- TailwindCSS 3
- Lucide React (iconos)
- Sonner (toasts)

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Correr en desarrollo
npm start

# 3. Build para producción
npm run build
```

## Estructura

```
src/
├── data/
│   └── mock.js          ← Todos los datos (servicios, proyectos, contacto)
├── sections/
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── TechStack.jsx
│   ├── Projects.jsx
│   ├── WhyQuorex.jsx
│   ├── Flexibility.jsx  ← Sección "trabajamos con cualquier stack"
│   └── Contact.jsx
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── App.js
└── App.css
```

## Personalización antes de publicar

Abre `src/data/mock.js` y reemplaza:

```js
export const contactInfo = {
  email:  "TU_EMAIL_REAL@dominio.com",
  phone:  "+XX XXX XXX XXXX",
  social: {
    github:   "https://github.com/TU_USUARIO",
    linkedin: "https://linkedin.com/in/TU_PERFIL",
    twitter:  "https://twitter.com/TU_USUARIO",
  },
};
```

## Próximos pasos

- [ ] Migrar a **Next.js** (App Router)
- [ ] Conectar formulario a **Supabase** (tabla `contacts`)
- [ ] Deploy en **Vercel**
- [ ] Registrar dominio `quorexstudio.com`

---

Construido con ♥ y código por Quorex Studio.
