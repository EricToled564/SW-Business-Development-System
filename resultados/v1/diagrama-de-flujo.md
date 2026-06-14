# Diagramas de flujo — Experiencia Ideal · Sports World

Diagramas normativos de extremo a extremo. Cada diagrama es la representación visual de una sección del UX Spec; ante cualquier duda de detalle, gobierna el texto de la sección citada.

Índice:
1. Flujo maestro — de la búsqueda en Google a la visita guiada
2. Máquina de estados de la aplicación (fases)
3. Cuestionario adaptativo «Diseña tu experiencia» (Q1–Q19)
4. Motor de resultado — resolución de bloques, filtro de seguridad y ranking de clases
5. Generación de copy y armado del lead (una sola llamada al modelo)
6. Calificación y enrutamiento del lead (CRM)

---

## 1. Flujo maestro — de la búsqueda a la visita guiada

Recorrido completo: descubrimiento por SEO, cualificación con el cuestionario, conversión y cierre humano. Las cuatro puertas de entrada convergen en el mismo destino.

```mermaid
flowchart TD
    G["Búsqueda en Google"] --> RT{"Ruteo por intención<br/>(§3.7)"}

    RT -->|"marca + ubicación"| CLUB["Página de club"]
    RT -->|"clase"| CLASE["Página de clase"]
    RT -->|"amenidad + ubicación"| AME["Hub de amenidad"]
    RT -->|"objetivo / bajar de peso"| HUB["Hub de objetivo"]
    RT -->|"gym cerca de mí"| GEO["Club más cercano<br/>por geolocalización"]
    RT -->|"info operativa"| HOME["Home + BES"]

    CLUB --> PRE["Pre-llenado por aterrizaje<br/>e inferencia de búsqueda (§4.4–4.5)"]
    CLASE --> PRE
    AME --> PRE
    HUB --> PRE
    GEO --> PRE
    HOME --> PRE

    PRE --> INV["Invitación no bloqueante<br/>«Diseña tu experiencia» (§6.4)"]
    INV --> CUEST["Cuestionario Q1–Q19<br/>adaptativo (§4)"]
    CUEST --> MOTOR["Motor de resultado (§5)"]
    MOTOR --> RES["Experiencia Ideal:<br/>3 bloques + Club Ideal (§6.17)"]
    RES --> CC["Captura de contacto:<br/>apellido + celular + correo (§6.18)"]
    CC --> AG["Agenda de visita guiada<br/>confirmación en tiempo real (§6.19)"]
    AG --> BRIEF["Brief del Asesor<br/>(Apéndice D)"]
    BRIEF --> CRM["CRM: lead calificado + enrutado<br/>(anexo-ingenieria-crm)"]
    CRM --> VISITA["Visita guiada en el club"]

    BES["BES — asistente 24/7 (§6.3)"] -.atiende dudas en cualquier punto.-> PRE
    BES -.confirma cita / recordatorios.-> AG
```

---

## 2. Máquina de estados de la aplicación (fases)

Fases del sistema y todas sus transiciones, incluido el manejo de error. No solo el camino feliz.

```mermaid
stateDiagram-v2
    [*] --> welcome
    welcome --> questionnaire: inicia «Diseña tu experiencia»
    questionnaire --> questionnaire: avanza / retrocede pregunta
    questionnaire --> error: abandono (se mide drop-off)
    questionnaire --> loading: completa Q1–Q19
    loading --> result: respuesta válida
    loading --> result_fallback: respuesta inválida (degradación segura)
    loading --> error: timeout o red
    result --> contact_capture: «Agendar»
    result_fallback --> contact_capture: «Agendar»
    contact_capture --> result: «Volver»
    contact_capture --> schedule: 3 campos válidos
    schedule --> contact_capture: «Volver»
    schedule --> briefing: cita confirmada
    briefing --> [*]
    error --> questionnaire: reintentar
    error --> result: reintentar
```

---

## 3. Cuestionario adaptativo «Diseña tu experiencia» (Q1–Q19)

15 preguntas base siempre visibles + 6 condicionales que se insertan según respuestas previas. Rango real: 15 a 21 preguntas. Detalle normativo en §4.

