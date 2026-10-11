/** @type {import('tailwindcss').Config} */
// Configuración de Tailwind CSS para la web de GobernaIA
// Ruta en repositorio: web/tailwind.config.mjs
// Justificación: Define los tokens de diseño (colores, fuentes y sombras) alineados fielmente con la aplicación SaaS real.

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores principales de la marca GobernaIA
        goberna: {
          red: '#DC2626',         // Rojo de acción principal (botones, CTAs, "IA" en logo)
          'red-hover': '#B91C1C', // Hover para botones de acción
          'red-dark': '#991B1B',  // Tono carmesí oscuro para badge "Gestora" y nivel crítico
          'red-light': '#FEE2E2', // Fondo para alertas y badge "Gestionada"
          dark: '#111827',        // Carbón/Grafito oscuro para títulos y estructura
          subtle: '#374151',      // Gris oscuro para etiquetas y subtítulos destacados
          muted: '#6B7280',       // Gris medio para párrafos y descripciones
          light: '#F8FAFC',       // Fondo gris perla sutil para tarjetas secundarias
          border: '#E5E7EB',      // Bordes limpios de tarjetas y tablas
        },
        // Estados semánticos del ciclo de gobernanza y riesgos
        status: {
          cumple: '#16A34A',      // Verde para estado "Cumple" y badge "Vigente"
          'cumple-bg': '#DCFCE7',
          revision: '#D97706',    // Ámbar para "En Revisión"
          'revision-bg': '#FEF3C7',
          alto: '#EA580C',        // Naranja para sistemas de alto impacto
          'alto-bg': '#FFEDD5',
          prohibido: '#991B1B',   // Carmesí para prácticas prohibidas / bloqueo
          'prohibido-bg': '#FEE2E2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
