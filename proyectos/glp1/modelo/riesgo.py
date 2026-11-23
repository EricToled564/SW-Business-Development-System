"""Modelo de riesgo «no hacer nada» — Sports World frente a los GLP-1.

Cuantifica, por escenario y por año (2027-2029):
  1. Ventas no realizadas: prospectos que buscan bajar de peso, usan GLP-1 y ya no se inscriben.
  2. Membresías canceladas adicionales: socios que buscan bajar de peso, inician GLP-1 y cancelan.
  3. Ingreso perdido (cuotas de mantenimiento + inscripción) y efecto en EBITDA.

Cada parámetro lleva su fuente (ver investigacion/). Ejecutar: python3 riesgo.py
"""
import json

# --- Datos verificados (reportes trimestrales de Sports World, investigacion/01) ---
CLIENTES = 97_046              # clientes activos 3T26 (R-3T26)
DESERCION_BRUTA = 0.057        # deserción bruta promedio 3T26; se interpreta mensual (no definido por la empresa)
ARPU = 1_508                   # MXN/cliente/mes = 439,163 miles / 3 / 97,046 (cálculo propio)
ALTAS_ANUALES = round(CLIENTES * DESERCION_BRUTA * 12)   # base plana 2T26-3T26 => altas ≈ bajas
INSCRIPCION_POR_ALTA = round(59_363_000 / ALTAS_ANUALES) # ingresos por membresías UDM / altas implícitas
INGRESO_UDM = 2_322_693_000    # ingresos totales UDM a 3T26
EBITDA_2025 = 354_805_000      # EBITDA sin IFRS 16, FY2025 (R-4T25)
TRASPASO_EBITDA = 0.80         # supuesto: 80% del ingreso perdido cae a EBITDA (costos mayormente fijos)

# --- Supuestos por escenario (fuente en el comentario) ---
ESCENARIOS = {
    "Conservador": dict(
        motivo_peso=0.32,    # Mercado Fitness México: 32% de usuarios de gimnasio cita bajar de peso (respuesta múltiple)
        uso=[0.04, 0.05, 0.06],   # uso de GLP-1 en el segmento; ancla Worldpanel 3.8% de hogares (2026)
        sustitucion=0.08,    # mitad de la caída de afiliación de William Blair en ingreso alto
    ),
    "Base": dict(
        motivo_peso=0.45,    # Inferencia: fuerza de ventas de SW (bajar de peso, el objetivo más frecuente; 80-90% busca un cambio físico) acotada por Alfawaz 2018 (35%) y Eguchi 2023 (92.2% de quienes fijan meta de peso)
        uso=[0.06, 0.08, 0.12],   # concentración en NSE alto (NielsenIQ) + 5.7% de hogares que lo considera
        sustitucion=0.16,    # William Blair: afiliación en hogares >150k USD bajó de 53.5% a 45.0% (-16% relativo)
    ),
    "Acelerado": dict(
        motivo_peso=0.60,    # Cota alta: testimonio de campo de SW (80-90% busca un cambio físico) menos estética y masa muscular
        uso=[0.08, 0.12, 0.20],   # genéricos de semaglutida hacia 2029, pastillas; EE. UU. ya en 12% de adultos (KFF)
        sustitucion=0.25,    # WeightWatchers: suscriptores sin fármaco -25.4% en un año
    ),
}
ANIOS = [2027, 2028, 2029]


