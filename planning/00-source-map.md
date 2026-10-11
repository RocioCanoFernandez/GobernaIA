# 00 — Mapa de fuentes y jerarquía de evidencia

**Fecha de corte:** 11/10/2026  
**Objeto:** dejar trazabilidad de las conclusiones de la Fase 1 y evitar que una fuente antigua, una conversación comercial o una intención futura se conviertan en una afirmación pública.

## Criterio de precedencia

Cuando dos fuentes entren en conflicto, se aplicará este orden:

1. Decisiones posteriores a la reunión con RZS del 01/10/2026.
2. Definición de producto de finales de septiembre de 2026.
3. Reuniones de desarrollo con Pepe.
4. Documentación histórica de etapas anteriores.

Además, una fuente pública acredita un dato profesional, pero **no acredita por sí sola** que una persona forme parte de GobernaIA, que autorice el uso de su imagen o que una entidad permita mostrar su logotipo.

## Fuentes internas prioritarias

| ID | Fuente | Fecha/contexto | Qué acredita | Límites y advertencias |
|---|---|---|---|---|
| S01 | `NUEVA FASE/GobernaIA.Definicion.ClasificacionLegal.md` | posterior a la definición base | Modelo de dos dimensiones, recorridos por clase, validación humana, once etapas con retirada, estado de decisiones y riesgos | Documento funcional; verificar implementación antes de prometer disponibilidad |
| S02 | `NUEVA FASE/GobernaIA.Definicion.pdf` | 17/09/2026 | Arquitectura por ciclo de vida, roles, modelo multiempresa, riesgo operativo y visión funcional | Mezcla GPAI con categorías legales en un punto; S01 prevalece en esa materia |
| S03 | `NUEVA FASE/Conclusión ejecutiva.odt` | 16/09/2026 | Auditoría del MVP, carencias, cautela con “compliance”, prioridades funcionales | Fotografía histórica; no prueba el estado actual del software |
| S04 | `NUEVA FASE/Reunión RSZ Abogados 01_10.txt` | 01/10/2026 | Orientación a gestoras, necesidad de especialización, colaboración RZS, casos reales y carácter vivo de la gobernanza | Transcripción; no convierte propuestas económicas o societarias en acuerdos cerrados |
| S05 | `NUEVA FASE/Transcripcion_REUNION_PEPE.txt` | 16/09/2026 | Modelo de empresas, dashboard, reasignación, permisos y responsabilidades de producto/desarrollo | Parte del contenido describe demostraciones o trabajo en curso; verificar producción |
| S06 | `NUEVA FASE/transcripcion_reunion_rocio_lucile.md` | 17/09/2026 | Interlocución con SGS, presentación del equipo y planes iniciales de evento | SGS era una posibilidad; no acredita partnership ni participación en evento |
| S07 | `NUEVA FASE/Partners actuales.txt` | síntesis interna | Mapa orientativo de colaboradores y sus ámbitos | Fuente secundaria; varios estados necesitan corrección con el contexto maestro |
| S08 | `NUEVA FASE/Resumen del Proyecto Automatización.txt` | proyecto Verum | Capacidad/caso adyacente de automatización | No es evidencia de funcionalidad de GobernaIA; no debe mezclarse con el producto |
| S09 | `NUEVA FASE/WhatsApp Image 2026-10-02...jpeg` | 02/10/2026 | Representación visual de recorridos por clasificación | Material de trabajo; no es un diseño final ni prueba de implementación |
| S10 | `ANTIGUO ENFOQUE/analisis_proyecto_gobernaia.md` | 27/02/2026 | Historia del MVP y supuestos iniciales | [ENFOQUE ANTERIOR] Centrado en PYME, porcentaje de compliance, packs y arquitectura previa |
| S11 | `ANTIGUO ENFOQUE/modelo_reparto_socios_app_gobernanza_ia.md` | etapa anterior | Propuesta histórica de socios y reparto | [ENFOQUE ANTERIOR] No acredita propiedad, porcentajes ni estructura vigente |
| S12 | `ANTIGUO ENFOQUE/GobernaIA_Amal_Review/src/App.jsx` | septiembre de 2026 | Cuestionario de validación jurídica y asuntos pendientes | No contiene las respuestas de Amal ni una validación concluida |

> Nota: los duplicados incluidos en el espejo local `sources/` fueron contrastados con `NUEVA FASE`. Se usa como referencia principal la copia del repositorio del proyecto por ser la estructura que recibirá esta planificación.

## Contexto maestro del proyecto

El archivo de instrucciones del proyecto, actualizado el 05/10/2026, se trata como la consolidación más reciente para: definición del producto, prioridad de gestoras, propiedad de los datos, estados de colaboraciones, separación RZS/ForLOPD/SGS/AEIMET, rol de SeviAI y situación no cerrada con Pepe.

[CONFIRMADO] Este contexto prevalece sobre redacciones incompatibles de S07, S10 o S11.

## Fuentes públicas y oficiales

