"""Genera todas las gráficas del white paper como SVG en white-paper/graficas/.

Las cifras del riesgo salen de modelo/resultado.json; las demás, de las notas de investigación
(cada gráfica indica su fuente en el documento). Ejecutar: python3 graficas.py
"""
import json, os

AQUI = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(AQUI, "graficas")
os.makedirs(OUT, exist_ok=True)
R = json.load(open(os.path.join(AQUI, "..", "modelo", "resultado.json"), encoding="utf-8"))
ESC = R["escenarios"]

ROJO, OSCURO, GRIS, TINTA, CLARO, VERDE, SUAVE = "#d71920", "#5b0a0d", "#9aa3ad", "#1d232a", "#e9ecef", "#2f7d57", "#5f6b76"
FONT = 'font-family="Helvetica, Arial, sans-serif"'


def svg(nombre, w, h, cuerpo, etiqueta):
    s = f'<svg viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="{etiqueta}" {FONT} font-size="12">' + "".join(cuerpo) + "</svg>"
    open(os.path.join(OUT, nombre + ".svg"), "w", encoding="utf-8").write(s)


def t(x, y, texto, size=12, color=TINTA, peso="400", anchor="start"):
    return f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}" font-weight="{peso}" text-anchor="{anchor}">{texto}</text>'


def persona(x, y, color, s=1.0):
    return (f'<circle cx="{x + 10*s:.1f}" cy="{y + 7*s:.1f}" r="{6*s:.1f}" fill="{color}"/>'
            f'<rect x="{x + 2*s:.1f}" y="{y + 15*s:.1f}" width="{16*s:.1f}" height="{22*s:.1f}" rx="{7*s:.1f}" fill="{color}"/>')


def fmt(n):
    return f"{n:,}"


# 1. Pictograma: 8 a 9 de cada 10 prospectos buscan un cambio físico (fuerza de ventas de SW)
c = []
for i in range(10):
    col = ROJO if i < 8 else ("url(#mitad)" if i == 8 else GRIS)
    c.append(persona(10 + i * 46, 10, col, 1.5))
c.insert(0, f'<defs><linearGradient id="mitad"><stop offset="50%" stop-color="{ROJO}"/><stop offset="50%" stop-color="{GRIS}"/></linearGradient></defs>')
c.append(t(10, 90, "8 a 9 de cada 10 prospectos llegan buscando un cambio físico", 13, TINTA, "700"))
c.append(t(10, 108, "Bajar de peso es el objetivo más frecuente", 12, SUAVE))
svg("pictograma-cambio-fisico", 480, 116, c, "Ocho a nueve de cada diez prospectos buscan un cambio físico")

# 2. Embudo del riesgo, escenario base 2029: socios y altas
EMB = R["embudo"]["Base"][-1]
def embudo_svg(x0, titulo, pasos):
    anchos = [270, 210, 150, 96]
    cols = [GRIS, OSCURO, ROJO, ROJO]
    out = [t(x0 + 135, 16, titulo, 13, TINTA, "700", "middle")]
    for k, ((lab, v), w) in enumerate(zip(pasos, anchos)):
        y = 28 + k * 52
        x = x0 + (270 - w) / 2
        out += [f'<rect x="{x:.1f}" y="{y}" width="{w}" height="42" rx="4" fill="{cols[k]}"/>',
                t(x0 + 135, y + 19, fmt(v), 15, "#fff", "700", "middle"), t(x0 + 135, y + 35, lab, 10.5, "#fff", "400", "middle")]
    return out
c = embudo_svg(0, "Socios actuales", [("socios activos", 97046), ("buscan bajar de peso", EMB["socios_buscan_peso"]), ("usan GLP-1: en riesgo", EMB["socios_en_riesgo"]), ("cancelan", EMB["socios_cancelan"])])
c += embudo_svg(330, "Altas del año", [("altas al año", 66379), ("buscan bajar de peso", EMB["altas_buscan_peso"]), ("usan GLP-1: en riesgo", EMB["altas_en_riesgo"]), ("no se inscriben", EMB["altas_no_ocurren"])])
svg("embudo-riesgo", 600, 240, c, "Socios y altas que buscan bajar de peso, en riesgo y perdidos, escenario base 2029")

