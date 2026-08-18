'use client';
import { useState } from 'react';
import type { LicContent } from '../content';
import { evaluar, type Propuesta } from '@/lib/licitacion/scoring';

interface RawProp {
  proveedorId: string;
  razonSocial: string;
  datos: {
    obligatorios: Propuesta['obligatorios'];
    recomendados: Propuesta['recomendados'];
    declarado: Record<string, number>;
  };
}

export default function EvalPanel({ t }: { t: LicContent['evaluar'] }) {
  const [logged, setLogged] = useState(false);
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('');
  const [props, setProps] = useState<Propuesta[]>([]);
  const [resultado, setResultado] = useState<ReturnType<typeof evaluar> | null>(null);
  const [invRazon, setInvRazon] = useState('');
  const [invEmail, setInvEmail] = useState('');
  const [invEnlace, setInvEnlace] = useState('');
  const [invErr, setInvErr] = useState('');
  const [copiado, setCopiado] = useState(false);

  async function invitar() {
    setInvErr(''); setInvEnlace(''); setCopiado(false);
    if (!invRazon || !invEmail) { setInvErr(t.invFaltan); return; }
    const r = await fetch('/api/licitacion/invite', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ razonSocial: invRazon, contactoEmail: invEmail }),
    });
    const j = await r.json();
    if (j.ok) { setInvEnlace(j.enlace); setInvRazon(''); setInvEmail(''); }
    else setInvErr(j.error || 'error');
  }

  async function copiar() {
    try { await navigator.clipboard.writeText(invEnlace); setCopiado(true); } catch { /* sin portapapeles */ }
  }

  async function login() {
    setErr('');
    const r = await fetch('/api/licitacion/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ password: pass }) });
    if (r.ok) setLogged(true); else setErr(t.malPass);
  }

  async function cargar() {
    const r = await fetch('/api/licitacion/proposals');
    if (!r.ok) { setErr(t.malPass); return; }
    const j = await r.json();
    const mapped: Propuesta[] = (j.propuestas as RawProp[]).map((p) => ({
      id: p.proveedorId,
      razonSocial: p.razonSocial,
      obligatorios: p.datos.obligatorios,
      recomendados: p.datos.recomendados,
      declarado: {
        claudeCodeMeses: p.datos.declarado.claudeCodeMeses || 0,
        codexMeses: p.datos.declarado.codexMeses || 0,
        proyectosIA: p.datos.declarado.proyectosIA || 0,
        equipoTamano: p.datos.declarado.equipoTamano || 1,
        seniores: p.datos.declarado.seniores || 0,
        precio: p.datos.declarado.precio || 0,
      },
      calidadUX: 60,
      calidadTecnica: 60,
    }));
    setProps(mapped);
    setResultado(null);
  }

  function setCalidad(id: string, campo: 'calidadUX' | 'calidadTecnica', valor: number) {
    setProps((prev) => prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p)));
  }

  const field = 'px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-neutral-100';

  if (!logged) {
    return (
      <div className="rounded-xl border-l-4 border-amber-500 bg-amber-950/20 p-4 max-w-md">
        <label className="block text-sm font-semibold mb-2">{t.login}</label>
        <div className="flex gap-2">
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} className={field} />
          <button onClick={login} className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-4 py-2 rounded-lg">{t.entrar}</button>
        </div>
        {err && <p className="text-red-400 text-sm mt-2">{err}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-white/15 p-4">
        <h3 className="font-semibold mb-3">{t.invitarH}</h3>
        <div className="grid md:grid-cols-2 gap-3">
          <input value={invRazon} onChange={(e) => setInvRazon(e.target.value)} placeholder={t.invRazon} className={field} />
          <input value={invEmail} onChange={(e) => setInvEmail(e.target.value)} placeholder={t.invEmail} className={field} />
        </div>
        <button onClick={invitar} className="mt-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-4 py-2 rounded-lg">{t.invBtn}</button>
        {invErr && <p className="text-red-400 text-sm mt-2">{invErr}</p>}
        {invEnlace && (
          <div className="mt-3 rounded-lg bg-emerald-950/20 border border-emerald-500/40 p-3">
            <p className="text-sm text-neutral-300 mb-2">{t.invGenerado}</p>
            <div className="flex gap-2 items-center">
              <code className="flex-1 text-xs break-all bg-black/30 rounded px-2 py-1.5">{invEnlace}</code>
              <button onClick={copiar} className="text-xs bg-neutral-700 hover:bg-neutral-600 text-white px-3 py-1.5 rounded">{copiado ? t.copiado : t.invCopiar}</button>
            </div>
          </div>
        )}
      </div>

      <button onClick={cargar} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg">{t.cargar}</button>
      {err && <p className="text-red-400 text-sm">{err}</p>}
      {props.length === 0 ? (
        <p className="text-neutral-400 text-sm">{t.ninguna}</p>
      ) : (
        <>
          <div>
            <h3 className="font-semibold mb-2">{t.ajuste}</h3>
            {props.map((p) => (
              <div key={p.id} className="rounded-lg border border-white/15 p-3 my-2">
                <b>{p.razonSocial}</b>
                <div className="flex items-center gap-3 text-sm mt-2">
                  <span className="w-40 text-neutral-400">Calidad portafolio UX</span>
                  <input type="range" min={0} max={100} value={p.calidadUX} onChange={(e) => setCalidad(p.id, 'calidadUX', +e.target.value)} className="flex-1" />
                  <span className="w-8 text-neutral-400">{p.calidadUX}</span>
                </div>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <span className="w-40 text-neutral-400">Profundidad técnica</span>
                  <input type="range" min={0} max={100} value={p.calidadTecnica} onChange={(e) => setCalidad(p.id, 'calidadTecnica', +e.target.value)} className="flex-1" />
                  <span className="w-8 text-neutral-400">{p.calidadTecnica}</span>
                </div>
              </div>
            ))}
            <button onClick={() => setResultado(evaluar(props))} className="mt-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg">{t.comparar}</button>
          </div>

          {resultado && (
            <div className="rounded-xl border border-white/15 p-4">
              {resultado.ganador && (
                <div className="rounded-lg border border-emerald-500/40 bg-emerald-950/20 p-3 mb-4">
                  <b>{t.ganador}:</b> {resultado.ganador.razonSocial} — <b>{resultado.admitidos[0].puntaje.total.toFixed(1)}/100</b>
                </div>
              )}
              {resultado.admitidos.map((a, i) => (
                <div key={a.propuesta.id} className="my-2">
                  <div className="flex justify-between text-sm">
                    <b>{i + 1}. {a.propuesta.razonSocial}</b><span>{a.puntaje.total.toFixed(1)}</span>
                  </div>
                  <div className="bg-white/10 rounded h-3 mt-1 overflow-hidden">
                    <div className="h-3" style={{ width: `${a.puntaje.total}%`, background: i === 0 ? '#1f7a44' : '#b21622' }} />
                  </div>
                </div>
              ))}
              {resultado.descalificados.map((d) => (
                <div key={d.propuesta.id} className="my-2 opacity-70 text-sm">
                  <b>{d.propuesta.razonSocial}</b> <span className="bg-red-700 text-white text-xs px-2 py-0.5 rounded-full">{t.descal}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
