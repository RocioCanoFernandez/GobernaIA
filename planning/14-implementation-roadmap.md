# 14 — Roadmap de implementación

## Regla de paso

No iniciar diseño visual o construcción hasta cerrar los P0 de identidad, claims, equipo, conversión y tratamiento de datos. La planificación puede aprobarse por bloques; la web no debe rellenar vacíos con supuestos.

## Fase 0 — Cierre de fundamentos

**Objetivo:** convertir hipótesis y relaciones en decisiones publicables.

### Tareas P0

1. Confirmar marca, dominio y entidad titular.
2. Aprobar audiencia primaria, posicionamiento y CTA.
3. Hacer una demo interna funcional y completar matriz de claims.
4. Documentar los cargos, relación, bios, fotografías y permisos de Rocío, Pepe, Amal y Natalia, ya confirmados como núcleo de la nueva fase.
5. Aprobar el texto, ubicación y activo oficial del logotipo de RZS; mantener ForLOPD fuera de la primera web y definir criterios para futuras entidades colaboradoras.
6. Confirmar o descartar participación en InproInnova.
7. Decidir responsable, SLA y herramienta de leads.
8. Mapear flujo de datos, proveedores, retención y base jurídica.
9. Elegir tecnología/hosting con criterios de privacidad y operación.
10. Asignar responsables de producto, legal, privacidad, técnica y publicación.

**Dependencias:** respuestas de negocio, producto, desarrollo y colaboradores.  
**Entregables:** brief cerrado, matriz de claims, matriz de permisos, data map, decision log aprobado.  
**Bloqueadores:** identidad jurídica, funciones no verificadas, equipo sin consentimiento, formulario sin responsable.

## Fase 1 — Contenido y estructura

**Objetivo:** producir contenido final antes de decorar.

### Tareas P0

1. Wireframes de baja fidelidad para rutas prioritarias.
2. Copy final de inicio, plataforma, gestoras, empresas, FAQ y contacto.
3. Redacción y revisión de legal, privacidad y cookies.
4. Definición exacta de formulario y mensajes de estado.
5. Selección de capturas/diagramas basados en producto real.
6. Revisión de claims con producto y especialistas.
7. Definición SEO: titles, descriptions, canonical, schema y enlaces.
8. Criterios de accesibilidad por componente.

### Tareas P1

1. Tres recursos pilares firmados y revisados.
2. Metodología pública.
3. Bios y fotografías finales.
4. Noticia/evento solo si está confirmado.

**Entregables:** prototipo de contenido, copy aprobado, assets licenciados, especificación SEO/legal.  
**Criterio de salida:** ninguna sección crítica depende de lorem ipsum, imagen ficticia o claim pendiente.

## Fase 2 — Diseño visual

**Objetivo:** convertir la estructura aprobada en un sistema visual accesible y coherente.

### Tareas P0

- Dirección de arte y moodboard.
- Tokens: color, tipografía, espacio, radios, sombra, movimiento.
- Componentes: navegación, hero, cards, tablas, estados, CTA, FAQ, formularios, footer.
- Vistas móvil, tablet y escritorio.
- Estados de foco, error, carga y éxito.
- Contraste y reflow.
- Prototipo del recorrido principal.

### Tareas P1

- Diagrama del ciclo de vida.
- Plantilla de recursos.
- Sistema para estado de funciones.
- Recursos sociales/evento confirmados.

**Dependencias:** copy estable, marca y activos.  
**Criterio de salida:** revisión de producto, conversión, accesibilidad y legal.

## Fase 3 — Construcción

**Objetivo:** implementar una web rápida, segura y mantenible.

### Tareas P0

- Inicializar repositorio y Astro tras aprobación.
- Componentes semánticos y responsivos.
- Páginas y contenido.
- Formulario servidor/proveedor con protección.
- Preferencias de cookies, si proceden.
- Analítica y eventos sin PII.
- Sitemap, robots, canonical, metadatos y schema.
- Cabeceras de seguridad.
- Pipeline de preview y producción.
- 404, gracias y estados de error.

