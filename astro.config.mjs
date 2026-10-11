// Configuración principal de Astro para GobernaIA
// Ruta en repositorio: web/astro.config.mjs
// Justificación: Habilita la integración de Tailwind CSS y configura el servidor para desarrollo y contenedor Docker.

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gobernaia.es',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  server: {
    port: 4321,
    host: true,
  },
});
