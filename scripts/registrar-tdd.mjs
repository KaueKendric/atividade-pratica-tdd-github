import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";

const [fase, etapa] = process.argv.slice(2);
if (!["red", "green", "refactor"].includes(fase) || !/^\d{2}-[a-z-]+$/.test(etapa ?? "")) {
  throw new Error("Uso: node scripts/registrar-tdd.mjs red|green|refactor 01-nome-da-etapa");
}

const resultado = spawnSync("npm test -- --reporter=verbose", {
  shell: true,
  encoding: "utf8",
  env: { ...process.env, NO_COLOR: "1", FORCE_COLOR: "0" },
});
const saida = `${resultado.stdout ?? ""}${resultado.stderr ?? ""}`.replace(/\u001b\[[0-9;]*m/g, "");
const registro = [
  `Etapa: ${etapa}`,
  `Fase: ${fase}`,
  `Execução (UTC): ${new Date().toISOString()}`,
  "Comando: npm test -- --reporter=verbose",
  `Código de saída: ${resultado.status}`,
  "",
  saida,
].join("\n");

mkdirSync("evidencias", { recursive: true });
writeFileSync(`evidencias/${etapa}-${fase}.txt`, registro, "utf8");
process.stdout.write(registro);
const esperado = fase === "red" ? 1 : 0;
if (resultado.error || resultado.status !== esperado) {
  console.error(`A fase ${fase} deveria terminar com código ${esperado}.`);
  process.exit(1);
}
