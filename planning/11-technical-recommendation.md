# 11 — Recomendación técnica

## Resumen

[HIPÓTESIS] Construir la primera versión con **Astro**, páginas pre-renderizadas por defecto, componentes interactivos solo donde sean necesarios, contenido versionado y un endpoint seguro para formularios. Esta opción favorece rendimiento, SEO, accesibilidad y mantenimiento de un sitio principalmente editorial.

La decisión no es definitiva hasta cerrar hosting, frecuencia de edición, responsable técnico, formularios, analítica y relación futura con la aplicación.

## Necesidades técnicas reales

- Sitio público multipágina y rápido.
- Contenido mayoritariamente estático.
- Formularios con validación, protección antispam y trazabilidad de consentimiento.
- SEO técnico y datos estructurados.
- Analítica minimizada.
- Crecimiento posterior a recursos, idiomas y posibles integraciones.
- Despliegues revisables y rollback.
- Edición razonable por el equipo, con o sin CMS futuro.

## Comparativa

| Opción | Ventajas | Costes/riesgos | Encaje |
|---|---|---|---|
| HTML/CSS estático | Máximo control y rendimiento, superficie mínima | Repetición, mantenimiento editorial y escalado peores | Bueno para micrositio temporal, no para crecimiento previsto |
| Astro | Estático por defecto, componentes selectivos, contenidos estructurados, buen SEO | Requiere desarrollo y proceso editorial | **Recomendado** |
| Next.js | Ecosistema amplio, servidor e integración de app | Más complejidad y JavaScript potencial para este alcance | Adecuado si la web se integra pronto con una app React/servicios dinámicos |
| WordPress gestionado | Edición autónoma, ecosistema y CMS maduro | Actualizaciones, plugins, seguridad, rendimiento y gobernanza editorial | Alternativa si la autonomía editorial sin desarrollador es condición principal |
| Constructor visual | Lanzamiento veloz y autonomía | Dependencia, control técnico, rendimiento y exportación variables | Solo tras evaluar proveedor, privacidad y propiedad |

## Por qué Astro

- Pre-renderiza HTML por defecto y permite rutas bajo demanda cuando se necesitan ([documentación oficial](https://docs.astro.build/en/guides/on-demand-rendering/)).
- Reduce la cantidad de JavaScript enviado para páginas informativas.
- Permite colecciones de contenido estructurado y validado.
- Facilita componentes reutilizables sin adoptar una aplicación completa.
- Puede alojarse en servicios estáticos o híbridos.
- Conserva margen para añadir CMS o endpoints posteriormente.

## Arquitectura propuesta

```text
Astro
├── páginas públicas pre-renderizadas
├── componentes UI accesibles
├── contenido en colecciones Markdown/MDX
├── imágenes optimizadas
├── endpoint de formulario o servicio externo evaluado
├── analítica cargada según configuración/consentimiento
└── despliegue con preview, revisión y rollback
```

### Renderizado

- Estático para inicio, producto, audiencias, equipo, FAQ y legal.
- Bajo demanda solo para formularios, futuras preferencias o contenido realmente dinámico.
- No usar SPA para navegación informativa.

### Contenido

Al lanzamiento, contenido versionado en repositorio con esquema: título, descripción, estado, autor, revisor, fecha, fuentes y canonical.

[ROADMAP] CMS desacoplado si el equipo publica con frecuencia y se define flujo de aprobación. No añadirlo antes de saber quién edita y cuánto.

## Formularios

### Requisitos

- Validación en cliente y servidor.
- Honeypot y rate limiting; CAPTCHA solo si el abuso lo exige.
- CSRF según arquitectura.
- Sanitización y límites de longitud.
- Cifrado en tránsito.
- Registro de versión del aviso/consentimiento.
- Sin PII en analítica, URL o logs innecesarios.
- Mensajes de error accesibles.
- Entrega fiable y monitorizada.

### Opciones

1. Función serverless propia que envía a buzón/CRM.
2. Proveedor de formularios con DPA, región y retención aceptables.
3. Integración directa con CRM, solo después de revisar seguridad y privacidad.

[POR VALIDAR] Proveedor, entidad responsable, destinatarios, ubicación de datos, retención y acceso.

## Hosting

Evaluar plataforma europea o con condiciones adecuadas, CDN, HTTPS automático, previews, logs controlables y acuerdos de tratamiento. Criterios:

- Región y transferencias.
- DPA/subencargados.
- Caché y rendimiento.
- Variables secretas.
- Protección de ramas y despliegues.
- Rollback.
- Coste previsible.
- Exportabilidad.

No seleccionar proveedor hasta decidir dominio, entidad y política de datos.

## Seguridad

- Dependencias fijadas y actualizaciones periódicas.
- Revisión automática de vulnerabilidades.
- Secretos fuera del repositorio y del cliente.
- Cabeceras: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Formularios limitados, monitorizados y sin adjuntos al inicio.
- Mínimos scripts de terceros.
- Copias/versionado y rollback.
- Entornos de preview no indexables y, si procede, protegidos.

## Accesibilidad

Objetivo WCAG 2.2 nivel AA:

- Teclado y foco visibles.
- Semántica y landmarks.
- Contraste.
- Formularios con label, instrucciones y errores asociados.
- Animación reducida.
- Alternativas textuales.
- Zoom y reflow.
- Pruebas automáticas más revisión manual con teclado y lector.

## Rendimiento

- Imágenes AVIF/WebP con tamaños responsivos.
- Fuente del sistema o pocas fuentes autoalojadas.
- Sin vídeo de fondo.
- Islas interactivas solo para formulario, navegación o preferencias.
- Scripts de analítica diferidos.
- Presupuesto de JavaScript y de peso por página.
- Medición Core Web Vitals de campo.

## Integración futura con la aplicación

Mantener separados el sitio de marketing y la aplicación por despliegue y seguridad, incluso si comparten dominio/subdominio. Posible esquema:

- `www.dominio` — web pública.
- `app.dominio` — aplicación.
- Sistema de diseño compartido mediante tokens/paquete cuando madure.

[POR VALIDAR] Dominio, autenticación, responsable de cada repositorio y política de sesiones.

## Criterios para elegir otra opción

Elegir WordPress gestionado si la publicación frecuente por personas no técnicas es prioritaria y existe capacidad para actualizaciones/seguridad. Elegir Next.js si la web necesita pronto autenticación compartida, personalización de servidor o integración profunda con una app React. Elegir HTML simple solo si se decide un micrositio temporal sin plan editorial.

## Decisiones técnicas pendientes

- Repositorio y propiedad.
- Dominio/DNS.
- Hosting y región.
- Servicio de correo/CRM.
- Analítica y CMP.
- CMS sí/no.
- Idiomas.
- Política de previews.
- Monitorización de disponibilidad y formularios.
- Integración con la app.

No se han instalado dependencias ni creado código en esta fase.

