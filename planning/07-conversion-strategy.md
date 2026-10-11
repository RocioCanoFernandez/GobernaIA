# 07 — Estrategia de conversión

## Conversión principal

[HIPÓTESIS] **Conversación cualificada con una organización**. En la fase actual, “Hablar con el equipo” es más honesto que “Comprar” y más flexible que “Solicitar demo” si la disponibilidad de demostraciones aún no está cerrada.

La etiqueta puede evolucionar a `Solicitar una demostración` cuando exista proceso, calendario, versión estable y responsable de seguimiento.

## Conversiones secundarias

- Seguir el lanzamiento/novedades con consentimiento de marketing separado.
- Descargar o consultar un recurso de autoridad, sin exigir datos cuando no sea necesario.
- Registrar interés específico tras un evento confirmado.
- Contactar por colaboración, en una ruta diferenciada para no contaminar leads comerciales.

## Embudos

### Organización

```text
Entrada → página de audiencia → plataforma/prueba → CTA
→ selección de tipo e intención → formulario breve → confirmación
→ revisión humana → respuesta → reunión → oportunidad
```

### Persona interesada

```text
Entrada → contenido/FAQ → “Seguir el lanzamiento”
→ email + consentimiento → doble confirmación, si se adopta
→ comunicación relevante → baja accesible
```

## CTAs

### Principal

`Hablar con el equipo`

### Secundarios

- `Conocer cómo funciona`
- `Ver GobernaIA para gestoras`
- `Evaluar el encaje para mi empresa`
- `Seguir el lanzamiento`

### Después de confirmar demo

- `Solicitar una demostración`

### Evitar

- `Empieza gratis` sin producto autoservicio.
- `Cumple ahora` por promesa jurídica.
- `Obtén tu certificación` por falsedad de categoría.
- `Reserva tu plaza` sin cupos o evento real.

## Formulario recomendado

[HIPÓTESIS] Un único formulario con selector inicial y campos condicionales reduce duplicación, mantiene dos intenciones separadas y simplifica analítica.

### Selector

- `Represento a una organización y quiero hablar con el equipo`.
- `Quiero recibir novedades sobre el lanzamiento`.
- `Quiero proponer una colaboración`.

### Campos para organización

| Campo | Condición | Motivo |
|---|---|---|
| Nombre | Obligatorio | Contacto |
| Email profesional | Obligatorio | Respuesta |
| Organización | Obligatorio | Cualificación |
| Cargo/función | Obligatorio o select | Encaje y personalización |
| Tipo de organización | Obligatorio | Segmentación |
| Necesidad principal | Obligatorio, select | Enrutado |
| Número aproximado de clientes o sistemas | Opcional | Potencial y preparación |
| Mensaje | Opcional | Contexto libre |
| Aceptación de privacidad | Obligatorio | Información/legitimación |
| Comunicaciones comerciales | Separado y opcional | Consentimiento específico |

No pedir teléfono como obligatorio. No pedir datos de sistemas concretos, clientes, salud, biometría, secretos o documentación sensible en el formulario inicial.

### Campos para novedades

- Email obligatorio.
- Nombre opcional.
- Perfil/interés opcional.
- Consentimiento de comunicaciones obligatorio para esta finalidad.

### Colaboraciones

Nombre, email profesional, organización, tipo de propuesta y mensaje. Advertencia para no remitir información confidencial antes de un canal adecuado.

## Mensaje de privacidad junto al formulario

Debe resumir responsable, finalidad, base jurídica, destinatarios/proveedores, conservación, derechos y enlace a información completa. El texto exacto se redactará después de definir entidad, herramientas y flujo.

## Página de confirmación

- Confirmar recepción sin prometer un plazo que no pueda cumplirse.
- Si se acuerda SLA: “Te responderemos en dos días laborables”.
- Explicar quién contactará y por qué canal.
- Ofrecer una pieza útil o la página de plataforma.
- Incluir medición de conversión sin exponer PII.
- No mostrar email, nombre o mensaje en URL.

## Gestión del lead

### Etiquetas mínimas

- Fuente y campaña.
- Página de origen.
- Segmento.
- Tipo de organización.
- Rol.
- Intención.
- Necesidad.
- Estado del lead.
- Responsable interno.
- Fechas/versión de avisos y consentimientos.
- Evento asociado, si procede.

### Estados sugeridos

`nuevo → revisado → cualificado → reunión propuesta → reunión realizada → oportunidad → sin encaje → cerrado`

El estado `sin encaje` debe permitir aprender por qué: falta de capacidad interna, necesidad distinta, producto inmaduro, presupuesto, plazo u otro.

## Enrutado propuesto

- Gestoras y empresa independiente: responsable comercial/producto.
- Pregunta jurídica: comercial primero; derivación especializada según acuerdo y sin prometer asesoramiento gratuito.
- Privacidad: responsable de privacidad designado; no atribuir públicamente esta función a ForLOPD en la primera web.
- Propuestas de entidades colaboradoras: responsable de alianzas.
- Soporte de usuario existente: canal separado cuando exista.

[POR VALIDAR] Nombres, SLA, CRM, correo receptor, registro de actividades y acceso a datos.

## Experimentación

### Primero

- Medir visitas por segmento, clic en CTA, inicio, error y envío.
- Entrevistar a contactos cualificados sobre comprensión/objeciones.
- Revisar búsquedas internas o preguntas recibidas.

### Después de volumen suficiente

- Mensaje centrado en multiempresa frente a expediente vivo.
- `Hablar con el equipo` frente a `Solicitar información`.
- Formulario en página frente a paso intermedio.

No hacer tests A/B con pocas conversiones ni optimizar por clics si baja la calidad del lead.

## Definición de lead cualificado

[HIPÓTESIS] Organización identificable, función relevante, problema de gobernanza real, expectativa compatible con el producto y voluntad de conversación. El volumen de sistemas/clientes ayuda, pero no debe excluir pilotos estratégicos.

## Preguntas de conversión pendientes

1. ¿Hay demostraciones disponibles y quién las realiza?
2. ¿Qué plazo de respuesta es sostenible?
3. ¿Qué herramienta recibirá los datos?
4. ¿Qué entidades acceden a los leads?
5. ¿Se enviarán comunicaciones posteriores y con qué base?
6. ¿Existe un perfil de cliente mínimo para priorización?
7. ¿Se quiere captar contactos durante InproInnova y cómo se documentará el origen?