| ID | Fuente | Uso previsto | Cautela |
|---|---|---|---|
| W01 | [Congreso de los Diputados — Proyecto 121/000096](https://www.congreso.es/es/proyectos-de-ley?_iniciativas_id=121%2F000096&_iniciativas_legislatura=XV&_iniciativas_mode=mostrarDetalle&p_p_id=iniciativas&p_p_lifecycle=0&p_p_mode=view) | Estado parlamentario de la ley orgánica española | Revisar de nuevo en la fecha de publicación; a 11/10/2026 no consta como aprobada |
| W02 | [Comisión Europea — marco regulatorio de IA](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) | Calendario y descripción general del Reglamento de IA | Enlazar también el texto jurídico cuando se haga una afirmación jurídica precisa |
| W03 | [Comisión Europea — entrada en vigor del AI Omnibus](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force) | Ajustes del calendario aplicable | Contenido cambiante; revisión jurídica antes de publicar fechas |
| W04 | [InproInnova 2026 — Diputación de Sevilla](https://inpro.dipusevilla.es/actualidad/noticias/Inpro-situa-en-el-centro-de-la-XIII-edicion-de-InproInnova-2026-la-inteligencia-artificial-las-plataformas-de-inteligencia-turistica-y-la-transformacion-digital-de-los-municipios-00001/) | Fecha, sede y temática del evento | No acredita que GobernaIA sea participante o expositor |
| W05 | [RZS — Amal Ezzeddine](https://www.rzs.es/amal-ezzeddine/) | Datos profesionales públicos | Amal fue confirmada por la dirección como integrante del núcleo de cuatro personas; cargo, bio y permiso de publicación siguen pendientes |
| W06 | [RZS — Natalia Álvarez](https://www.rzs.es/natalia-alvarez/) | Datos profesionales públicos | Natalia fue confirmada por la dirección como integrante del núcleo de cuatro personas; cargo, bio y permiso de publicación siguen pendientes |
| W07 | [RZS — Derecho Digital e IA](https://www.rzs.es/derecho-digital-e-inteligencia-artificial/) | Ámbito jurídico de RZS | No convierte la colaboración en aval o certificación |
| W08 | [Tarsis Universe — Pepe Salgado Pérez](https://www.tarsisuniverse.com/) | Perfil técnico público | Confirmar cargo y redacción dentro de GobernaIA |
| W09 | [SeviAI — sobre Rocío](https://www.seviai.es/sobre-mi/) | Perfil profesional público | Confirmar qué datos y marcas se reutilizarán |
| W10 | [Universidad de Sevilla — conferencia de Rocío Cano](https://institucional.us.es/docpsicologia/conferencia_blanco/) | Corroboración externa de perfil | Fuente secundaria para la web de GobernaIA |
| W11 | [Google Search — funciones de IA](https://developers.google.com/search/docs/appearance/ai-features) | Recomendaciones SEO para experiencias de IA | Google no promete inclusión ni exige archivos especiales |
| W12 | [Google Search — guía de optimización para IA](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) | GEO/AEO y contenidos expertos | Tratar como guía de buscador, no como garantía de citación |
| W13 | [Google — datos de organización](https://developers.google.com/search/docs/appearance/structured-data/organization) | Marcado estructurado | Debe coincidir con contenido visible |
| W14 | [Astro — renderizado bajo demanda](https://docs.astro.build/en/guides/on-demand-rendering/) | Recomendación técnica | La elección definitiva depende de hosting, edición y formularios |
| W15 | [AEPD — guía sobre cookies](https://www.aepd.es/guias/guia-cookies.pdf) | Consentimiento y configuración de analítica | Requiere revisión jurídica del caso real |
| W16 | [RGPD, artículo 13 — EUR-Lex](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A32016R0679) | Información de privacidad al recoger datos | Completar con responsables, encargados y flujos reales |

## Conflictos resueltos

### Público prioritario

- [ENFOQUE ANTERIOR] S10 proponía un MVP principalmente para PYMEs y autodiagnóstico.
- [CONFIRMADO] S04 y el contexto maestro desplazan la prioridad hacia gestoras y reservan la vía independiente para organizaciones con capacidad interna.

### “Compliance” frente a gobernanza

- [ENFOQUE ANTERIOR] Aparece un porcentaje de “compliance” y lenguaje que podría interpretarse como cumplimiento garantizado.
- [CONFIRMADO] S03 ordena sustituirlo por cobertura/evaluación y el contexto maestro define una plataforma de apoyo, no una garantía ni asesoramiento sustitutivo.

### Clasificación y riesgo

- [POR VALIDAR] S02 presenta una primera taxonomía que puede inducir a tratar GPAI como categoría del mismo plano.
- [CONFIRMADO] S01 separa la clase jurídica del sistema y su relación con un modelo de propósito general; además mantiene independiente el riesgo operativo.

### Equipo y entidades colaboradoras

- [ENFOQUE ANTERIOR] S07 y S11 contienen redacciones que pueden sonar a partnership o estructura cerrada.
- [CONFIRMADO] Rocío Cano, Pepe Salgado, Amal Ezzeddine y Natalia Álvarez forman el núcleo que desarrolla la nueva fase de GobernaIA. Esta pertenencia al proyecto no determina por sí sola propiedad, porcentajes, relación laboral o cargo societario.
- [CONFIRMADO] RZS será visible en la primera web mediante su logotipo y el protagonismo de Amal y Natalia. ForLOPD no aparecerá en esta etapa, aunque su relación interna histórica siga documentada. Otras entidades solo se mostrarán más adelante tras confirmar su relación, el texto y el permiso de marca; SGS y AEIMET continúan siendo potenciales.

## Inventario y cobertura

Se revisaron los nueve elementos de `NUEVA FASE` y se inventariaron 483 ficheros relevantes del área `ANTIGUO ENFOQUE`, excluyendo dependencias y artefactos de compilación. En el material histórico se priorizaron los documentos capaces de alterar decisiones de mercado, producto, equipo o claims. No se ha tratado el código histórico como prueba del estado actual de producción.

## Regla para futuras actualizaciones

Toda afirmación que vaya a la web debe registrar: texto propuesto, fuente, fecha de verificación, propietario de la aprobación y estado de producto. Los cambios jurídicos deben revisarse con fuente oficial y validación profesional antes de publicar.

