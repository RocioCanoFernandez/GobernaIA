# 15 — Estado real del producto proyectado a InproInnova (18-nov-2026)

Documento de correspondencia entre obligaciones legales del Reglamento Europeo de IA (AI Act) y funcionalidades de GobernaIA, extraído directamente de la validación técnica con Pepe Salgado (Dirección Técnica).

## Propósito
Cambiar el enfoque de comunicación: pasar de vender "pantallas sueltas de software" a vender **qué obligación legal del Reglamento de IA exige la norma y cómo GobernaIA la resuelve para el cliente**.

## Leyenda de Disponibilidad
- 🟢 **Disponible ya** — construido y probado en stage.
- 🟡 **Para la feria (18-nov)** — en desarrollo activo, se desbloquean en bloque al cerrar el motor de controles y aprobación.
- ⚪ **Fuera de alcance de la feria** — roadmap posterior planificado.

---

## 1. Mapeo: Obligación Legal vs. Funcionalidad de Cobertura

| Obligación Legal (Reglamento de IA) | Qué exige la norma | Cómo lo cubre GobernaIA | Estado Feria |
|---|---|---|---|
| **Gestión de riesgos (Art. 9)** | Proceso continuo durante todo el ciclo de vida | Controles asignados + Evidencias vinculadas + Aprobación segregada + Auditoría continua | 🟡 Para la feria |
| **Gobernanza de datos (Art. 10)** | Calidad, sesgos y representatividad de datasets | Control de calidad de datos + Evidencia de procedencia + Registro inmutable | 🟡 Para la feria |
| **Documentación técnica (Art. 11, Anexo IV)** | Dossier técnico auditable previo a puesta en servicio | Evidencias documentales obligatorias vinculadas al sistema | 🟡 Para la feria |
| **Registros automáticos (Art. 12)** | Trazabilidad y logs de funcionamiento | Registro de auditoría con cadena de hash criptográfica | 🟢 **Disponible ya** |
| **Transparencia (Art. 13 y Art. 50)** | Información de IA y avisos a usuarios | Clasificación de riesgo limitado + Control de avisos y evidencias de etiquetado | 🟡 Para la feria |
| **Supervisión humana (Art. 14)** | Capacidad de intervención y regla de cuatro ojos | Aprobación cruzada (aprobador distinto de quien sube la evidencia) | 🟡 Para la feria |
| **Precisión, solidez y ciberseguridad (Art. 15)** | Resiliencia frente a errores y ciberataques | Controles técnicos específicos de seguridad + Validación documental | 🟡 Para la feria |
| **Evaluación de Impacto en Derechos Fundamentales (EIDF, Art. 27)** | Preceptiva en sector público y servicios esenciales de alto riesgo | Control específico de EIDF + Flujo documental segregado | 🟡 Para la feria |
| **Vigilancia poscomercialización (Art. 72)** | Monitorización continua del rendimiento tras despliegue | Trazabilidad de cambios y caducidad de evidencias | 🟡 Para la feria |
| **Gestión de incidentes (Art. 73)** | Notificación y mitigación de fallos en producción | Vinculación del incidente al sistema y al control fallido | 🟡 Para la feria |
| **Clasificación legal objetiva (Art. 6, Anexo III)** | Determinación jurídica del régimen aplicable | Cuestionario en 2 dimensiones (Riesgo de uso + GPAI de terceros) con histórico | 🟢 **Disponible ya** |
| **Evaluación de riesgo operativo** | Apetito de riesgo propio de la organización | Matriz Impacto × Probabilidad (1 a 25) configurable por empresa | 🟢 **Disponible ya** |

---

## 2. Inventario de Funcionalidades (Vista Cliente)

### 🟢 Disponible ya
1. Inventario de Sistemas de IA (alta, ficha, proveedor/modelo).
2. Clasificación legal del AI Act (4 categorías + GPAI) con histórico versionado.
3. Evaluación de riesgo operativo (impacto × probabilidad).
4. Evidencias (carga y versionado de documentos).
5. Auditoría (registro con cadena de hash conectado a Clasificación y Evidencias).
6. Empresas, Usuarios y niveles de riesgo configurables por empresa.
7. Modelo multiempresa (Gestora / Gestionada), con datos aislados por empresa.

### 🟡 Para la feria (18-nov-2026)
1. Controles y asignación de responsables.
2. Control de EIDF para sistemas de Alto riesgo.
3. Auditoría conectada en Controles y en Aprobación.
4. Vínculo bidireccional entre Evidencia y Control.
5. Aprobación de evidencias (regla de cuatro ojos: aprobador distinto de quien sube).
6. Estado de "autorizado para producción".
7. Purga de auditoría por política de retención.
8. Pulido final de la pantalla de Auditoría.
9. Pruebas de aislamiento multiempresa y ensayo del recorrido de demo.

### ⚪ Fuera de alcance de la feria (Roadmap P2)
1. Alertas y notificaciones push/correo activas.
2. Seguimiento continuo pos-aprobación en tiempo real.
3. Módulo avanzado de Gestión de Incidentes en producción.
4. Módulo de Retirada segura y supresión de datos.
5. Generador automático de Avisos de Transparencia publicables.
6. Módulo LOPD de Retención de Datos.
7. Bandeja unificada "Mis Tareas".
