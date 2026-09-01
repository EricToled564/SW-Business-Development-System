#!/usr/bin/env node
/**
 * Instala el candado como gancho de git, para que no dependa de que alguien
 * se acuerde de correrlo.
 *
 * A partir de aquí, ningún commit entra si el registro declara una corrección
 * sin la respuesta de NotebookLM que la sustenta, o si alguna de las dos
 * verificaciones del depósito encuentra un hallazgo.
 *
 * Uso:  node verificacion/instalar-candado.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const raiz = execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim();
const hooks = path.join(raiz, ".git", "hooks");
const destino = path.join(hooks, "pre-commit");

const gancho = `#!/bin/sh
# Instalado por verificacion/instalar-candado.js — no editar a mano.
set -e

echo "· candado de verificación con NotebookLM"
node verificacion/candado-notebooklm.js

echo "· auditoría de documentación"
( cd resultados/ux-v1 && node tools/audit-docs.js --quiet )

echo "· consistencia del depósito"
( cd resultados/ux-v1 && node tools/consistencia.js )
`;

fs.mkdirSync(hooks, { recursive: true });
fs.writeFileSync(destino, gancho, { mode: 0o755 });

console.log(`Candado instalado en ${path.relative(raiz, destino)}`);
console.log("Desde ahora ningún commit pasa si falta evidencia o si una verificación falla.");
