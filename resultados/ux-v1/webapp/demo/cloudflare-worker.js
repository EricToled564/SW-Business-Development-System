// Cloudflare Worker — proxy seguro para la API de Claude (Anthropic).
// La API key vive como SECRETO del Worker (env.ANTHROPIC_API_KEY); el navegador nunca la ve.
//
// Despliegue rápido (panel de Cloudflare):
//   1. dash.cloudflare.com → Workers & Pages → Create → Worker.
//   2. Pega este archivo como el código del Worker y "Deploy".
//   3. Settings → Variables and Secrets → add secret:
//        Name: ANTHROPIC_API_KEY   Value: <tu API key sk-ant-...>
//   4. Copia la URL del Worker (https://<nombre>.<cuenta>.workers.dev) y pégala en
//      webapp/demo/index.html → window.DEMO_PROXY_URL.
//
// Despliegue por CLI (alternativa):
//   npm i -g wrangler && wrangler login
//   wrangler deploy cloudflare-worker.js --name sw-claude-proxy
//   wrangler secret put ANTHROPIC_API_KEY   # pega la key cuando lo pida

const ALLOWED_ORIGINS = [
  "https://erictoled.github.io",   // GitHub Pages (producción)
  "http://localhost:8080",          // desarrollo local
  "http://127.0.0.1:8080",
];

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: cors });
    }
    if (!env.ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({ error: "ANTHROPIC_API_KEY no configurada en el Worker" }),
        { status: 500, headers: { ...cors, "content-type": "application/json" } });
    }

    try {
      const body = await request.text(); // { model, max_tokens, system, messages }
      const upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body,
      });
      const text = await upstream.text();
      return new Response(text, {
        status: upstream.status,
        headers: { ...cors, "content-type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: String(e) }),
        { status: 502, headers: { ...cors, "content-type": "application/json" } });
    }
  },
};
