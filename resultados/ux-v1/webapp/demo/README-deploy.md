# Demo Cuestionario Inteligente — cómo dejarlo funcionando con la API

El demo (React) corre embebido en el web app y llama a Claude **a través de un proxy** (Cloudflare Worker)
que guarda tu API key como secreto. El navegador nunca ve la llave.

## Archivos
- `cuestionario-inteligente.jsx` — fuente canónica (alineada 100% al UX Architecture Specs).
- `app.demo.jsx` — versión para navegador, **generada** desde la canónica con `build-demo.py`
  (no la edites a mano; corre `python3 build-demo.py` tras cualquier cambio en la canónica).
- `index.html` — carga React + Babel + Tailwind por CDN y monta el demo. Aquí va `window.DEMO_PROXY_URL`.
- `cloudflare-worker.js` — el proxy. Guarda `ANTHROPIC_API_KEY` como secreto.

## Pasos (una sola vez, ~10 min)
1. **Crea el Worker.** dash.cloudflare.com → *Workers & Pages* → *Create* → *Worker*.
   Pega el contenido de `cloudflare-worker.js` y *Deploy*.
2. **Pon la API key como secreto.** En el Worker → *Settings* → *Variables and Secrets* → *Add* →
   tipo *Secret*, nombre `ANTHROPIC_API_KEY`, valor tu `sk-ant-...`. Guarda.
3. **Copia la URL del Worker** (`https://<nombre>.<cuenta>.workers.dev`).
4. **Pégala en `index.html`** en la línea `window.DEMO_PROXY_URL = "...";`. Commit + push.
5. (Si tu dominio de Pages no es `https://erictoled.github.io`, agrégalo a `ALLOWED_ORIGINS`
   en `cloudflare-worker.js` y vuelve a *Deploy*.)

### Alternativa por CLI
```bash
npm i -g wrangler && wrangler login
wrangler deploy cloudflare-worker.js --name sw-claude-proxy
wrangler secret put ANTHROPIC_API_KEY     # pega la key cuando lo pida
```

## Modelo
El demo usa `claude-sonnet-4-6`. Para cambiarlo, edita el `model` en `cuestionario-inteligente.jsx`
y regenera con `python3 build-demo.py`.

## Notas
- El proxy restringe CORS a los orígenes de `ALLOWED_ORIGINS` (Pages + localhost).
- Mientras `DEMO_PROXY_URL` siga en el placeholder, el demo corre hasta la pantalla de resultado y
  ahí mostrará el error de conexión (esperado): conéctalo al Worker para ver el copy generado.
