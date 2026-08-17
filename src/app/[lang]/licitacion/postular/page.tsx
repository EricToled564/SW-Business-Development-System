import type { Locale } from '@/lib/i18n';
import { isValidLocale, defaultLocale } from '@/lib/i18n';
import Link from 'next/link';
import { getLic } from '../content';
import SubmitForm from './SubmitForm';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  return { title: getLic(loc).postular.h, robots: { index: false, follow: false } };
}

export default async function PostularPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ t?: string }>;
}) {
  const { lang } = await params;
  const { t: token } = await searchParams;
  const loc: Locale = isValidLocale(lang) ? lang : defaultLocale;
  const c = getLic(loc);

  return (
    <section className="py-20 md:py-28 text-neutral-100">
      <div className="max-w-3xl mx-auto px-6">
        <Link href={`/${loc}/licitacion`} className="text-neutral-400 hover:text-white text-sm underline">← {c.nav.brief}</Link>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">{c.postular.h}</h1>
        <p className="text-neutral-300 mb-4">{c.postular.sub}</p>
        <div className="rounded-xl bg-blue-950/40 border border-blue-500/30 p-4 mb-8 text-sm">{c.postular.aislamiento}</div>

        {token ? (
          <SubmitForm token={token} t={c.postular} />
        ) : (
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-950/20 p-4">{c.postular.sinToken}</div>
        )}
      </div>
    </section>
  );
}
