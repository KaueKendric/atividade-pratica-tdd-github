import { describe, expect, it } from "vitest";
import * as descontos from "../src/descontos.js";

describe("Sistema de descontos", () => {
  it.each([[0, 0], [50, 50], [99.99, 99.99]])("compra de R$ %s fica em R$ %s", (valor, esperado) => {
    expect(descontos.calcularValorFinal(valor)).toBe(esperado);
  });

  it.each([[100, 90], [150, 135]])("aplica dez por cento a R$ %s", (valor, esperado) => {
    expect(descontos.calcularValorFinal(valor)).toBe(esperado);
  });

  it.each([[200, 160], [250, 200]])("aplica vinte por cento a R$ %s", (valor, esperado) => {
    expect(descontos.calcularValorFinal(valor)).toBe(esperado);
  });
});
