export function somar(a: number, b: number): number {
  return a + b;
}

export function subtrair(a: number, b: number): number {
  return a - b;
}

export function multiplicar(a: number, b: number): number {
  return a * b;
}

export function dividir(dividendo: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Divisão por zero");
  }
  return dividendo / divisor;
}