def simular(p):
    faltante = 0.0          # socios que faltan frente al escenario sin GLP-1
    out = []
    for i, anio in enumerate(ANIOS):
        u = p["uso"][i]
        ventas_perdidas_mes = ALTAS_ANUALES * p["motivo_peso"] * u * p["sustitucion"] / 12
        cancel_extra_mes = CLIENTES * p["motivo_peso"] * u * p["sustitucion"] / 12
        ingreso = 0.0
        for _ in range(12):
            # los socios perdidos se habrían ido de todos modos a la tasa de deserción base
            faltante = faltante * (1 - DESERCION_BRUTA) + ventas_perdidas_mes + cancel_extra_mes
            ingreso += faltante * ARPU + ventas_perdidas_mes * INSCRIPCION_POR_ALTA
        out.append(dict(
            anio=anio,
            ventas_no_realizadas=round(ventas_perdidas_mes * 12),
            cancelaciones_adicionales=round(cancel_extra_mes * 12),
            socios_faltantes_dic=round(faltante),
            ingreso_perdido_mdp=round(ingreso / 1e6, 1),
            pct_ingreso=round(100 * ingreso / INGRESO_UDM, 2),
            ebitda_perdido_mdp=round(ingreso * TRASPASO_EBITDA / 1e6, 1),
            pct_ebitda=round(100 * ingreso * TRASPASO_EBITDA / EBITDA_2025, 1),
        ))
    return out


def embudo(p):
    """Cuántas personas buscan bajar de peso, cuántas están en riesgo (usan GLP-1) y cuántas se pierden, por año."""
    filas = []
    for i, anio in enumerate(ANIOS):
        u = p["uso"][i]
        filas.append(dict(
            anio=anio,
            socios_buscan_peso=round(CLIENTES * p["motivo_peso"]),
            socios_en_riesgo=round(CLIENTES * p["motivo_peso"] * u),
            socios_cancelan=round(CLIENTES * p["motivo_peso"] * u * p["sustitucion"]),
            altas_buscan_peso=round(ALTAS_ANUALES * p["motivo_peso"]),
            altas_en_riesgo=round(ALTAS_ANUALES * p["motivo_peso"] * u),
            altas_no_ocurren=round(ALTAS_ANUALES * p["motivo_peso"] * u * p["sustitucion"]),
        ))
    return filas


def sensibilidad():
    """Rejilla 2029: ingreso perdido (mdp) según uso de GLP-1 en 2029 y tasa de sustitución.
    El modelo es multiplicativo: las tres palancas pesan lo mismo; por eso se muestra una rejilla y no un tornado."""
    filas = {}
    for uso_2029 in [0.06, 0.12, 0.20]:
        fila = {}
        for sust in [0.08, 0.16, 0.25]:
            p = dict(ESCENARIOS["Base"])
            p["uso"] = [uso_2029 * 0.5, uso_2029 * 0.67, uso_2029]
            p["sustitucion"] = sust
            fila[f"sust_{int(sust*100)}%"] = simular(p)[-1]["ingreso_perdido_mdp"]
        filas[f"uso_{int(uso_2029*100)}%"] = fila
    return filas


if __name__ == "__main__":
    resultado = {
        "parametros": dict(CLIENTES=CLIENTES, DESERCION_BRUTA=DESERCION_BRUTA, ARPU=ARPU,
                           ALTAS_ANUALES=ALTAS_ANUALES, INSCRIPCION_POR_ALTA=INSCRIPCION_POR_ALTA,
                           TRASPASO_EBITDA=TRASPASO_EBITDA),
        "escenarios": {n: simular(p) for n, p in ESCENARIOS.items()},
        "rejilla_2029_base": sensibilidad(),
        "embudo": {n: embudo(p) for n, p in ESCENARIOS.items()},
    }
    for n, filas in resultado["escenarios"].items():
        acum = sum(f["ventas_no_realizadas"] + f["cancelaciones_adicionales"] for f in filas)
        ing = sum(f["ingreso_perdido_mdp"] for f in filas)
        print(f"\n{n}: membresías perdidas 2027-2029 = {acum:,}; ingreso perdido acumulado = {ing:,.1f} mdp")
        for f in filas:
            print("  ", f)
    for n, filas in resultado["embudo"].items():
        print("Embudo", n, filas[-1])
    print("\nParámetros:", resultado["parametros"])
    print("Rejilla 2029 (ingreso perdido, mdp):", resultado["rejilla_2029_base"])
    json.dump(resultado, open("resultado.json", "w"), ensure_ascii=False, indent=1)
