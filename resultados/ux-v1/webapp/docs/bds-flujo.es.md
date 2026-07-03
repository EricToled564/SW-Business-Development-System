# BDS · Flujo de conversión
## La arquitectura del proceso, de principio a fin

> **Proyecto B (BDS).** Este documento describe el recorrido completo del lead y el **árbol de enrutamiento** que decide quién lo atiende. Reutiliza el cuestionario y la escritura al CRM del proyecto del sitio; no los redefine.

## Los cuatro puntos de entrada

Un lead puede entrar al BDS por cualquiera de estos orígenes, y **todos convergen** en el mismo cuestionario y la misma escritura al CRM:

1. **Campaña (redes sociales).** El anuncio lleva a una **landing con el cuestionario** (no un formulario pasivo). Es el origen principal hoy.
2. **WhatsApp entrante.** El usuario escribe al número de WhatsApp de Sports World (por el anuncio, por la ficha de Google, por el sitio).
3. **Walk-in (asesor de club).** Un prospecto llega al club; el asesor lo captura desde la **consola interna**.
4. **Sitio público / "BES" web.** El flujo de experiencia ideal del Proyecto A (ya documentado) alimenta el mismo pipeline.

## El recorrido end-to-end

1. **Entrada.** El lead llega por uno de los cuatro orígenes.
2. **Enrutamiento en tiempo real.** El sistema decide **quién atiende** según disponibilidad y horario (árbol de decisión más abajo).
3. **Cuestionario.** El operador humano, "BES" o el asesor **aplican el mismo cuestionario** de experiencia ideal.
4. **Experiencia ideal.** Se genera la recomendación (club, clases, plan) con los datos reales del CRM (vía el middleware) y el **brief del asesor** —documento personalizado del comprador potencial, con sugerencias de venta— por la misma fase `briefing` ya documentada en **[Arquitectura de Experiencia · §1.2](#experience:12-las-siete-fases)**.
5. **Agenda.** Se **agenda la visita guiada en el momento** (día y hora dentro del horario de atención del club).
6. **Escritura al CRM.** El lead cualificado —perfil, club, visita— se registra en el CRM por la **misma escritura idempotente** que usa el sitio (sin duplicados).
7. **Confirmación y recordatorios.** El prospecto recibe la confirmación; se disparan los **2 recordatorios por WhatsApp** (24 h y 2 h antes); el asesor asignado recibe el **brief del comprador potencial** antes de la visita.
8. **Medición.** Cada transición alimenta el **funnel del BDS** (ver [Medición](#bds-medicion)).

## El árbol de enrutamiento (human-first con respaldo de "BES")

Cuando entra un lead que requiere atención conversacional (orígenes 1, 2 y 4), el sistema evalúa, **en este orden**:

1. **¿Hay un operador humano disponible y en horario de atención?**
   - **Sí →** se asigna a un **operador humano por WhatsApp**, que aplica el cuestionario y agenda en tiempo real.
   - **No →** siguiente paso.
2. **¿Está fuera de horario, o todos los operadores están ocupados?**
   - **Sí →** **"BES" por WhatsApp (solo texto)** atiende de inmediato: aplica el cuestionario, arma la experiencia ideal y agenda la visita.
3. **Escalación.** Durante una conversación de "BES", si el usuario lo pide o el caso lo amerita, "BES" **transfiere al operador humano** (o agenda una devolución de llamada), sin perder el contexto ya capturado.

El **walk-in (origen 3)** no pasa por el árbol: el **asesor de club** atiende directamente desde la **consola interna**, con el mismo cuestionario.

> **Regla de oro:** ningún lead se queda sin atención inmediata. Si no hay humano, hay "BES"; si "BES" no basta, escala a humano. El objetivo es **cero espera**.

## Qué se reutiliza (sin duplicar)

- El **cuestionario** y la **lógica de experiencia ideal**: **[Arquitectura de Experiencia · §2](#experience:2-el-cuestionario-como-nica-fuente-de-personalizacin)**.
- La **consola interna** de captación: **[Estrategia Técnica · §11](#technical:11-captacin-unificada-de-leads-sitio-bes-y-consola-interna)**.
- El **middleware y la escritura idempotente al CRM**: **[Estrategia Técnica · §2](#technical:2-los-cuatro-datos-y-las-integraciones-con-sports-world)**.

Lo que el BDS **agrega** es el **canal WhatsApp**, la **capa de operadores humanos** y el **enrutamiento en tiempo real** — detallados en [Canales y enrutamiento](#bds-canales) y en la [Estrategia Técnica del BDS](#bds-tecnica).
