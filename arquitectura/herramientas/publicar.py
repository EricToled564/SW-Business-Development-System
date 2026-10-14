"""Genera los PDF de la Arquitectura de la Experiencia y su manifiesto.

Uso (desde la raíz del repositorio):  python3 arquitectura/herramientas/publicar.py

Lee la fuente única de la verdad (arquitectura/fuente/arquitectura.{es,en}.md),
escribe los PDF que publica el portal del cliente en
resultados/ux-v1/webapp/kb/01-arquitectura-de-la-experiencia.{es,en}.pdf y
deja en arquitectura/manifiesto.json la huella SHA-256 de cada fuente y de cada
PDF. La regla R24 de consistencia.js compara esas huellas en cada corrida:
una fuente editada sin regenerar sus PDF, o un PDF que no sale de la fuente,
hace fallar la verificación.
"""
import hashlib, json, os, re, subprocess, sys

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
FUENTE = os.path.join(RAIZ, "arquitectura", "fuente")
KB = os.path.join(RAIZ, "resultados", "ux-v1", "webapp", "kb")
MANIFIESTO = os.path.join(RAIZ, "arquitectura", "manifiesto.json")
GENERAR = os.path.join(os.path.dirname(__file__), "generar.py")


def sha(p):
    return hashlib.sha256(open(p, "rb").read()).hexdigest()


def rel(p):
    return os.path.relpath(p, RAIZ)


man = {"documento": "Arquitectura de la Experiencia", "fuente_unica": True, "idiomas": {}}
for lang in ("es", "en"):
    src = os.path.join(FUENTE, f"arquitectura.{lang}.md")
    dst = os.path.join(KB, f"01-arquitectura-de-la-experiencia.{lang}.pdf")
    subprocess.run([sys.executable, GENERAR, src, dst, lang], check=True, stdout=subprocess.DEVNULL)
    fecha = re.search(r"<!-- fecha-edicion: ([\d-]+) -->", open(src, encoding="utf-8").read()).group(1)
    man["idiomas"][lang] = {"fuente": rel(src), "fuente_sha256": sha(src),
                            "pdf": rel(dst), "pdf_sha256": sha(dst), "fecha_edicion": fecha}
    print(f"{lang}: {rel(dst)}  {sha(dst)[:16]}…")
json.dump(man, open(MANIFIESTO, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
open(MANIFIESTO, "a").write("\n")
print("manifiesto:", rel(MANIFIESTO))
