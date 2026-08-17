import type { Locale } from '@/lib/i18n';
import { isValidLocale, defaultLocale } from '@/lib/i18n';
import Link from 'next/link';
import { getLic } from '../content';
import EvalPanel from './EvalPanel';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  return { title: getLic(loc).evaluar.h, robots: { index: false, follow: false } };
}

export default async function EvaluarPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const c = getLic(loc);

  return (
    <section className="py-20 md:py-28 text-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        <Link href={`/${loc}/licitacion`} className="text-neutral-400 hover:text-white text-sm underline">← {c.nav.brief}</Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{c.evaluar.h}</h1>
        <p className="text-neutral-300 mb-8">{c.evaluar.sub}</p>
        <EvalPanel t={c.evaluar} />
      </div>
    </section>
  );
}
