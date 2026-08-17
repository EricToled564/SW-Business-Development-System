// Rúbrica y cálculo de puntaje de la licitación del Equipo 1.
// Puro TypeScript, sin dependencias: se usa igual en el servidor (API de evaluación)
// y en el cliente (vista previa del convocante). La lógica es la misma que la del
// portal estático, ahora como fuente única.

export interface Obligatorios {
  portafolioUX: boolean;
  propuestaTecnica: boolean;
  evidenciaClaudeCodex: boolean;
  equipo: boolean;
}

export interface Recomendados {
  cronograma: boolean;
  migracion: boolean;
  qa: boolean;
  seguridad: boolean;
  interacciones: boolean;
  referencias: boolean;
}

export interface Declarado {
  claudeCodeMeses: number;
  codexMeses: number;
  proyectosIA: number;
  equipoTamano: number;
  seniores: number;
  precio: number;
}

export interface Propuesta {
  id: string;
  razonSocial: string;
  obligatorios: Obligatorios;
  recomendados: Recomendados;
  declarado: Declarado;
  // Calidad cualitativa que asigna el convocante, 0..100.
  calidadUX?: number;
  calidadTecnica?: number;
}

export interface Puntaje {
  tec: number; ia: number; ux: number; eq: number; cro: number; pre: number;
  total: number;
}

export interface Resultado {
  admitidos: Array<{ propuesta: Propuesta; puntaje: Puntaje }>;
  descalificados: Array<{ propuesta: Propuesta; motivo: string }>;
  ganador: Propuesta | null;
}

export const PESOS = { tec: 25, ia: 20, ux: 20, eq: 15, cro: 10, pre: 10 } as const;

export function cumpleObligatorios(o: Obligatorios): boolean {
  return o.portafolioUX && o.propuestaTecnica && o.evidenciaClaudeCodex && o.equipo;
}

function norm(vals: number[]): number[] {
  const mn = Math.min(...vals), mx = Math.max(...vals);
  return vals.map((v) => (mx === mn ? 1 : (v - mn) / (mx - mn)));
}

function recWeight(r: Recomendados): number {
  const got = [r.cronograma, r.migracion, r.qa, r.seguridad, r.interacciones, r.referencias]
    .filter(Boolean).length;
  return got / 6;
}

export function evaluar(propuestas: Propuesta[]): Resultado {
  const descalificados = propuestas
    .filter((p) => !cumpleObligatorios(p.obligatorios))
    .map((p) => ({ propuesta: p, motivo: 'Falta un rubro obligatorio' }));

  const vivos = propuestas.filter((p) => cumpleObligatorios(p.obligatorios));

  if (vivos.length === 0) return { admitidos: [], descalificados, ganador: null };

  const ia = norm(vivos.map((p) => p.declarado.claudeCodeMeses + p.declarado.codexMeses + p.declarado.proyectosIA * 6));
  const eq = norm(vivos.map((p) => ((p.declarado.seniores / Math.max(1, p.declarado.equipoTamano)) * 100)));
  const precios = vivos.map((p) => p.declarado.precio || 0);
  const mnP = Math.min(...precios), mxP = Math.max(...precios);
  const pre = precios.map((v) => (mxP === mnP ? 1 : 1 - (v - mnP) / (mxP - mnP))); // menor precio = mejor

  const admitidos = vivos.map((p, i) => {
    const tecQ = (p.calidadTecnica ?? 60) / 100;
    const uxQ = (p.calidadUX ?? 60) / 100;
    const s_tec = 0.6 * tecQ + 0.4 * (p.recomendados.migracion && p.recomendados.qa ? 1 : 0.5);
    const s_cro = p.recomendados.cronograma ? Math.max(0.5, recWeight(p.recomendados)) : 0.3;
    const puntaje: Puntaje = {
      tec: PESOS.tec * s_tec,
      ia: PESOS.ia * ia[i],
      ux: PESOS.ux * uxQ,
      eq: PESOS.eq * eq[i],
      cro: PESOS.cro * s_cro,
      pre: PESOS.pre * pre[i],
      total: 0,
    };
    puntaje.total = puntaje.tec + puntaje.ia + puntaje.ux + puntaje.eq + puntaje.cro + puntaje.pre;
    return { propuesta: p, puntaje };
  });

  admitidos.sort((a, b) => b.puntaje.total - a.puntaje.total);
  return { admitidos, descalificados, ganador: admitidos[0]?.propuesta ?? null };
}
