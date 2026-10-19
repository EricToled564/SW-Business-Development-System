# Procedimiento de gestión de incidentes de privacidad

**Ámbito:** toda vulneración de seguridad —real o razonablemente sospechada— que afecte datos personales de prospectos, clientes o asesores tratados por el sistema en cualquiera de sus cuatro canales.

**Quién comunica a la persona.** Sports World, como **responsable**. Final Upgrade, como **encargado**, notifica a Sports World y ejecuta la contención en los componentes que opera. El encargado nunca comunica directamente al titular.

---

## 1 · Qué cuenta como incidente

No todo fallo técnico es un incidente de privacidad. Lo es cuando hay **pérdida, destrucción, alteración, acceso, uso, divulgación o tratamiento no autorizado** de datos personales. Ejemplos concretos de este sistema:

| Situación | ¿Incidente? |
|---|---|
| Caída del sitio sin exposición de datos | No. Es un incidente operativo |
| Credencial del CRM expuesta en un repositorio | **Sí**, aunque nadie la haya usado |
| Resumen de un prospecto enviado al club equivocado | **Sí** |
| Bitácora que empezó a registrar teléfonos por un cambio de código | **Sí** |
| Un proveedor notifica una brecha en su plataforma | **Sí**, y hereda el plazo |
| Token de traspaso adivinable o reutilizable por un tercero | **Sí** |
| Asesor que consulta registros de prospectos que no le corresponden | **Sí**. Uso no autorizado |

---

## 2 · Los plazos, y la contradicción que resuelven

El Contrato fija **72 horas** para notificar a Sports World, contadas desde que el prestador conoce la vulneración. `seguridad.es.md` dice «de inmediato». **No son lo mismo y hay que unificarlos.**

La formulación que rige: **sin demora indebida y, en todo caso, dentro de las 72 horas** siguientes a que se conozca el incidente. «Sin demora» es la conducta esperada; 72 horas es el límite exterior, no el objetivo.

**No se espera a tener el cuadro completo para notificar.** Se notifica con lo que se sabe y se actualiza conforme se sabe más. Esperar a la certeza consume el plazo.

---

## 3 · Las cinco etapas

### 3.1 Detección

Un solo punto de entrada, cualquiera que sea el origen: alerta de monitoreo, aviso de un proveedor, reporte de una persona del equipo, reporte de un titular o hallazgo durante una auditoría.

Quien detecta no evalúa la gravedad: **reporta.** La evaluación es de la etapa 3.3 y la hace quien tiene el cuadro completo. Un procedimiento que pide al que detecta que decida si «vale la pena» reportar no se entera de nada.

### 3.2 Contención

Antes de entender qué pasó, detener lo que sigue pasando.

| Acción | Cuándo aplica |
|---|---|
| Revocar credenciales y rotar llaves | Exposición o sospecha de exposición de secretos |
| Suspender el flujo o el componente afectado | Mientras la causa siga activa |
| Invalidar los identificadores de traspaso vigentes | Compromiso del mecanismo de token |
| Retirar del buzón el mensaje mal dirigido | Envío erróneo, cuando la plataforma lo permita |
| Congelar bitácoras y evidencia | Siempre. Antes de que la rotación normal las borre |

La contención no espera autorización. Se ejecuta y se informa.

### 3.3 Evaluación

Dos preguntas, en este orden:

**Primera: ¿es una vulneración de datos personales?** Si no, se cierra como incidente operativo y se documenta igual.

**Segunda: ¿afecta significativamente los derechos patrimoniales o morales de las personas?** Ésta es la que dispara la comunicación al titular. Se decide con cuatro elementos: **categorías de datos** comprometidos, **volumen** y número de personas, **posibilidad real de identificación** y **consecuencias plausibles** para ellas.

Los datos sensibles y los financieros elevan el resultado por sí solos. Este sistema, por diseño, no trata datos sensibles; si aparecieran en un incidente, es además una señal de que algo falló antes.

### 3.4 Documentación

El registro de incidentes recoge, por cada uno:

fecha y hora de conocimiento · origen de la detección · descripción · sistemas y componentes afectados · categorías de datos · volumen estimado y número de personas · acciones de contención con su hora · evaluación y su motivación · decisión sobre notificar al titular · comunicaciones emitidas · causa raíz · acciones correctivas · fecha de cierre.

Se abre al detectar, no al concluir. Un registro escrito al final es una reconstrucción.

### 3.5 Comunicación

| A quién | Quién comunica | Cuándo | Qué contiene |
|---|---|---|---|
| **Sports World** | Final Upgrade | Sin demora, máximo 72 h | Naturaleza, datos comprometidos, magnitud, contención adoptada y actualizaciones posteriores |
| **A la persona afectada** | **Sports World** | Cuando la evaluación 3.3 lo determine | Qué ocurrió, qué datos suyos, qué puede hacer para protegerse, qué se está haciendo y dónde obtener más información |
| **A la autoridad** | Sports World | Si procede conforme a la ley vigente | Lo que la autoridad requiera |

La comunicación a la persona se escribe en lenguaje llano, sin atenuantes que oculten el alcance.

---

## 4 · Después del cierre

**La causa raíz se corrige, no se anota.** Un incidente cerrado con «se pidió al equipo tener más cuidado» no está cerrado.

**Las medidas de seguridad se revisan tras cada vulneración.** No es una buena práctica opcional: cambiar los controles después de que fallaron es la única forma de que el mismo incidente no se repita.

**Si el incidente reveló que un dato llegaba a donde no debía** —una bitácora con teléfonos, un prompt con datos de contacto, un correo sin política de conservación—, la corrección incluye la regla que lo impida en el futuro, no sólo la limpieza de lo ocurrido.

---

## 5 · Simulacro

El procedimiento se prueba antes de necesitarlo, al menos una vez antes de salir a producción: se simula un incidente, se recorren las cinco etapas y se mide si la notificación habría salido dentro del plazo.

Un procedimiento que nunca se ejecutó no se sabe si funciona.
