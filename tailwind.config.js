/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#6C63FF',
          red: '#FF6B6B',
          green: '#00E5A0',
          bg: '#050507',
          surface: '#0a0a0c',
        }
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