### Tareas P1

- Colecciones de recursos.
- CMS desacoplado solo si se aprobó.
- Integración CRM.
- Automatización de doble opt-in.

**Dependencias:** hosting, DNS, herramientas, textos legales y accesos.  
**Entregables:** staging protegido y documentación de operación.

## Fase 4 — QA y lanzamiento

**Objetivo:** publicar sin errores funcionales, legales o de medición.

### QA P0

- Contenido y claims contra matriz aprobada.
- Enlaces, navegación, 404 y redirecciones.
- Formularios: éxito, error, spam, entrega y retención.
- Consentimiento: aceptar, rechazar, personalizar y retirar.
- Eventos y ausencia de PII.
- Móvil y navegadores principales.
- Teclado, foco, lector y contraste.
- Rendimiento y Core Web Vitals de laboratorio.
- Schema, canonical, sitemap y robots.
- Cabeceras y secretos.
- Revisión jurídica final con fecha.
- Copia/rollback y monitorización.

### Lanzamiento

1. Congelar contenido aprobado.
2. Desplegar y validar HTTPS/DNS.
3. Comprobar formularios de extremo a extremo.
4. Enviar sitemap y verificar Search Console.
5. Revisar analítica/consentimiento en producción.
6. Monitorizar 24–72 horas.
7. Registrar incidencias y decisiones.

## Fase 5 — Primeros 90 días

### 0–30 días, P1

- Revisar calidad de leads y objeciones.
- Corregir fallos de comprensión.
- Publicar/ajustar tres recursos pilares.
- Obtener línea base SEO y rendimiento.
- Revisar consultas de marca y estado de indexación.

### 31–60 días, P1

- Crear caso anonimizado si existe permiso y evidencia.
- Mejorar páginas con datos cualitativos.
- Integrar CRM/automatización si el volumen lo justifica.
- Ampliar FAQ con preguntas reales.

### 61–90 días, P2

- Evaluar CMS e idiomas.
- Decidir páginas sectoriales basadas en demanda real.
- Probar una hipótesis de CTA/mensaje con volumen suficiente.
- Auditoría de contenido jurídico y autoridad.
- Batería GEO/AEO documentada.

## Backlog por prioridad

### P0 — imprescindible

- Verdad de producto y claims.
- Identidad jurídica/marca/dominio.
- Posicionamiento y audiencia.
- CTA y proceso de leads.
- Equipo/colaboradores autorizados.
- Legal, privacidad y cookies.
- Seguridad, accesibilidad, SEO técnico y analítica básica.
- QA y rollback.

### P1 — importante

- Contenido pilar.
- Metodología pública.
- Caso validado.
- Capturas/exportación real.
- CRM y automatización proporcionada.
- Página/evento confirmado.

### P2 — optimización

- CMS.
- Idiomas.
- Páginas sectoriales probadas.
- Personalización.
- Experimentación de conversión.
- Centro de recursos amplio.
- Integraciones avanzadas.

## Estimación por bloques, no calendario

El tiempo depende de decisiones externas, no solo de ejecución. No fijar una fecha de lanzamiento hasta cerrar Fase 0. Cada bloque requiere un responsable y fecha interna:

| Bloque | Responsable propuesto | Aprobadores |
|---|---|---|
| Producto/claims | Rocío + Pepe | especialistas según materia |
| Posicionamiento/copy | Rocío | producto + jurídico |
| Equipo/colaboraciones | Rocío | cada persona/organización |
| Privacidad/legal web | especialista designado | titular del sitio |
| Tecnología | Pepe/equipo técnico | producto + privacidad |
| Conversión/operación | responsable comercial | privacidad + producto |
| QA/lanzamiento | responsable web | propietarios de cada área |

[POR VALIDAR] Responsables y aprobadores finales.

## Definición de terminado

La web está lista cuando cada claim tiene propietario y fuente, cada función mostrada ha sido probada, cada persona/organización ha autorizado su presencia, el tratamiento de datos está documentado, la accesibilidad y el rendimiento han sido revisados y existe una operación real para responder a los contactos.

