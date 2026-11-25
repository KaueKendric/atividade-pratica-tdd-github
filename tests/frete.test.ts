import { describe, expect, it } from "vitest";
import * as frete from "../src/frete.js";

describe("Cálculo de frete", () => {
  it.each([[0, 20], [50, 20], [99.99, 20]])("compra de R$ %s paga R$ %s de frete", (valor, esperado) => {
    expect(frete.calcularFrete(valor)).toBe(esperado);
  });

  it.each([[100, 10], [199.99, 10]])("compra de R$ %s paga frete reduzido", (valor, esperado) => {
    expect(frete.calcularFrete(valor)).toBe(esperado);
  });
});
