// Lista de propuestas para el convocante. GET → { propuestas }.
// Solo el convocante autenticado. Ningún proveedor puede llamar aquí.
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sesionValida } from '@/lib/licitacion/auth';
import { listarPropuestas } from '@/lib/licitacion/db';

export const dynamic = 'force-dynamic';

export async function GET(): Promise<Response> {
  const cookieStore = await cookies();
  const ok = await sesionValida(cookieStore.get('lic_sesion')?.value ?? null);
  if (!ok) return NextResponse.json({ ok: false, error: 'no autorizado' }, { status: 401 });

  const propuestas = await listarPropuestas();
  return NextResponse.json({ ok: true, propuestas });
}
