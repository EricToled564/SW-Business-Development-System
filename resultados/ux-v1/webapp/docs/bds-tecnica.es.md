# BDS · Estrategia Técnica
## Cómo se construye el sistema de captación multicanal

> **Proyecto B (BDS).** Describe la arquitectura técnica que agrega **WhatsApp, operadores humanos y enrutamiento en tiempo real** sobre el núcleo ya construido (cuestionario, experiencia ideal, middleware/CRM).

## Principio de reutilización

El BDS **no reescribe** el motor de captación: consume los mismos componentes del Proyecto A.

- **Motor de cuestionario y experiencia ideal** — **[Arquitectura de Experiencia · §2](#experience:2-el-cuestionario-como-nica-fuente-de-personalizacin)**.
- **Brief del asesor** (documento personalizado del comprador potencial con sugerencias de venta) — misma fase `briefing`, **[Arquitectura de Experiencia · §1.2](#experience:12-las-siete-fases)**.
- **Middleware y escritura idempotente al CRM** — **[Estrategia Técnica · §2](#technical:2-los-cuatro-datos-y-las-integraciones-con-sports-world)**.
- **Consola interna de captación** — **[Estrategia Técnica · §11](#technical:11-captacin-unificada-de-leads-sitio-bes-y-consola-interna)**.

Lo nuevo del BDS son las cuatro piezas siguientes.

## 1 · Integración con WhatsApp Business API

- Se usa la **WhatsApp Business API** oficial (no WhatsApp personal), con el **número oficial** que provee Sports World.
- Soporta **mensajería bidireccional** (entrante y saliente), **plantillas** aprobadas para el inicio de conversación y los recordatorios, y **enrutamiento a varios agentes** (operadores y "BES") sobre el mismo número.
- La conversación es **solo texto** (sin voz por WhatsApp).
- La landing de campañas puede abrir directamente el chat de WhatsApp (deep link `wa.me`) para arrancar la conversación con contexto.

## 2 · "BES" sobre WhatsApp (solo texto)

- Es el **mismo "BES"**, con la **misma base de conocimiento y la misma lógica** de club/clase/lead que el "BES" web, operando por **texto** en WhatsApp.
- Actúa como **respaldo** del operador humano: atiende de inmediato cuando no hay operador disponible o es fuera de horario.
- Aplica el **cuestionario**, arma la **experiencia ideal**, **agenda** la visita y **escribe el lead al CRM** por la misma vía idempotente.
- **Escala a un operador humano** con el contexto ya capturado cuando el usuario lo pide o el caso lo amerita.
- Corre en las **plataformas gestionadas de sus proveedores** (no en el servidor del sitio), igual que el "BES" web.

## 3 · Consola de operadores y asesores

- Es la **consola interna ya definida** (§11), habilitada para el rol de **operador**: bandeja de conversaciones de WhatsApp asignadas, aplicación del cuestionario asistida, generación de la experiencia ideal y **carga del lead al CRM**.
- **Acceso restringido** (autenticado, *password-protected*); la **lista de personal autorizado** —operadores telefónicos, asesores de club y quien Sports World designe— la define el cliente.
- El **asesor de club** usa la misma consola para los **walk-ins**.
- Incluye señal de **presencia/disponibilidad** del operador para el enrutamiento en tiempo real.

## 4 · Capa de enrutamiento en tiempo real

- Decide, por cada lead entrante, **quién atiende** según las reglas de **[Canales y enrutamiento](#bds-canales)** (human-first → "BES" de respaldo → escalación).
- Gestiona **colas** por club/zona, **asignación**, **rebote** por no-respuesta y **escalación** con contexto.
- Emite los **eventos** que alimentan el **[funnel del BDS](#bds-medicion)** (lead generado, primer contacto, cuestionario, agenda, etc.).

## Costos de operación a cargo del cliente

Igual que en el Proyecto A (Contrato, Cláusula Décima Cuarta), la operación del BDS conlleva costos que Sports World cubre directamente a los proveedores, no comprendidos en la contraprestación del Addendum:

- **Cuotas de WhatsApp Business API** — Meta cobra por conversación según su categoría (marketing, utilidad, servicio) y país; el volumen depende de las campañas y del tráfico de leads.
- **Consumo de "BES" por WhatsApp** — el modelo de razonamiento opera bajo el mismo esquema de costo directo ya establecido para el canal web.
- **Plantilla de operadores humanos** — costo interno de Sports World (personal propio); se dimensiona con el volumen de leads y los horarios de atención al cerrar el listado de requerimientos.

EL PRESTADOR entrega, igual que para BES, monitoreo de consumo y reporte mensual de los dos primeros conceptos.

## Seguridad y datos

- Mismos principios del Proyecto A: **HTTPS**, credenciales por canal seguro, **minimización y no retención** de datos personales una vez copiados al CRM (**[Seguridad del sitio](#seguridad)**).
- La escritura al CRM es **idempotente por sesión**: un lead atendido por un operador, por "BES" o en la consola llega **sin duplicados**.

## Dependencias a cargo de Sports World

- **Número oficial de WhatsApp Business** y aprobación de plantillas.
- **Plantilla de operadores**, sus **horarios** y la **lista de personal autorizado**.
- Acceso al **API estándar del CRM** (ya cubierto por el middleware del Proyecto A).
