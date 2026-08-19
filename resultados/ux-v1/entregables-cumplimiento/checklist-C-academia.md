# Academia Sports World (Proyecto C) — entregables, aprobaciones y hospedaje

**De:** Jorge Montiel · Gerencia de Marketing
**Para:** Área de Sistemas
**Asunto:** Proyecto C (Academia) — entregables del proveedor, aprobaciones y hospedaje, por etapa

Comparto con Sistemas el detalle del proyecto para coordinar lo que corresponde a su área.

## 1 · Calendario por etapas (10 semanas)

| Etapa | Entrega del proveedor | Aprueba SW | Dónde corre y cuándo |
|---|---|---|---|
| **Validación** (arranque) | Mapeo de la taxonomía maestra a los **7 componentes** y segmentación por tipo de club; cierre del listado de requerimientos. | **Valida el mapeo de la taxonomía y la segmentación** (condición para producir contenido). Entrega **métricas del CRM por asesor** y colaboración de marketing. | Nada. Staging del proveedor con acceso por login. |
| **Fase 1 · Módulos** | **7 lecciones (8–12 min) en 4 niveles**, con acreditación y bloqueo de nivel siguiente; segmentación de contenido por tipo de club. | Define el **mínimo aprobatorio por módulo**; valida contenido. | Se despliega la plataforma de módulos en el **servidor propio de SW para la Academia**, tras la aprobación del 50%. |
| **Fase 2 · Role-play** | Agente de voz que interpreta al cliente; selección adaptativa de escenarios por perfil y club; capa de evaluación contra los 7 componentes; repasos a los 7, 30 y 90 días y práctica semanal permanente. | — (requiere el motor de BES del Proyecto A operativo) | Opera en el servidor de la Academia de SW. |
| **Despliegue** | **Dashboard de readiness** (Fase 1 + Fase 2) por asesor, club, ciudad y nacional; calibración de línea base con métricas reales del CRM; arranque por grupos. | **Aprobación** total. | En el servidor de la Academia de SW. |

**Niveles de la Fase 1:** Nivel 1 · Fundamentos (2 lecciones) · Nivel 2 · Conversación consultiva (2) · Nivel 3 · Retención y contexto (2) · Nivel 4 · Adaptación por club (1, con variantes).

## 2 · Aportaciones a cargo de SW

- Validación del mapeo de la taxonomía y de la segmentación por tipo de club.
- **Servidor propio** donde opera la Academia (módulos, dashboard, historial de readiness), **independiente del servidor del sitio**.
- Mínimo aprobatorio de acreditación por módulo.
- Métricas reales del CRM por asesor (calibración).
- Colaboración de marketing (módulo de inteligencia competitiva por club).

## 3 · Dónde vive el código, cómo se revisa y cuándo pasa a SW

**Durante la construcción: en infraestructura del proveedor.** La plataforma de módulos, los escenarios y el dashboard corren en un **ambiente de staging** con **acceso para el área de Sistemas de SW por login restringido** (bitácora de acceso, source maps apagados). El código fuente, el código de servidor y la base de datos no se envían al navegador y no son descargables desde staging.

**Despliegue al servidor de la Academia de SW: contra aprobación y pago.** La Fase 1 se despliega en el servidor propio de la Academia tras la aprobación del 50%. La falta de pago faculta la **suspensión de entregas**.

**Entrega final: contra liquidación total.** El código fuente, los repositorios y la titularidad del **desarrollo específico de la Academia** se entregan al liquidarse el pago total. El **motor de BES es un Componente Preexistente del proveedor**: permanece en su titularidad, licenciado a SW solo según se incorpore en los entregables — no se transfiere.
