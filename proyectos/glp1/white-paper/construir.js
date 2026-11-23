// Construye el white paper: inserta las gráficas del modelo y genera el PDF con Chromium.
const fs = require('fs'); const path = require('path');
const { chromium } = require('playwright');
const dir = __dirname;
let html = fs.readFileSync(path.join(dir, 'fuente.html'), 'utf8');
html = html.replace(/\{\{g:([a-z0-9-]+)\}\}/g, (m, n) => fs.readFileSync(path.join(dir, 'graficas', n + '.svg'), 'utf8'));
if (/\{\{/.test(html)) throw new Error('Quedó un marcador sin reemplazar');
fs.writeFileSync(path.join(dir, 'fuerza-y-peso.html'), html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + path.join(dir, 'fuerza-y-peso.html'), { waitUntil: 'load' });
  await p.pdf({ path: path.join(dir, 'fuerza-y-peso.pdf'), format: 'Letter', printBackground: true,
    displayHeaderFooter: true, margin: { top: '20mm', bottom: '18mm', left: '18mm', right: '18mm' },
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-family:Helvetica,Arial;font-size:7.5pt;color:#5f6b76;width:100%;padding:0 18mm;display:flex;justify-content:space-between"><span>Sports World · Fuerza y Peso · Recomendación para el equipo de marketing · Noviembre de 2026</span><span class="pageNumber"></span></div>' });
  await b.close(); console.log('PDF listo');
})();
