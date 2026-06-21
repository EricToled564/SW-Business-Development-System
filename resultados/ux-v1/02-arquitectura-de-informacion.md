# Arquitectura de información — UX V1 (lienzo de validación)

Borrador para validar **antes** de redactar el spec. Cada bloque es trazable a `01-reglas-de-negocio.md`. Los conteos son los del spec v4.2 (F2); recuerda que **la arquitectura gobierna y los entregables se derivan de ella** (REC-01).

---

## 1. Principio rector: 4 puertas → 1 destino

> RN-D2-07 · El prospecto entra por una de cuatro puertas y todas conducen a «Diseña tu experiencia».

```mermaid
flowchart LR
  H["🏠 Home<br/>1"]:::door
  C["📍 Clubes<br/>49"]:::door
  CA["🏋️ Clases + Amenidades<br/>51 + 10 = 61"]:::door
  O["🎯 Hubs de objetivo<br/>6"]:::door

  H --> DX
  C --> DX
  CA --> DX
  O --> DX

  DX(["✨ «Diseña tu experiencia»"]):::dest
  DX --> Q["Cuestionario Q1–Q19"]:::flow

  classDef door fill:#EEF5FF,stroke:#1D1D1B,color:#1D1D1B;
  classDef dest fill:#FFF4F4,stroke:#C81E20,color:#C81E20;
  classDef flow fill:#F3F4F6,stroke:#6B6B68,color:#1D1D1B;
```

---

## 2. Estructura del sitio: cajón «Tu Sports World» (8 hubs)

> RN-D4-05 · Único menú estructural. RN-D4-06 · Los 3 elementos de acción del header (Diseña tu experiencia · Pregúntale a BES · Agenda tu visita) **no** viven en este cajón.

```mermaid
flowchart TD
  TSW["☰ Tu Sports World"]:::root
  TSW --> Clubes["Clubes · 49"]:::hub
  TSW --> Clases["Clases · 51<br/>(7 signature + 44 regular)"]:::hub
  TSW --> Amen["Amenidades · 10"]:::hub
  TSW --> Perf["Perfiles / objetivo · 5"]:::hub
  TSW --> BDP["Bajar de peso · 1 ⚕️YMYL"]:::ymyl
  TSW --> FK["FitKidz · 1<br/>(34 actividades)"]:::hub
  TSW --> Memb["Membresías · 6<br/>(hub + 5 planes)"]:::hub
  TSW --> Diario["Diario / Journal · 20"]:::hub

  classDef root fill:#1D1D1B,stroke:#1D1D1B,color:#FFFFFF;
  classDef hub fill:#F5F5F4,stroke:#E5E5E3,color:#1D1D1B;
  classDef ymyl fill:#FFF6E7,stroke:#C81E20,color:#1D1D1B;
```

---

## 3. Inventario de tipos de página (≈155)

> RN-D3-02 / RN-D4-07. Conteos del spec v4.2 (F2).

| # | Tipo de página | Cant. | Notas | Regla |
|---|---|---:|---|---|
| 1 | Home | 1 | Puerta de entrada | RN-D2-07 |
| 2 | Club | 49 | En 13 estados · deben ser SSR/indexables | RN-D3-01·RN-D4-01 |
| 3 | Clase | 51 | 7 Premium Les Mills + 44 regulares | RN-D3-03 |
| 4 | Amenidad | 10 | alberca, INTENZ, FitKidz, box, escalada, canchas, sauna/vapor, vestidores, cafetería, estacionamiento | RN-D3-05 |
| 5 | Hub de objetivo (Perfiles) | 5 | primeros pasos, salud y bienestar, estética, ganar fuerza, rehabilitación | RN-D3-07 |
| 6 | Bajar de peso | 1 | Tipo aparte, **YMYL** | RN-D3-07·RN-D9-03 |
| 7 | FitKidz | 1 | Hub absorbe 34 actividades (sin páginas individuales) | RN-D3-04 |
| 8 | Personal Training | 1 | | RN-D5-09 |
| 9 | Entrenamiento individual | 10 | 18 sub-clases (3 familias × 6) | RN-D3-08 |
| 10 | Membresías | 6 | hub + 5 planes (UniClub, AllClub, Black Pass, Pink Plan, Promo 21 días) · sin checkout | RN-D3-06·RN-D8-11 |
| 11 | Journal / Diario | 20 | artículos; algunos YMYL | RN-D4-07 |
| | **Total** | **≈155** | | RN-D3-02 |

