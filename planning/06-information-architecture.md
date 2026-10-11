# 06 — Arquitectura de información

## Recomendación

[HIPÓTESIS] Lanzar un sitio multipágina pequeño. Una landing única sería rápida, pero insuficiente para diferenciar audiencias, explicar un producto complejo y construir autoridad orgánica. La estructura debe poder crecer sin cambiar URLs básicas.

## Mapa inicial

```text
/
├── plataforma/
├── para-gestoras/
├── para-empresas/
├── metodologia/             [P1 si el contenido no está aprobado al lanzamiento]
├── equipo/                  [solo cuando perfiles y permisos estén cerrados]
├── recursos/                [P1; índice de contenidos]
│   ├── gobernanza-de-ia/
│   ├── clasificacion-legal-y-riesgo-operativo/
│   └── gobernanza-ia-multiples-clientes/
├── preguntas-frecuentes/
├── contacto/
├── gracias/
├── aviso-legal/
├── privacidad/
└── cookies/
```

[HIPÓTESIS] El estado del producto puede ser un bloque visible de `/plataforma/` al inicio. Una página `/estado-del-producto/` solo se justifica si existe un registro mantenido y útil.

## Navegación global

**Principal:** Plataforma · Para gestoras · Para empresas · Recursos · Equipo · Contacto  
**CTA:** Hablar con el equipo  
**Footer:** Metodología · FAQ · Privacidad · Cookies · Aviso legal · LinkedIn autorizado · Contacto

Si `Equipo` o `Recursos` no están listos, no mostrar enlaces vacíos.

## Página de inicio `/`

### Objetivo

Explicar categoría, comprador principal y siguiente paso sin sobrecargar la primera visita.

### Secuencia propuesta

1. **Hero:** promesa precisa, audiencia y CTA.
2. **Cualificador:** “Para gestoras” / “Para equipos internos”.
3. **Problema:** hojas, carpetas, decisiones y cambios desconectados.
4. **Cómo funciona:** ciclo de vida resumido.
5. **Beneficios:** estructura, trazabilidad, coordinación, revisión.
6. **Modelo multiempresa:** gestora, cliente, datos y permisos.
7. **Estado del producto:** disponible/en validación/roadmap, tras aprobación.
8. **Método y límites:** apoyo a gobernanza; no garantía ni sustitución profesional.
9. **Autoridad/equipo:** solo perfiles aprobados.
10. **FAQ breve:** cinco objeciones principales.
11. **Cierre:** CTA organizacional y opción de seguimiento.

**SEO de referencia**  
Title: `GobernaIA | Plataforma de gobernanza y trazabilidad de sistemas de IA`  
H1: `Gobernanza de IA, organizada por cada sistema y durante todo su ciclo de vida.`

## `/plataforma/`

### Objetivo

Explicar el modelo funcional y el estado real sin convertir la página en documentación interna.

### Contenido

- Expediente por sistema.
- Once etapas, agrupadas visualmente para no saturar.
- Diferencia entre clasificación legal, relación con GPAI y riesgo operativo.
- Requisitos, controles, responsables y evidencias.
- Revisión ante cambios e incidentes.
- Gestión multiempresa y propiedad de datos.
- Estado de funcionalidades.
- Límites y necesidad de criterio experto.
- CTA a conversación.

No usar pantallas de una versión histórica ni un porcentaje de “compliance”.

## `/para-gestoras/`

### Objetivo

Convertir a la audiencia prioritaria.

### Contenido

- H1 específico: `Gestiona la gobernanza de IA de múltiples clientes desde un único entorno.`
- Problemas de escala y dispersión.
- Vista conjunta y espacios separados por cliente.
- Colaboración controlada con el cliente.
- Propiedad, delegación y continuidad de datos.
- Cómo encaja en un servicio profesional.
- Preguntas de permisos, exportación y método.
- CTA `Hablar sobre mi modelo de gestión`.

[POR VALIDAR] Toda afirmación detallada sobre permisos, exportaciones o reasignación.

## `/para-empresas/`

### Objetivo

Atender a organizaciones con capacidad interna sin diluir la prioridad principal.

### Contenido

- H1: `Convierte la gobernanza de tus sistemas de IA en un proceso continuo.`
- Inventario, responsabilidades y revisión.
- Qué equipo interno suele intervenir.
- Cuándo se necesita acompañamiento externo.
- Relación entre negocio, jurídico, privacidad y tecnología.
- CTA `Evaluar el encaje`.

## `/metodologia/`

### Objetivo

Construir confianza y capacidad de citación.

### Contenido

- Principios.
- Fuentes y fecha de revisión.
- Ciclo de vida.
- Decisiones humanas y segregación.
- Gestión de cambios.
- Límites.
- Autores/revisores.

[P1] Publicar solo cuando haya propietario editorial y revisión periódica.

## `/equipo/`

### Objetivo

Demostrar capacidades multidisciplinares y responsabilidad identificable.

### Condición de publicación

Las cuatro identidades están confirmadas. Antes de publicar se necesitan nombre, cargo, bio, foto, relación, enlace y consentimiento aprobados de cada perfil. Si esos elementos no están cerrados, lanzar una sección de capacidades en la página principal en lugar de fichas incompletas.

## `/recursos/`

### Objetivo

Crear autoridad y capturar demanda informativa con contenido original, actualizado y firmado.

### Primeros pilares

1. Qué es gobernanza de IA y por qué no termina con una evaluación.
2. Clasificación legal y riesgo operativo: diferencias.
3. Cómo gestionar gobernanza de IA para varios clientes.
4. Inventario y expediente de un sistema de IA.
5. Qué cambios activan una revisión.

No publicar un blog vacío. Preparar al menos tres recursos sólidos antes de mostrar el índice.

## `/preguntas-frecuentes/`

Preguntas candidatas:

1. ¿GobernaIA garantiza el cumplimiento del Reglamento de IA?
2. ¿Es una herramienta solo para despachos y consultoras?
3. ¿Puede utilizarla una empresa con equipo interno?
4. ¿Quién es propietario de los datos?
5. ¿Qué puede hacer la empresa cliente?
6. ¿En qué se diferencia la clasificación legal del riesgo operativo?
7. ¿Qué ocurre cuando cambia un sistema?
8. ¿La plataforma sustituye asesoramiento jurídico o técnico?
9. ¿Está disponible una demostración?
10. ¿Qué funcionalidades están en desarrollo?

Las respuestas deben ser visibles y actualizadas; el marcado estructurado no garantiza un resultado enriquecido.

## `/contacto/` y `/gracias/`

Contacto debe explicar destinatario, plazo orientativo de respuesta, finalidad de datos y alternativas de intención. Gracias debe confirmar recepción sin revelar datos del formulario en la URL, ofrecer un recurso útil y medir conversión.

## Páginas legales

- `/aviso-legal/`: titular, identificación y condiciones.
- `/privacidad/`: tratamiento de leads, suscripciones, derechos y proveedores.
- `/cookies/`: tecnologías reales, preferencias y revocación.

No copiar plantillas sin adaptarlas a entidad, hosting, analítica y formularios reales.

## Reglas de URL y contenido

- URLs en minúsculas, breves, estables y sin fecha salvo noticias.
- Una intención principal por página.
- Enlaces internos contextuales, no solo desde el menú.
- Migas de pan en recursos si crece la profundidad.
- Canonical autorreferente en páginas indexables.
- `noindex` para gracias, entornos de prueba y resultados internos.
- No crear páginas por sector con contenido casi idéntico.

