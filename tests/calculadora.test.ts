import { describe, expect, it } from "vitest";
import * as calculadora from "../src/calculadora.js";

describe("Calculadora de operações", () => {
  it("soma 3 e 5 e retorna 8", () => {
    expect(calculadora.somar(3, 5)).toBe(8);
  });

  it("subtrai 4 de 10 e retorna 6", () => {
    expect(calculadora.subtrair(10, 4)).toBe(6);
  });

  it("multiplica 4 por 3 e retorna 12", () => {
    expect(calculadora.multiplicar(4, 3)).toBe(12);
  });
});
