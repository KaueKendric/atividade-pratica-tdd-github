const LIMITE_DESCONTO_INTERMEDIARIO = 100;
const LIMITE_DESCONTO_MAIOR = 200;

export function calcularValorFinal(valor: number): number {
  const desconto = valor >= LIMITE_DESCONTO_MAIOR
    ? 0.2
    : valor >= LIMITE_DESCONTO_INTERMEDIARIO ? 0.1 : 0;

  return Math.round(valor * 100 * (1 - desconto)) / 100;
}
