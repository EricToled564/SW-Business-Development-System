# Verificación de integridad

Hash SHA-256 de cada archivo de esta carpeta, al 18 de septiembre de 2026.

Para comprobar que un archivo no cambió: `sha256sum <archivo>` y comparar contra esta tabla. Si no coincide, el archivo se modificó después de esta fecha, y el commit correspondiente dice por qué.

| Archivo | Palabras | SHA-256 |
|---|---|---|
| `01-por-que-existe-la-experiencia-ideal.es.md` | 1,512 | `edc653a57b5a2ad3ea998214884c92494b8495b241682197c70dbc3682eac69b` |
| `02-que-recibe-la-persona-y-que-recibe-el-asesor.es.md` | 1,457 | `d07af0e19139c559b405a12656d7f5442870772cdfa39b564670493341f6317e` |
| `03-quien-puede-recorrer-la-experiencia.es.md` | 946 | `db4e737635a74affb01e9d6e7c8a262437ef0692ede24bac2645c566cda50758` |
| `04-el-cuestionario.es.md` | 2,230 | `f31d7c89a56203e80447b02f59f826b4aad0b9e93548df90a8df581aa05ea6f6` |
| `README.es.md` | 210 | `6d0679a6182abee3d46298b999bee0d98a6dbe101103409aaf97b018f87c5372` |
| `decisiones.es.md` | 1,604 | `a8950468fc5be95ed4f6beb522a1966a94c0a5ea55b3872e14105c974ea70d14` |

## Estado de aprobación

| Capítulo | Aprobado por Eric | Modificado después de aprobarse | Quién ordenó el cambio |
|---|---|---|---|
| 1 | Sí | Se agregó el apartado 1.3.4, qué es BES | Eric |
| 2 | Sí | Las leyendas dejan de ser cuatro fijas; se quitó la cifra de requisitos | Eric |
| 3 | Sí | La precarga se muestra en la ruta reducida | Eric |
| 4 | Sí | La clase aceptada sin club se vuelve requisito, en 4.2.3 y 4.2.4 | Eric |

Desde esta fecha, cada capítulo se sube en el momento de su aprobación y todo cambio posterior queda como commit propio.
