# Dockerfile para despliegue de la web de GobernaIA en VPS privado (Easypanel / Coolify / Docker puro)
# Ruta en repositorio: web/Dockerfile
# Justificación: Cumple con la regla técnica obligatoria de SeviAI para despliegue en VPS privado.
# Utiliza compilación multi-etapa para generar un contenedor ultraligero y seguro con Nginx.

# Etapa 1: Construcción
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar manifiestos de dependencias
COPY package*.json ./

# Instalar dependencias limpias
RUN npm ci

# Copiar todo el código fuente del proyecto
COPY . .

# Compilar el sitio estático optimizado con Astro
RUN npm run build

# Etapa 2: Servidor de producción ultraligero
FROM nginx:alpine AS runner

# Copiar la configuración personalizada de Nginx
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html index.htm;

    # Compresión gzip para máxima velocidad
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # Rutas y fallback para páginas estáticas
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Caché optimizada para activos estáticos
    location ~* \.(?:ico|css|js|gif|jpe?g|png|svg|woff2?|eot|ttf|otf|webp)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public, max-age=15552000, immutable";
    }

    # Cabeceras de seguridad recomendadas
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
EOF

# Copiar los archivos construidos desde la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Puerto de escucha del contenedor
EXPOSE 80

# Comando de arranque del servidor
CMD ["nginx", "-g", "daemon off;"]
