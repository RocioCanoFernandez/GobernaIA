# 10 — Estrategia GEO/AEO

## Definición operativa

GEO/AEO se usa aquí para mejorar la posibilidad de que buscadores, asistentes y sistemas de respuesta comprendan, recuperen y atribuyan correctamente el contenido. No existe una técnica que garantice una mención, una cita o una posición en respuestas generativas.

## Tres niveles de certeza

### Prácticas consolidadas

- Sitio rastreable, indexable y rápido.
- Contenido principal en HTML legible.
- Estructura semántica clara y enlaces internos.
- Títulos y respuestas que describen la cuestión con precisión.
- Autor, organización, fecha y actualización visibles.
- Fuentes primarias enlazadas junto a afirmaciones relevantes.
- Datos estructurados coherentes con el contenido visible.
- Identidad consistente de marca, personas y organizaciones.

Google indica que sus experiencias de IA utilizan los fundamentos habituales de SEO y que no requieren archivos ni marcado especiales ([W11 y W12](00-source-map.md)).

### Hipótesis razonables

- Definiciones breves al inicio de una página facilitan extracción y comprensión.
- Comparativas explícitas ayudan en preguntas de contraste.
- Un glosario mantenido reduce ambigüedad terminológica.
- Las páginas de metodología y estado elevan la verificabilidad.
- Contenidos firmados y revisados por especialistas refuerzan la atribución.
- Una tabla de fechas y cambios normativos puede ser útil si se mantiene.

Estas prácticas mejoran la calidad aunque no produzcan citas de IA.

### Experimentos

- Publicar `llms.txt`.
- Crear feeds específicos para modelos.
- Formatos de “respuesta para IA” separados de la página normal.
- Medir referencias manualmente en distintos asistentes.

[HIPÓTESIS] No priorizar `llms.txt` en el lanzamiento. Google declara que no se necesita un archivo especial y el estándar no ofrece garantía. Considerarlo después como experimento barato, no como dependencia.

## Arquitectura de respuestas

Cada recurso importante debería incluir:

1. Pregunta o término en lenguaje natural.
2. Respuesta directa de 40–80 palabras.
3. Desarrollo con matices.
4. Ejemplo o tabla cuando ayude.
5. Límites y condiciones.
6. Fuentes primarias.
7. Autor/revisor y fecha.
8. Enlaces a conceptos relacionados.

## Entidades que deben quedar claras

### GobernaIA

- Nombre exacto y variante de marca.
- Entidad jurídica titular.
- Descripción corta estable.
- País/mercado.
- URL canónica y perfiles oficiales.
- Producto frente a servicios de colaboradores.

[POR VALIDAR] Entidad jurídica, dominio, perfiles y uso registral de marca.

### Personas

Nombre, cargo autorizado, bio coherente, página propia o sección, perfil externo y relación exacta con el producto. No crear `Person` para perfiles aún no confirmados.

### Organizaciones relacionadas

Explicar de forma literal si una organización dirige, desarrolla, colabora, valida, asesora o solo está en conversación. Evitar el término genérico “partner” cuando oscurezca el estado.

## Contenidos con alta utilidad de respuesta

1. `Qué es la gobernanza de IA`.
2. `Clasificación legal y riesgo operativo no son lo mismo`.
3. `Qué cambia cuando una consultora gestiona varios clientes`.
4. `Qué información debe incluir un inventario de sistemas de IA`.
5. `Qué cambios pueden exigir revisar un sistema de IA`.
6. `Qué significa evidencia en gobernanza de IA`.
7. `Qué puede aportar una empresa cliente y qué decide la gestora`.
8. `Qué hace y qué no hace GobernaIA`.

## Formatos

- Definiciones originales y citables.
- Tablas de diferencias.
- Pasos y checklists con alcance.
- Diagramas accesibles acompañados de texto.
- FAQ reales.
- Glosario.
- Historial de actualización.
- Casos anonimizados con método y límites.

Evitar generar muchas páginas débiles para cubrir variantes de una misma pregunta.

## Plantilla de contenido experto

```text
Título descriptivo
Respuesta breve
Por qué importa
Conceptos y diferencias
Proceso o criterios
Ejemplo
Qué debe revisar un profesional
Fuentes oficiales
Autor / revisor / última actualización
Contenido relacionado
```

## Señales de autoridad

- Citar el Reglamento y fuentes oficiales, no artículos de terceros como base única.
- Identificar quién revisó cada contenido y desde qué especialidad.
- Mostrar correcciones y fecha de actualización.
- Separar interpretación de texto normativo.
- Incluir alcance territorial y temporal.
- No hacer afirmaciones de cliente, validación o resultado sin prueba.

## Seguimiento

### Métricas fiables

- Indexación y consultas en Search Console.
- Tráfico orgánico a contenidos de pregunta.
- Enlaces/menciones de terceros.
- Conversiones asistidas.
- Consultas de marca.

### Métricas experimentales

- Presencia y exactitud de la marca en una batería fija de preguntas a asistentes.
- Fuentes citadas por cada sistema y fecha.
- Errores recurrentes sobre producto, equipo o capacidades.
- Tráfico referido desde interfaces de IA cuando sea identificable.

No reportar “share of voice de IA” como una cifra sólida sin metodología, muestra y repetibilidad.

## Batería de pruebas trimestral

- ¿Qué es GobernaIA?
- ¿Qué plataformas existen para gobernanza de IA en España?
- ¿Cómo puede una consultora gestionar el AI Act para varios clientes?
- ¿Cuál es la diferencia entre clasificación legal y riesgo operativo en IA?
- ¿Quién está detrás de GobernaIA?

Registrar fecha, modelo, respuesta, fuente y exactitud. Corregir la web solo cuando el error revele una ambigüedad real; no perseguir cambios aleatorios de un modelo.

## Riesgos

- Presentar especulación GEO como hecho.
- Crear contenido artificialmente fragmentado.
- Citar fuentes sin revisar vigencia.
- Publicar identidades/relaciones no autorizadas y amplificar el error.
- Convertir FAQs en texto repetitivo.
- Confundir legibilidad para máquinas con lenguaje robótico para personas.

