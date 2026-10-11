# 01 — Comprensión del producto

**Fuentes principales:** [S01–S05](00-source-map.md).  
**Propósito:** fijar una descripción estable que sirva a estrategia, copy, arquitectura y validación de claims.

## Definición de trabajo

[CONFIRMADO] GobernaIA es una plataforma SaaS para organizar la gobernanza, la trazabilidad y las evidencias asociadas al ciclo de vida de sistemas de IA. Cada sistema debe tener un expediente vivo que conecte decisiones, requisitos, controles, responsables, documentos, aprobaciones, cambios e incidentes.

[CONFIRMADO] No debe presentarse como una herramienta que, por sí sola, garantice el cumplimiento normativo, certifique un sistema o sustituya asesoramiento jurídico, técnico, de ciberseguridad o de protección de datos.

## La unidad funcional: el sistema de IA

La navegación y el relato comercial deben reflejar este recorrido:

1. Alta e inventario.
2. Clasificación legal.
3. Requisitos aplicables.
4. Controles.
5. Responsables.
6. Evidencias.
7. Aprobación.
8. Seguimiento y reevaluación.
9. Incidentes.
10. Auditoría y exportación.
11. Retirada, cuando corresponda.

[CONFIRMADO] La retirada aparece en la definición funcional más reciente, aunque debe verificarse su estado técnico antes de mostrarla como funcionalidad disponible.

## Tres planos que la web no debe confundir

### 1. Clasificación legal

[CONFIRMADO] Determina el recorrido y las obligaciones derivadas del Reglamento Europeo de IA. La definición más reciente distingue prohibición, alto riesgo, obligaciones de transparencia y riesgo mínimo. La relación con un modelo de propósito general constituye una dimensión adicional, independiente y potencialmente acumulativa.

[POR VALIDAR] Cualquier árbol de decisión público, ejemplo sectorial o fecha de aplicabilidad deberá revisarse jurídicamente justo antes de publicar.

### 2. Riesgo operativo

[CONFIRMADO] Es una valoración interna basada en impacto y probabilidad. Sirve para priorización y gestión de la organización, pero no reemplaza la clasificación jurídica.

[POR VALIDAR] La ubicación exacta de esta evaluación, escalas configurables y automatismos disponibles deben demostrarse en la versión que se vaya a enseñar.

### 3. Decisiones y autorizaciones

[CONFIRMADO] Hay tres conceptos distintos: aprobar evidencias, validar la clasificación y autorizar el servicio o sistema. Los documentos indican grados de implementación diferentes.

[POR VALIDAR] Deben definirse segregación de funciones, quién puede validar, si una persona puede proponer y aprobar la misma decisión, historial y reglas de reapertura.

## Modelo organizativo

### Empresa gestora

[CONFIRMADO] Administra la gobernanza de múltiples empresas clientes, obtiene una vista conjunta y entra después en el espacio de cada cliente. Trabaja con acceso delegado.

### Empresa gestionada

[CONFIRMADO] Es propietaria de sus datos de gobernanza. Puede aportar información factual, documentos y avisos de cambio. Sus permisos deben impedir que modifique decisiones especializadas reservadas a la gestora, y toda aportación debe quedar trazada.

[POR VALIDAR] La participación directa de usuarios de la empresa cliente aparece como necesidad definida, pero no está suficientemente acreditada como disponible.

### Empresa independiente

[CONFIRMADO] Puede utilizar GobernaIA con su propio equipo cuando cuenta con perfiles jurídicos, de cumplimiento, técnicos o profesionales capacitados. Según el caso, seguirá necesitando diagnóstico, formación o acompañamiento.

## Roles y asignaciones

[CONFIRMADO] Los roles base actuales son Administrador Global, Administrador y Usuario. “Responsable” y “aprobador” son asignaciones funcionales dentro de procesos o sistemas, no necesariamente roles globales de plataforma.

[POR VALIDAR] Antes de publicar una matriz de permisos deben probarse los límites por tipo de empresa, la delegación, la trazabilidad de cambios y el proceso protegido de cambio de gestora.

## Propiedad, delegación y portabilidad

[CONFIRMADO] Los datos pertenecen a la empresa cliente. La gestora dispone de acceso delegado para administrarlos.

[CONFIRMADO] El cambio de gestora debe poder hacerse sin pérdida de información y mediante una operación protegida.

[POR VALIDAR] Faltan reglas públicas sobre exportación, conservación, revocación de acceso, copias, responsabilidades y plazos al finalizar la relación.

## Carácter vivo de la gobernanza

[CONFIRMADO] La web debe explicar que el trabajo no termina al completar un formulario. Cambios de proveedor, modelo, finalidad, datos, uso o contexto pueden activar revisión y, cuando proceda, reclasificación. Este principio diferencia a GobernaIA de un cuestionario estático.

[POR VALIDAR] El versionado de reclasificaciones y el historial de decisiones aparecen como asuntos pendientes. No afirmar que existe trazabilidad completa de versiones hasta comprobarlo.

## Estado funcional: matriz de prudencia

| Capacidad | Definida | Observada en documentación/reuniones | Autorizada para claim público |
|---|---:|---:|---:|
| Inventario por sistema | Sí | Sí | [POR VALIDAR] |
| Modelo multiempresa | Sí | Sí, con cautelas | [POR VALIDAR] |
| Dashboard agregado de gestora | Sí | Mostrado en reunión | [POR VALIDAR] |
| Clasificación legal | Sí | Parcial/en evolución | [POR VALIDAR] |
| Riesgo operativo | Sí | Configuración descrita | [POR VALIDAR] |
| Evidencias | Sí | El informe de septiembre señalaba carencias | [POR VALIDAR] |
| Validación de clasificación | Sí | Indicada como implementada | [POR VALIDAR] |
| Aprobación de evidencias | Sí | Regla pendiente | [ROADMAP] hasta prueba |
| Autorización del servicio | Sí | No acreditada | [ROADMAP] |
| Seguimiento e incidentes | Sí | Necesidad prioritaria | [ROADMAP] hasta prueba |
| Auditoría/exportación | Sí | Objetivo funcional | [POR VALIDAR] |
| Cambio protegido de gestora | Sí | Modelo flexible; proceso pendiente | [ROADMAP] |
| Participación controlada del cliente | Sí | Necesidad acordada | [ROADMAP] hasta prueba |
| Retirada | Sí | En definición reciente | [ROADMAP] hasta prueba |

## Beneficios que sí pueden sostenerse conceptualmente

- Estructurar el trabajo de gobernanza por sistema y etapa.
- Centralizar información, responsables y evidencias.
- Dar coherencia a la gestión de múltiples clientes.
- Mantener un historial de aportaciones y decisiones, cuando la función esté verificada.
- Facilitar revisiones ante cambios.
- Preparar la documentación para revisión profesional, auditoría o exportación, sin prometer un resultado regulatorio.

## Claims que deben evitarse

- “Garantiza el cumplimiento del AI Act.”
- “Certifica tus sistemas de IA.”
- “Evita sanciones.”
- “Clasificación jurídica automática y definitiva.”
- “Cumple en minutos.”
- “Sustituye al abogado, DPO, auditor o especialista técnico.”
- “Todo el ciclo está automatizado” mientras no exista prueba de extremo a extremo.
- “La IA gobierna tu IA” si no hay una función real y explicable que lo sustente.

## Frase de control

> GobernaIA ayuda a convertir la gobernanza de sistemas de IA en un proceso operativo, trazable y revisable; las decisiones especializadas y la responsabilidad permanecen en las personas y organizaciones competentes.