# 3. Precio mensual del tratamiento frente a la cuota de Sports World
filas = [("Wegovy 2.4 mg, precio de lista", 8167, OSCURO), ("Mounjaro 2.5 mg", 6310, OSCURO), ("Wegovy 2.4 mg, en oferta", 4900, ROJO), ("Cuota promedio de Sports World", 1508, GRIS)]
c = []
for i, (lab, v, col) in enumerate(filas):
    y = 8 + i * 40
    w = v / 8167 * 360
    c += [t(0, y + 17, lab, 12), f'<rect x="215" y="{y}" width="{w:.1f}" height="26" fill="{col}"/>', t(220 + w, y + 18, f"${fmt(v)}", 12, TINTA, "700")]
svg("precios", 640, 170, c, "Precio mensual del tratamiento y cuota de Sports World")

# 4. Línea de tiempo del mercado
hitos = [("nov. 2024", "Tirzepatida aprobada en México (diabetes)"), ("2026", "3.8% de los hogares con al menos un usuario"), ("11 nov. 2026", "Wegovy en pastilla a la venta"), ("2029", "Posible llegada de semaglutida genérica")]
c = [f'<line x1="40" y1="40" x2="600" y2="40" stroke="{GRIS}" stroke-width="3"/>']
for i, (f, h) in enumerate(hitos):
    x = 80 + i * 160
    col = ROJO if i >= 2 else OSCURO
    c += [f'<circle cx="{x}" cy="40" r="9" fill="{col}"/>', t(x, 20, f, 12, col, "700", "middle")]
    palabras = h.split(" ")
    l1 = " ".join(palabras[: (len(palabras) + 1) // 2]); l2 = " ".join(palabras[(len(palabras) + 1) // 2:])
    c += [t(x, 68, l1, 11, TINTA, "400", "middle"), t(x, 83, l2, 11, TINTA, "400", "middle")]
svg("linea-tiempo-mercado", 640, 95, c, "Línea de tiempo del mercado de GLP-1 en México")

# 5. Pictograma de abandono del tratamiento (64.8% en un año)
c = []
for i in range(20):
    col = ROJO if i < 13 else OSCURO
    c.append(persona(6 + i * 31, 6, col, 1.15))
c += [t(6, 66, "13 de cada 20 (64.8%) dejan el tratamiento antes de un año", 12, ROJO, "700"),
      t(6, 84, "Al suspenderlo, recuperan dos terceras partes del peso perdido en un año", 12, TINTA)]
svg("pictograma-abandono", 630, 92, c, "Abandono del tratamiento en un año")

# 6. Cómo se calcula el riesgo (diagrama de flujo multiplicativo)
cajas = [("Altas al año", "66,379", OSCURO), ("Buscan bajar de peso", "32% · 45% · 60%", OSCURO), ("Usan GLP-1", "4% a 20%", ROJO), ("Ya no se inscriben", "8% · 16% · 25%", ROJO)]
c = []
for i, (a, b, col) in enumerate(cajas):
    x = i * 160
    c += [f'<rect x="{x}" y="10" width="138" height="62" rx="6" fill="{col}"/>', t(x + 69, 34, a, 12, "#fff", "700", "middle"), t(x + 69, 56, b, 12, "#fff", "400", "middle")]
    if i < 3:
        c.append(t(x + 149, 47, "×", 18, TINTA, "700", "middle"))
c += [t(0, 98, "= ventas no realizadas.  Igual con los 97,046 socios activos = cancelaciones adicionales.", 12, TINTA, "700")]
svg("flujo-modelo", 640, 106, c, "Cómo se calcula el riesgo")

# 7. Membresías perdidas por año y escenario
COL = {"Conservador": GRIS, "Base": ROJO, "Acelerado": OSCURO}
W, H, L, B, T = 640, 300, 60, 250, 30
maxv = 5000
yv = lambda v: B - (B - T) * v / maxv
c = []
for v in range(0, maxv + 1, 1000):
    c += [f'<line x1="{L}" x2="{W-10}" y1="{yv(v):.1f}" y2="{yv(v):.1f}" stroke="{CLARO}"/>', t(L - 8, yv(v) + 4, fmt(v), 11, SUAVE, "400", "end")]
gw = (W - L - 30) / 3; bw = 44
for i, anio in enumerate([2027, 2028, 2029]):
    gx = L + 15 + i * gw
    for j, n in enumerate(COL):
        f = ESC[n][i]; v = f["ventas_no_realizadas"] + f["cancelaciones_adicionales"]
        x = gx + j * (bw + 12)
        c += [f'<rect x="{x:.1f}" y="{yv(v):.1f}" width="{bw}" height="{B-yv(v):.1f}" fill="{COL[n]}"/>', t(x + bw/2, yv(v) - 5, fmt(v), 11, TINTA, "700", "middle")]
    c.append(t(gx + (3*bw + 24)/2, B + 20, str(anio), 12, TINTA, "700", "middle"))
lx = L + 15
for n in COL:
    c += [f'<rect x="{lx}" y="{H-22}" width="12" height="12" fill="{COL[n]}"/>', t(lx + 18, H - 12, n, 12)]; lx += 130
svg("membresias-perdidas", W, H, c, "Membresías perdidas por año y escenario")

# 8. Ingreso perdido acumulado (barras apiladas por año)
c = []
maxi = 140
for j, n in enumerate(COL):
    y = 10 + j * 52
    x = 110
    c.append(t(0, y + 20, n, 12, TINTA, "700"))
    acum = 0
    for i, f in enumerate(ESC[n]):
        w = f["ingreso_perdido_mdp"] / maxi * 440
        tono = [0.45, 0.7, 1.0][i]
        c.append(f'<rect x="{x:.1f}" y="{y}" width="{w:.1f}" height="30" fill="{COL[n]}" fill-opacity="{tono}"/>')
        x += w; acum += f["ingreso_perdido_mdp"]
    c.append(t(x + 8, y + 20, f"${acum:,.1f} mdp", 12, TINTA, "700"))
c += [t(110, 172, "Tono claro a oscuro: 2027, 2028 y 2029", 11, SUAVE)]
svg("ingreso-perdido", 640, 180, c, "Ingreso perdido acumulado 2027 a 2029")

# 9. Mapa de calor de sensibilidad 2029
rej = R["rejilla_2029_base"]
usos = list(rej.keys()); susts = list(rej[usos[0]].keys())
vals = [v for f in rej.values() for v in f.values()]; vmin, vmax = min(vals), max(vals)
c = [t(150, 16, "Sustitución: cuántos usuarios ya no se inscriben o cancelan", 11, SUAVE)]
for j, s_ in enumerate(susts):
    c.append(t(195 + j * 140, 36, s_.replace("sust_", ""), 12, TINTA, "700", "middle"))
for i, u in enumerate(usos):
    y = 46 + i * 46
    c.append(t(0, y + 27, "Uso de GLP-1 en 2029: " + u.replace("uso_", ""), 12, TINTA, "700"))
    for j, s_ in enumerate(susts):
        v = rej[u][s_]; a = 0.15 + 0.85 * (v - vmin) / (vmax - vmin)
        borde = f' stroke="{TINTA}" stroke-width="3"' if (i == 1 and j == 1) else ""
        c += [f'<rect x="{130 + j*140}" y="{y}" width="132" height="40" fill="{ROJO}" fill-opacity="{a:.2f}"{borde}/>', t(196 + j*140, y + 26, f"${v} mdp", 13, "#fff" if a > 0.5 else TINTA, "700", "middle")]
svg("sensibilidad", 560, 190, c, "Ingreso perdido en 2029 según uso del medicamento y sustitución")

# 10. Lo que muestran los estudios de la industria (barras de antes y después)
c = []
filas = [("Afiliación a clubes, hogares de más de USD 150 mil (William Blair)", 53.5, 45.0, "%"),
         ("Suscriptores sin medicamento de WeightWatchers (índice 100 = año anterior)", 100, 74.6, ""),
         ("Pasos diarios de usuarios de GLP-1 (ENDO 2026)", 5047, 4487, "")]
for i, (lab, a, b, u) in enumerate(filas):
    y = 10 + i * 62
    m = max(a, b)
    c += [t(0, y + 12, lab, 12, TINTA, "700"),
          f'<rect x="0" y="{y+20}" width="{a/m*400:.1f}" height="14" fill="{GRIS}"/>', t(a/m*400 + 6, y + 32, f"Antes: {fmt(a) if a > 1000 else a}{u}", 11),
          f'<rect x="0" y="{y+37}" width="{b/m*400:.1f}" height="14" fill="{ROJO}"/>', t(b/m*400 + 6, y + 49, f"Después: {fmt(b) if b > 1000 else b}{u}", 11, ROJO, "700")]
svg("industria-antes-despues", 640, 196, c, "Antes y después del medicamento en tres indicadores")

# 11. PwC Reino Unido: gasto en ejercicio
c = [t(0, 14, "Usuarios de GLP-1 que cambiaron su gasto en ejercicio (PwC Reino Unido, más de 2,300 usuarios)", 12, TINTA, "700"),
     f'<rect x="0" y="26" width="{27*16}" height="30" fill="{VERDE}"/>', t(8, 46, "27% gasta más", 12, "#fff", "700"),
     f'<rect x="{27*16 + 4}" y="26" width="{5*16}" height="30" fill="{ROJO}"/>', t(27*16 + 10, 46, "5% menos", 11, "#fff", "700"),
     t(0, 80, "De quienes gastan más:", 11, TINTA, "700"),
     t(0, 96, "41% se inscribió a un gimnasio o a clases  ·  20% se cambió a un club más premium  ·  16% contrató entrenador", 11)]
svg("pwc", 640, 104, c, "Cambio en gasto en ejercicio de usuarios de GLP-1")

# 12. Composición de la pérdida de peso: grasa frente a masa magra
c = []
for i, (lab, magra) in enumerate([("Semaglutida (STEP 1)", 38), ("Tirzepatida (SURMOUNT-1)", 25)]):
    y = 10 + i * 50
    c += [t(0, y + 20, lab, 12, TINTA, "700"), f'<rect x="190" y="{y}" width="{(100-magra)*4}" height="30" fill="{GRIS}"/>', t(198, y + 20, f"Grasa {100-magra}%", 12, TINTA, "700"),
          f'<rect x="{190 + (100-magra)*4}" y="{y}" width="{magra*4}" height="30" fill="{ROJO}"/>', t(196 + (100-magra)*4, y + 20, f"Masa magra {magra}%", 12, "#fff", "700")]
svg("composicion-perdida", 600, 110, c, "Composición del peso perdido con medicamento")

# 13. Masa magra perdida con y sin fuerza (Green 2026)
c = []
for k, (lab, v, col) in enumerate([("Tirzepatida sola", 4.67, GRIS), ("Tirzepatida + fuerza 3 veces por semana", 3.57, ROJO)]):
    y = 26 + k * 62; w = v / 5 * 380
    c += [t(0, y - 8, lab, 12, TINTA, "700"), f'<rect x="0" y="{y}" width="{w:.1f}" height="28" fill="{col}"/>', t(w + 8, y + 19, f"−{v:.2f} kg de masa magra", 12, TINTA, "700")]
c += [t(0, 160, "Pérdida de peso igual en ambos grupos: −22.61 y −22.28 kg. Con fuerza, 23% menos masa magra perdida.", 11, SUAVE)]
svg("green-2026", 640, 168, c, "Masa magra perdida con y sin entrenamiento de fuerza")

# 14. Las cuatro fases del programa
fases = [("1 · Adaptación", "Semanas 1 a 6", "2 fuerza · 2 cardio suave · 1 movilidad", GRIS),
         ("2 · Conservar", "Semanas 7 a 16", "3 fuerza · 150 min cardio · 1 movilidad", ROJO),
         ("3 · Recomponer", "Semanas 17 a 24", "3 a 4 fuerza · 1 a 2 intensidad", OSCURO),
         ("4 · Sostener", "12 meses", "3 fuerza · baile para el hábito", TINTA)]
c = []
for i, (a, b, d, col) in enumerate(fases):
    x = i * 160
    c += [f'<path d="M{x} 0 H{x+148} L{x+158} 40 L{x+148} 80 H{x} L{x+10} 40 Z" fill="{col}"/>',
          t(x + 79, 30, a, 13, "#fff", "700", "middle"), t(x + 79, 52, b, 11, "#fff", "400", "middle")]
    for k, linea in enumerate(d.split(" · ")):
        c.append(t(x + 79, 100 + k * 15, linea, 10.5, TINTA, "400", "middle"))
svg("fases", 640, 142, c, "Las cuatro fases del programa")

# 15. Las 51 clases por papel en el programa (barra apilada)
papeles = [("Conserva músculo", 5, ROJO), ("Complementa la fuerza", 12, OSCURO), ("Actividad aeróbica", 9, "#a3131a"), ("Alta intensidad", 6, GRIS), ("Sin efecto directo", 19, "#c9ced3")]
c = []; x = 0
for k, (lab, n, col) in enumerate(papeles):
    w = n / 51 * 620
    c += [f'<rect x="{x:.1f}" y="0" width="{w:.1f}" height="40" fill="{col}"/>', t(x + w/2, 25, str(n), 14, "#fff" if col not in ("#c9ced3",) else TINTA, "700", "middle")]
    lx = k * 128
    c += [f'<rect x="{lx}" y="54" width="11" height="11" fill="{col}"/>', t(lx + 15, 64, lab, 10.5, TINTA)]
    x += w
svg("clases-por-papel", 640, 72, c, "Las 51 clases del catálogo por papel en el programa")

# 16. Hospitales aliados: distancia al club más cercano
hosp = [("Ángeles Roma → Roma", 0.5), ("Hospital Español → Antara", 0.7), ("Ángeles México → Xola", 0.7), ("ABC Santa Fe → Santa Fe", 0.8),
        ("Médica Sur → Patio Tlalpan", 2.2), ("Puerta de Hierro Sur → La Rioja", 2.5), ("TecSalud → San Pedro", 2.9)]
c = []
for i, (lab, d) in enumerate(hosp):
    y = 4 + i * 30
    c += [t(0, y + 16, lab, 12), f'<rect x="250" y="{y+3}" width="{d/3*300:.1f}" height="18" fill="{ROJO if d < 1 else OSCURO}"/>', t(256 + d/3*300, y + 17, f"{d} km", 12, TINTA, "700")]
svg("hospitales", 640, 216, c, "Distancia entre hospital con programa de obesidad y club")

# 17. Los tres círculos de aliados
c = [f'<circle cx="160" cy="120" r="115" fill="{CLARO}"/>', f'<circle cx="160" cy="120" r="78" fill="#f6c9cb"/>', f'<circle cx="160" cy="120" r="40" fill="{ROJO}"/>',
     t(160, 116, "Sports World", 11, "#fff", "700", "middle"), t(160, 130, "entrena y mide", 10, "#fff", "400", "middle"),
     t(160, 62, "Médico", 11, OSCURO, "700", "middle"), t(160, 24, "Nutrición y comida", 11, TINTA, "700", "middle"),
     t(320, 60, "Círculo 1 · Médico que trata", 12, OSCURO, "700"), t(320, 77, "8 hospitales con programa de obesidad y Clivi", 11),
     t(320, 115, "Círculo 2 · Nutriólogo que alimenta", 12, OSCURO, "700"), t(320, 132, "Nutriólogos con cédula, Nutrimind y Fitia", 11),
     t(320, 170, "Círculo 3 · Cocina que entrega", 12, OSCURO, "700"), t(320, 187, "Manzana Verde y proveedores locales", 11)]
svg("circulos-aliados", 640, 240, c, "Los tres círculos de aliados")

# 18. Hoja de ruta (diagrama de Gantt)
meses = ["dic 26", "mar 27", "jun 27", "sep 27", "dic 27", "mar 28", "jun 28", "sep 28", "dic 28", "mar 29", "jun 29"]
def mx(i): return 170 + i * 42
c = []
for i, m in enumerate(meses):
    c += [f'<line x1="{mx(i)}" y1="22" x2="{mx(i)}" y2="200" stroke="{CLARO}"/>', t(mx(i), 14, m, 10, SUAVE, "400", "middle")]
tareas = [("0 · Preparación", 0, 1, GRIS), ("1 · Piloto en 6 clubes", 1, 3, ROJO), ("2 · Lectura de resultados", 3, 3.33, OSCURO),
          ("3 · 20 clubes", 3.33, 6, ROJO), ("4 · Los 49 clubes", 6, 10, OSCURO)]
for k, (lab, a, b, col) in enumerate(tareas):
    y = 32 + k * 34
    c += [t(0, y + 16, lab, 12, TINTA, "700"), f'<rect x="{mx(a):.1f}" y="{y}" width="{(mx(b)-mx(a)):.1f}" height="22" rx="4" fill="{col}"/>']
c += [f'<line x1="{mx(9.1):.1f}" y1="22" x2="{mx(9.1):.1f}" y2="200" stroke="{ROJO}" stroke-dasharray="4 3"/>', t(mx(9.1) - 4, 214, "Posibles genéricos", 10, ROJO, "700", "end")]
svg("gantt", 640, 222, c, "Hoja de ruta")

print("Gráficas generadas:", sorted(os.listdir(OUT)))
