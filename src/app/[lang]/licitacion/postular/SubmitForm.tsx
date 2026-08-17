'use client';
import { useState } from 'react';
import type { LicContent } from '../content';

export default function SubmitForm({ token, t }: { token: string; t: LicContent['postular'] }) {
  const [msg, setMsg] = useState<{ tipo: 'ok' | 'err'; texto: string } | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [archivos, setArchivos] = useState<File[]>([]);

  const field = 'w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-neutral-100';
  const lab = 'block text-sm font-semibold mt-3 mb-1';

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    const f = e.currentTarget;
    const g = (n: string) => (f.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement)?.value ?? '';
    const c = (n: string) => (f.elements.namedItem(n) as HTMLInputElement)?.checked ?? false;
    const num = (n: string) => parseFloat(g(n)) || 0;

    const obligatorios = {
      portafolioUX: c('c_portafolioUX'),
      propuestaTecnica: c('c_propuestaTecnica'),
      evidenciaClaudeCodex: c('c_evidenciaClaudeCodex'),
      equipo: c('c_equipo'),
    };
    const faltan = Object.entries(obligatorios).filter(([, v]) => !v).map(([k]) => k);
    if (faltan.length) { setMsg({ tipo: 'err', texto: t.faltan + faltan.join(', ') }); return; }

    const propuesta = {
      schema: 'sw-e1-propuesta/v1',
      razonSocial: g('razonSocial'),
      proveedor: { razonSocial: g('razonSocial'), sitio: g('sitio'), contactoNombre: g('contactoNombre'), contactoEmail: g('contactoEmail'), ubicacion: g('ubicacion'), tz: g('tz') },
      obligatorios,
      recomendados: { cronograma: c('c_cronograma'), migracion: c('c_migracion'), qa: c('c_qa'), seguridad: c('c_seguridad'), interacciones: c('c_interacciones'), referencias: c('c_referencias') },
      declarado: { claudeCodeMeses: num('claudeCodeMeses'), codexMeses: num('codexMeses'), proyectosIA: num('proyectosIA'), ingSenior: g('ingSenior'), equipoTamano: num('equipoTamano'), seniores: num('seniores'), precio: num('precio'), modeloPrecio: g('modeloPrecio'), narrativaIA: g('narrativaIA') },
      firma: '',
    };

    const fd = new FormData();
    fd.append('propuesta', JSON.stringify(propuesta));
    archivos.forEach((a) => fd.append('archivos', a));

    setEnviando(true);
    try {
      const r = await fetch(`/api/licitacion/submit?t=${encodeURIComponent(token)}`, { method: 'POST', body: fd });
      const j = await r.json();
      if (j.ok) setMsg({ tipo: 'ok', texto: t.ok + j.folio });
      else setMsg({ tipo: 'err', texto: j.error || 'error' });
    } catch {
      setMsg({ tipo: 'err', texto: 'error de red' });
    } finally {
      setEnviando(false);
    }
  }

  const chk = (name: string, label: string, must = false) => (
    <label className="flex gap-2 items-start text-sm my-2">
      <input type="checkbox" name={name} className="mt-1" />
      <span>{label} {must && <span className="text-red-500 font-bold text-xs">*</span>}</span>
    </label>
  );

  return (
    <form onSubmit={enviar} className="space-y-5">
      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.identificacion}</legend>
        <div className="grid md:grid-cols-2 gap-3">
          <div><label className={lab}>Razón social *</label><input name="razonSocial" required className={field} /></div>
          <div><label className={lab}>Sitio / portafolio</label><input name="sitio" className={field} /></div>
          <div><label className={lab}>Contacto — nombre *</label><input name="contactoNombre" required className={field} /></div>
          <div><label className={lab}>Contacto — correo *</label><input name="contactoEmail" type="email" required className={field} /></div>
          <div><label className={lab}>Ubicación</label><input name="ubicacion" className={field} /></div>
          <div><label className={lab}>Zona horaria</label><input name="tz" className={field} /></div>
        </div>
      </fieldset>

      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.obligatorios}</legend>
        {chk('c_portafolioUX', 'Portafolio de diseño UX', true)}
        {chk('c_propuestaTecnica', 'Propuesta técnica', true)}
        {chk('c_evidenciaClaudeCodex', 'Evidencia de experiencia con Claude Code y Codex', true)}
        {chk('c_equipo', 'Equipo propuesto con roles y CVs', true)}
      </fieldset>

      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.experiencia}</legend>
        <div className="grid md:grid-cols-2 gap-3">
          <div><label className={lab}>Meses con Claude Code</label><input name="claudeCodeMeses" type="number" min="0" defaultValue="0" className={field} /></div>
          <div><label className={lab}>Meses con Codex</label><input name="codexMeses" type="number" min="0" defaultValue="0" className={field} /></div>
          <div><label className={lab}>Proyectos con estos agentes</label><input name="proyectosIA" type="number" min="0" defaultValue="0" className={field} /></div>
          <div><label className={lab}>Ingeniero senior responsable</label><input name="ingSenior" className={field} /></div>
        </div>
        <label className={lab}>Cómo aplican el ciclo de cinco pasos</label>
        <textarea name="narrativaIA" className={`${field} min-h-20`} />
      </fieldset>

      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.equipo}</legend>
        <div className="grid md:grid-cols-2 gap-3">
          <div><label className={lab}>Tamaño del equipo</label><input name="equipoTamano" type="number" min="1" defaultValue="1" className={field} /></div>
          <div><label className={lab}>De ellas, senior</label><input name="seniores" type="number" min="0" defaultValue="0" className={field} /></div>
        </div>
        {chk('c_cronograma', 'Cronograma propio mapeado a las 8 semanas')}
        {chk('c_migracion', 'Plan de migración y cutover (301, DNS, MX)')}
        {chk('c_qa', 'Plan de QA y CI (pruebas, CWV, accesibilidad)')}
        {chk('c_seguridad', 'Enfoque de seguridad y datos personales (LFPDPPP)')}
        {chk('c_interacciones', 'Entendimiento de las interacciones con otros equipos')}
        {chk('c_referencias', 'Referencias verificables y disposición a NDA')}
      </fieldset>

      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.precio}</legend>
        <div className="grid md:grid-cols-2 gap-3">
          <div><label className={lab}>Precio total</label><input name="precio" type="number" min="0" className={field} /></div>
          <div><label className={lab}>Moneda / modelo</label><input name="modeloPrecio" className={field} /></div>
        </div>
      </fieldset>

      <fieldset className="rounded-xl border border-white/15 p-4">
        <legend className="font-semibold px-2">{t.adjuntos}</legend>
        <input type="file" multiple onChange={(e) => setArchivos(Array.from(e.target.files ?? []))} className="text-sm text-neutral-300" />
        {archivos.length > 0 && <p className="text-xs text-neutral-400 mt-2">{archivos.map((a) => a.name).join(' · ')}</p>}
      </fieldset>

      <div className="flex items-center gap-4">
        <button type="submit" disabled={enviando} className="bg-red-600 hover:bg-red-700 disabled:bg-neutral-600 text-white font-semibold px-5 py-2.5 rounded-lg">
          {enviando ? t.enviando : t.enviar}
        </button>
        {msg && <span className={msg.tipo === 'ok' ? 'text-emerald-400 text-sm' : 'text-red-400 text-sm'}>{msg.texto}</span>}
      </div>
    </form>
  );
}
