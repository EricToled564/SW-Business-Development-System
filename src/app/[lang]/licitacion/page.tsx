import type { Locale } from '@/lib/i18n';
import { isValidLocale, defaultLocale } from '@/lib/i18n';
import Link from 'next/link';
import { getLic, type Fila } from './content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const t = getLic(loc);
  return { title: t.meta.title, description: t.meta.desc, robots: { index: false, follow: false } };
}

function Rows({ rows }: { rows: Fila[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-black/20' : ''}>
              <th className="text-left align-top p-2.5 border border-white/10 font-semibold w-1/3">{r.k}</th>
              <td className="align-top p-2.5 border border-white/10 text-neutral-300">{r.v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function LicitacionBrief({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const t = getLic(loc);

  return (
    <section className="py-20 md:py-28 text-neutral-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded">{t.hero.badge}</span>
          <span className="text-neutral-400 text-sm">Sports World México</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-3">{t.hero.title}</h1>
        <p className="text-neutral-300 text-lg mb-6">{t.hero.sub}</p>

        <nav className="flex gap-3 mb-10">
          <Link href={`/${loc}/licitacion/postular`} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg">{t.nav.postular}</Link>
          <Link href={`/${loc}/licitacion/evaluar`} className="border border-white/20 hover:border-white/40 text-white font-semibold px-4 py-2 rounded-lg">{t.nav.evaluar}</Link>
          <Link href={`/${loc === 'es' ? 'en' : 'es'}/licitacion`} className="ml-auto text-neutral-400 hover:text-white text-sm self-center underline">{loc === 'es' ? 'English' : 'Español'}</Link>
        </nav>

        <p className="text-neutral-200 text-lg leading-relaxed border-l-4 border-red-600 pl-4 mb-8">{t.hero.frase}</p>
        <div className="rounded-xl bg-blue-950/40 border border-blue-500/30 p-4 mb-4 text-sm">{t.intro.metodo}</div>
        <p className="text-neutral-400 text-sm mb-12">{t.intro.independiente}</p>

        {[
          { h: t.s1.h, p: t.s1.p, rows: t.s1.equipos, extra: t.s1.ancla },
          { h: t.s2.h, p: t.s2.p, rows: t.s2.raci },
          { h: t.s3.h, p: t.s3.p, rows: t.s3.entregables, extra: t.s3.frontera },
          { h: t.s4.h, p: t.s4.p, rows: t.s4.semanas },
        ].map((s, i) => (
          <section key={i} className="mb-12">
            <h2 className="text-2xl font-bold mb-2">{s.h}</h2>
            <p className="text-neutral-300 mb-4">{s.p}</p>
            <Rows rows={s.rows} />
            {s.extra && <p className="mt-4 text-sm text-neutral-300 border-l-4 border-amber-500/70 pl-4">{s.extra}</p>}
          </section>
        ))}

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{t.s5.h}</h2>
          <p className="text-neutral-300 mb-4">{t.s5.p}</p>
          <h3 className="text-lg font-semibold mt-6 mb-2 text-emerald-400">{loc === 'es' ? 'Recibe' : 'Receives'}</h3>
          <Rows rows={t.s5.recibe} />
          <h3 className="text-lg font-semibold mt-6 mb-2 text-red-400">{loc === 'es' ? 'Entrega' : 'Delivers'}</h3>
          <Rows rows={t.s5.entrega} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{t.s6.h}</h2>
          <p className="text-neutral-300 mb-4">{t.s6.p}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-sm">{t.s6.claude}</div>
            <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 text-sm">{t.s6.codex}</div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {t.s6.ciclo.map((c, i) => (
              <span key={i} className="text-xs bg-white/5 border border-white/15 rounded-lg px-3 py-2">{c}</span>
            ))}
          </div>
          <p className="text-sm text-neutral-300">{t.s6.cierre}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{t.s7.h}</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-300 text-sm mb-6">
            {t.s7.stack.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
          <Rows rows={t.s7.kpis} />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">{t.s8.h}</h2>
          <p className="text-neutral-300 mb-4">{t.s8.p}</p>
          <Rows rows={t.s8.rubros} />
          <h3 className="text-lg font-semibold mt-6 mb-2">{loc === 'es' ? 'Ponderación' : 'Weighting'}</h3>
          <Rows rows={t.s8.rubrica} />
          <div className="mt-6 rounded-xl border-l-4 border-red-600 bg-red-950/20 p-4 text-sm">{t.s8.comoPostular}</div>
        </section>
      </div>
    </section>
  );
}
