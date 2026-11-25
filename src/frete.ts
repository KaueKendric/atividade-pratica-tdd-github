export function calcularFrete(valor: number): number {
  if (valor >= 100) {
    return 10;
  }
  return 20;
}
