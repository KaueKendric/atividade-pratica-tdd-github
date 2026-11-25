export function calcularValorFinal(valor: number): number {
  if (valor >= 200) {
    return Math.round(valor * 100 * 0.8) / 100;
  }
  if (valor >= 100) {
    return Math.round(valor * 100 * 0.9) / 100;
  }
  return Math.round(valor * 100) / 100;
}