*Pendientes de ratificar (no bloquean): REC-03 FitKidz 34 vs 21 · REC-04 51 vs 49+2 clases.*

---

## 4. El flujo «Experiencia Ideal» (lo que cuelga del destino)

> RN-D2-06 · `CUESTIONARIO → CONOCIMIENTO → EXPERIENCIA IDEAL → LEAD CALIFICADO`. Fases del sistema: welcome · questionnaire · loading · result · contact_capture · schedule · briefing.

```mermaid
flowchart LR
  W["welcome"]:::s --> Q["questionnaire<br/>Q1–Q19 (15–21)"]:::s
  Q -. "path de peso" .-> YM{{"compuerta YMYL<br/>aviso de salud"}}:::gate
  YM --> L
  Q --> L["loading"]:::s
  L --> R["result<br/>✨ Experiencia Ideal<br/>3 bloques + Club Ideal"]:::dest
  R --> CC["contact_capture<br/>apellido · cel 10 díg · correo"]:::s
  CC --> S["schedule<br/>día/hora"]:::s
  S --> B["briefing<br/>brief Asesor + BES 24/7"]:::lead

  classDef s fill:#F3F4F6,stroke:#6B6B68,color:#1D1D1B;
  classDef gate fill:#FFF6E7,stroke:#C81E20,color:#1D1D1B;
  classDef dest fill:#FFF4F4,stroke:#C81E20,color:#C81E20;
  classDef lead fill:#EDF8F1,stroke:#1D1D1B,color:#1D1D1B;
```

**Resultado = 3 bloques** (RN-D7-01): `01 Pesas` · `02 Cardio` · `03 Clases`, cada uno ON por defecto y suprimible por reglas (Q13=Solo → Block 3 OFF; contraindicación → filtra). Antes, la **Card «Tu Club Ideal»** (RN-D7-08).

---

## 5. Capa transversal: header y estados

> RN-D4-06 (header) · RN-D5-01/03/04 (estados y conversión).

```mermaid
flowchart TD
  HD["Header (todas las páginas)"]:::root
  HD --> L1["Logo"]:::n
  HD --> L2["☰ Tu Sports World<br/>(8 hubs)"]:::n
  HD --> L3["Diseña tu experiencia<br/>(ruta)"]:::n
  HD --> L4["Pregúntale a BES<br/>(ruta)"]:::n
  HD --> L5["🔴 Agenda tu visita<br/>ÚNICA conversión, siempre"]:::cta

  classDef root fill:#1D1D1B,stroke:#1D1D1B,color:#FFFFFF;
  classDef n fill:#F5F5F4,stroke:#E5E5E3,color:#1D1D1B;
  classDef cta fill:#E6282A,stroke:#C81E20,color:#FFFFFF;
```

**Menú contextual = f(3 ejes)** (RN-D5-02): estado del cuestionario · tipo de página · club resuelto.

| Estado (RN-D5-01) | Botón de experiencia visible | Conversión |
|---|---|---|
| Sin cuestionario | «Diseña tu experiencia» (Rule 27) | «Agenda tu visita» siempre |
| Completo, dentro del flujo | — (no se duplica) | «Agenda tu visita» siempre |
| Completo, fuera del flujo | «Volver a tu experiencia ideal» (Rule 28) | «Agenda tu visita» siempre |

**Reglas geográficas** (RN-D5-06): CIUDAD-UNO (1 club) · CIUDAD-POCOS (2–3) · CIUDAD-ZMVM (>3, 32 clubes) cambian qué botones de club aparecen.

---

## 6. Qué falta para cerrar la arquitectura
- Validar este lienzo (esta es la decisión de ahora).
- Resolver pendientes menores REC-03/04/05 al redactar.
- Definir, **desde esta arquitectura**, el conteo real de entregables (REC-01).
