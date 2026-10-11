# 12 — Analítica y medición

## Principio

Medir decisiones, no acumular datos. La analítica debe responder si la audiencia correcta entiende la propuesta y completa el siguiente paso, con la mínima información personal posible.

## Objetivos y KPI

| Objetivo | KPI primario | Indicadores de diagnóstico |
|---|---|---|
| Generar conversación cualificada | Leads cualificados | Envíos, tasa formulario, segmento, necesidad, fuente |
| Explicar el producto | Llegada a plataforma/gestoras | Scroll útil, clics internos, FAQ, tiempo cualitativo |
| Construir demanda | Conversiones asistidas por orgánico | Consultas, páginas de entrada, retorno, suscripciones |
| Validar mensaje | % de leads con encaje y entrevistas | Motivos de no encaje, objeciones, lenguaje usado |
| Operar bien | Tiempo de primera respuesta | Entrega de formulario, errores, SLA, duplicados |

No usar rebote o tiempo en página de forma aislada como señal de éxito.

## Embudo de medición

```text
Sesión cualificada
→ visita a página de audiencia/producto
→ clic en CTA
→ inicio de formulario
→ envío correcto
→ lead cualificado
→ reunión
→ oportunidad
```

La web puede medir hasta el envío; CRM o registro comercial debe devolver las etapas posteriores para evaluar calidad real.

## Taxonomía de eventos

Usar nombres estables en minúsculas y parámetros no personales.

| Evento | Cuándo | Parámetros permitidos |
|---|---|---|
| `cta_click` | Clic en CTA relevante | `cta_name`, `placement`, `page_type`, `destination` |
| `audience_select` | Selección gestora/empresa/interés | `audience` |
| `form_view` | Formulario visible | `form_type`, `page_type` |
| `form_start` | Primera interacción | `form_type` |
| `form_error` | Error de validación/envío | `form_type`, `field_name` genérico, `error_type`; nunca valor |
| `form_submit` | Envío aceptado | `form_type`, `audience`, `need_category`; sin email/nombre |
| `thank_you_view` | Confirmación cargada | `form_type` |
| `resource_view` | Vista de recurso | `content_id`, `content_type`, `topic` |
| `faq_open` | Apertura de pregunta | `question_id`, `topic` |
| `outbound_click` | Salida relevante | `link_type`, `destination_domain` |
| `consent_update` | Cambio de preferencias | `analytics_state`, `marketing_state`, `policy_version` |

No enviar mensajes, correos, nombres, organizaciones, teléfonos ni IDs internos a la herramienta de analítica.

## Propiedades de campaña

Conservar UTM de origen de forma proporcional:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term` cuando sea necesario

Normalizar nombres. Para eventos, usar una campaña específica solo si la participación está confirmada. No introducir PII en parámetros.

## Herramientas

### Recomendación preferente

[HIPÓTESIS] Analítica ligera y orientada a privacidad —por ejemplo, una configuración adecuada de Plausible o Matomo— más Google Search Console. “Sin cookies” no significa automáticamente “sin obligaciones”; verificar configuración, contratos, direcciones IP, transferencias, retención y marco aplicable.

### Alternativa

GA4 con una plataforma de gestión de consentimiento cuando corresponda, Consent Mode y bloqueo previo de tecnologías no necesarias. Aporta ecosistema, pero aumenta complejidad y revisión de privacidad.

### CRM

[POR VALIDAR] Elegir después de definir proceso comercial. La primera versión puede usar un buzón estructurado más registro controlado, siempre que exista trazabilidad y seguridad; no enviar leads sensibles a hojas compartidas sin control.

## Consentimiento y activación

- Tecnologías estrictamente necesarias: activar según su función y documentación.
- Analítica no exenta: esperar consentimiento.
- Rechazar debe ser tan accesible como aceptar.
- Cambiar/retirar preferencias debe ser sencillo.
- Registrar versión y estado sin crear un identificador invasivo.
- No cargar píxeles publicitarios en el lanzamiento salvo necesidad aprobada.

La revisión final corresponde al análisis jurídico/técnico del uso real, no al nombre comercial de la herramienta.

## Cuadro de mando inicial

### Semanal, durante lanzamiento

- Disponibilidad y errores de formulario.
- Envíos por segmento/fuente.
- Leads cualificados y motivo de no encaje.
- Tiempo de respuesta.
- Páginas de entrada y CTA.
- Consultas orgánicas nuevas.

### Mensual

- Conversión por audiencia y fuente.
- De lead a reunión/oportunidad.
- Contenidos que asisten conversiones.
- Consultas de marca/no marca.
- Indexación y Core Web Vitals.
- Consentimiento y salud de datos.
- Recomendaciones y decisiones tomadas.

## Objetivos numéricos

[POR VALIDAR] No fijar tasas arbitrarias sin línea base. Durante los primeros 30–60 días:

1. Establecer volumen y calidad base.
2. Comprobar que no se pierde ningún formulario.
3. Medir tiempo de respuesta.
4. Clasificar todos los leads.
5. Elegir objetivos trimestrales con datos.

## Control de calidad

- Plan de medición versionado.
- Debug en staging sin enviar datos a producción o con propiedad separada.
- Exclusión de tráfico interno cuando sea viable y proporcional.
- Prueba de eventos en navegadores y con rechazo/aceptación.
- Auditoría periódica de PII.
- Alertas de fallo del formulario.
- Retención mínima necesaria.
- Acceso por rol y salida de usuarios.

## Atribución

Usar una visión simple: primera fuente, última fuente y origen declarado en la conversación. Para ciclos B2B pequeños, la nota cualitativa del responsable comercial suele ser más informativa que un modelo algorítmico complejo.

## Preguntas pendientes

1. ¿Qué decisión se tomará con cada dato?
2. ¿Quién accede a analítica y leads?
3. ¿Qué herramienta y región se aprueban?
4. ¿Cuál será la retención?
5. ¿Qué SLA puede sostenerse?
6. ¿Cómo se devuelve a analítica la calidad del lead sin PII?
7. ¿Se usará publicidad o remarketing?
