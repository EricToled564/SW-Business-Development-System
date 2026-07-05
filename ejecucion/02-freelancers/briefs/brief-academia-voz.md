# Brief de sección · Developer Sr Agentes de Voz — Academia (Proyecto C, condicional)

> Documento individual. Los términos comerciales están en tu contrato, no aquí.
> Este rol se activa solo si Sports World firma el Addendum del Proyecto C.

## 1 · El proyecto completo (mapa para ubicarte)

Sports World (49 clubes de fitness en México) contrató tres proyectos:

- **Proyecto A — Rediseño web (8 semanas):** sitio nuevo de ~148 páginas con cuestionario
  inteligente (experiencia ideal por IA + brief por lead para el asesor), **BES** —el agente
  conversacional del sitio, texto y voz— y middleware al CRM.
- **Proyecto B — BDS por WhatsApp (condicional):** el motor de BES atendiendo leads por texto.
- **Proyecto C — Academia (10 semanas, TU proyecto):** capacitación de los **200 asesores
  comerciales**: Fase 1, módulos interactivos; **Fase 2, role-play de voz con IA** — práctica
  semanal donde el asesor conversa con un "cliente simulado" que habla, objeta y decide como
  un prospecto real, y recibe calificación y retroalimentación automática.

**Decisión de arquitectura ya tomada (no se rediseña):** el role-play corre **sobre el motor
de BES ya construido en el Proyecto A** — un solo motor con **10–15 persona cards
certificadas** (personalidades/escenarios parametrizados), no 10–15 agentes separados. La
disponibilidad del motor BES es condición contractual para arrancar la Fase 2.

**Regla de privacidad no negociable:** el sistema **nunca accede a conversaciones reales
asesor–cliente** (no se graban ni pasan por ninguna plataforma del proyecto) y **nada
conversacional se integra al CRM** — del CRM solo se leen métricas de resultado. El sistema
mejora por tres vías: las sesiones de práctica internas, esas métricas numéricas, y un canal
humano gobernado donde los asesores reportan objeciones nuevas de campo que pasan por la misma
certificación que los escenarios iniciales.

**Tablero:** (pendiente: se publicará desde el repositorio interno separado)

## 2 · Tu sección

Eres el **dueño técnico de la Fase 2: el sistema de role-play de voz de punta a punta**.

- Diseñas e implementas la **capa de role-play sobre el motor BES**: persona cards (perfil,
  motivaciones según la taxonomía, objeciones, temperamento, dificultad), gestor de sesiones
  de práctica y flujo de voz en tiempo real (plataforma tipo ElevenLabs).
- Implementas el **motor de calificación**: evalúa cada sesión contra las rúbricas certificadas
  (del diseñador instruccional) y genera retroalimentación accionable para el asesor.
- Construyes el **dashboard de progreso** (adherencia a la práctica semanal, dominio por
  escenario, evolución por asesor y por club) para los coordinadores del cliente.
- Cuidas costos de operación: la voz es el componente caro; latencia y minutos por sesión se
  monitorean desde el día uno.

## 3 · Lo que recibes (inputs)

| Input | De quién | Cuándo |
|---|---|---|
| Motor BES operativo + su documentación técnica | Equipo Proyecto A (Dev BES) | Condición de arranque de Fase 2 |
| Rúbricas de evaluación y escenarios/guiones certificados | Diseñador instruccional | Cierre de Fase 1 |
| Taxonomía de motivaciones documentada | Docs del proyecto | Kickoff C |
| Servidor/infraestructura del cliente para la plataforma | Cliente (vía dirección) | según plan C |

## 4 · Lo que entregas (outputs)

| Entregable | A quién | Cuándo |
|---|---|---|
| Capa de role-play sobre BES + 10–15 persona cards implementadas | Piloto con asesores | Fase 2 |
| Motor de calificación + retroalimentación automática | 200 asesores | Fase 2 |
| Dashboard de progreso para coordinadores | Cliente | Fase 2 |
| Canal gobernado de ingreso de objeciones nuevas (con certificación) | Diseñador instruccional + cliente | Cierre de C |

## 5 · Tus interacciones

- **Diseñador instruccional:** tu contraparte principal — sus rúbricas y escenarios son tu
  spec funcional; handoff formal al cerrar Fase 1 y ciclos cortos durante el piloto.
- **Dev BES del Proyecto A:** sesión de arquitectura al arrancar (cómo extender el motor sin
  romper la operación del sitio) y soporte puntual.
- **Cliente:** piloto con un grupo de asesores antes del despliegue a los 200.
- **Dirección:** calendario, accesos y decisiones de alcance.

## 6 · Fuera de tu alcance

Contenido pedagógico y certificación (diseñador instruccional), el sitio web y la operación
de BES del Proyecto A, el BDS del Proyecto B, cualquier integración conversacional al CRM
(prohibida por diseño), y términos comerciales de otros miembros del equipo.

## 7 · Herramientas

Tablero de la consola (arriba) — el tablero del Proyecto C se activa con el addendum; repo del
proyecto con PRs y presupuesto de calidad; llaves de IA de desarrollo separadas de las de
producción del cliente (nunca se mezclan).
