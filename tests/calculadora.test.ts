import { describe, expect, it } from "vitest";
import * as calculadora from "../src/calculadora.js";

describe("Calculadora de operações", () => {
  it("soma 3 e 5 e retorna 8", () => {
    expect(calculadora.somar(3, 5)).toBe(8);
  });
});
