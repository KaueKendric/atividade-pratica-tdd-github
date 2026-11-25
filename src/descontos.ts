export function calcularValorFinal(valor: number): number {
  if (valor >= 200) {
    return valor * 0.8;
  }
  if (valor >= 100) {
    return valor * 0.9;
  }
  return valor;
}