```mermaid
flowchart TD
    START(["Inicio del cuestionario"]) --> BASE["Base: Q1–Q10, Q12, Q13, Q14, Q15, Q16"]

    Q10{"Q10 = «Regreso<br/>después de una pausa»?"}
    BASE --> Q10
    Q10 -->|sí| Q11["+ Q11 duración de la pausa"]
    Q10 -->|no| C2
    Q11 --> C2

    C2{"Q2 ≠ «Hombre»?"}
    C2 -->|sí| Q12b["+ Q12b embarazo / posparto"]
    C2 -->|no| C3
    Q12b --> C3

    C3{"Q14 incluye hijos?<br/>(«Yo y mis hijos» /<br/>«La familia completa»)"}
    C3 -->|sí| Q14b["+ Q14b ¿hijos menores de 12?"]
    C3 -->|no| C4
    Q14b --> C4

    C4{"Q4 incluye<br/>«Bajar de peso»?"}
    C4 -->|sí| QW["+ Q17 tratamiento · Q18 peso/estatura/cintura · Q19 objetivo de cambio<br/>+ modal de aviso de salud (YMYL) antes del resultado"]
    C4 -->|no| FIN
    QW --> FIN(["Cuestionario completo → Motor de resultado"])
```

---

## 4. Motor de resultado — resolución de bloques, seguridad y ranking

Cómo se arma la Experiencia Ideal: primero los dos bloques individuales, luego el filtro duro de seguridad y el ranking de clases grupales. El filtro de contraindicaciones corre **antes** de cualquier puntuación.

```mermaid
flowchart TD
    IN(["Respuestas Q1–Q19 + club resuelto"]) --> B12["Bloque 1 (Fuerza) y Bloque 2 (Cardio)<br/>nombre por objetivo Q4 (§5.1)"]

    Q6{"Q6 = «En la alberca»<br/>y el club tiene alberca?"}
    B12 --> Q6
    Q6 -->|sí| ACU["Variantes acuáticas de B1 y B2"]
    Q6 -->|no/sin alberca| SECO["Variantes en seco<br/>(+ nota si pidió alberca)"]
    ACU --> Q13
    SECO --> Q13

    Q13{"Q13 = «Solo/Sola,<br/>a mi ritmo»?"}
    Q13 -->|sí| B3OFF["Bloque 3 OFF → «Tu rutina individual»"]
    Q13 -->|no| RANK["Ranking de clases (Bloque 3)"]

    RANK --> F1["1· Solo clases del catálogo real del club"]
    F1 --> F2["2· Filtro de entorno Q6 (acuática / seca)"]
    F2 --> F3["3· Filtro de nivel Q9"]
    F3 --> F4["4· FILTRO DURO de contraindicaciones<br/>Q12/Q12b/Q17 → l/c/e/p/b (§5.2)"]
    F4 --> F5["5· Puntuación por Q4 + desempates Q3/Q5/Q7 (§5.3)"]
    F5 --> TOP["Top 2 + «también encajan» (3–5)"]

    B3OFF --> LLM
    TOP --> LLM["Generación de copy (una sola llamada)"]
    Q13 --> LLM
    LLM --> OUT(["Experiencia Ideal renderizada + brief del Asesor"])
```

---

## 5. Generación de copy y armado del lead (una sola llamada al modelo)

Una sola operación produce el copy visible para el cliente y el brief interno del Asesor. Toda salida pasa por saneamiento y verificación antes de mostrarse.

```mermaid
flowchart LR
    CTX["Contexto: respuestas + club +<br/>clases rankeadas + banderas"] --> CALL["Llamada única al modelo"]
    CALL --> RAW["JSON con copy de cliente + brief del Asesor"]
    RAW --> SAN["Saneamiento: elimina códigos Qn (§ anexo-ingenieria)"]
    SAN --> LINT{"Verificación (lint):<br/>«plan», jerga, claims clínicos,<br/>límites de palabras, forma JSON"}
    LINT -->|pasa| RENDER["Render del resultado + brief"]
    LINT -->|falla un campo| FB["Reemplaza ese campo<br/>por su fallback aprobado"]
    FB --> RENDER
    LINT -->|falla la forma| FBALL["Render con todos los fallbacks"]
    FBALL --> RENDER
```

---

## 6. Calificación y enrutamiento del lead (CRM)

El puntaje prioriza a los leads que aún no agendan; agendar siempre tiene prioridad máxima. Las banderas clínicas nunca reducen la atención.

```mermaid
flowchart TD
    L(["Lead generado"]) --> AG{"¿Completó contacto<br/>y agendó visita?"}
    AG -->|sí| HOT["CALIENTE → Asesor + agente de voz al instante"]
    AG -->|no| SCORE["Suma de señales (anexo-ingenieria §3)"]
    SCORE --> T{"Puntaje"}
    T -->|"≥ 60"| HOT
    T -->|"30–59"| STD["Agenda estándar + recordatorio"]
    T -->|"< 30"| NUR["Nurturing por correo / retargeting"]

    FLAGS["Banderas clínicas:<br/>embarazo/posparto, bariátrica, GLP-1, lesión"]
    FLAGS -.nunca reducen la atención;<br/>cambian el tipo de asesoría.-> HOT
    FLAGS -.-> STD
    FLAGS -.-> NUR
```
