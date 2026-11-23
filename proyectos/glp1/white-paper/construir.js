// Construye el white paper: inserta las gráficas del modelo y genera el PDF con Chromium.
const fs = require('fs'); const path = require('path');
const { chromium } = require('playwright');
const dir = __dirname;
let html = fs.readFileSync(path.join(dir, 'fuente.html'), 'utf8');
html = html.replace('{{GRAFICA_1}}', fs.readFileSync(path.join(dir, 'grafica-1.svg'), 'utf8'))
           .replace('{{GRAFICA_2}}', fs.readFileSync(path.join(dir, 'grafica-2.svg'), 'utf8'));
fs.writeFileSync(path.join(dir, 'fuerza-y-peso.html'), html);
(async () => {
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + path.join(dir, 'fuerza-y-peso.html'), { waitUntil: 'load' });
  await p.pdf({ path: path.join(dir, 'fuerza-y-peso.pdf'), format: 'Letter', printBackground: true,
    displayHeaderFooter: true, margin: { top: '20mm', bottom: '18mm', left: '18mm', right: '18mm' },
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-family:Helvetica,Arial;font-size:7.5pt;color:#5f6b76;width:100%;padding:0 18mm;display:flex;justify-content:space-between"><span>Sports World · Fuerza y Peso · White paper · Noviembre de 2026</span><span class="pageNumber"></span></div>' });
  await b.close(); console.log('PDF listo');
})();
