const LIMITE_FRETE_REDUZIDO = 100;
const LIMITE_FRETE_GRATUITO = 200;
const FRETE_INTEGRAL = 20;
const FRETE_REDUZIDO = 10;

export function calcularFrete(valor: number): number {
  if (valor >= LIMITE_FRETE_GRATUITO) {
    return 0;
  }
  if (valor >= LIMITE_FRETE_REDUZIDO) {
    return FRETE_REDUZIDO;
  }
  return FRETE_INTEGRAL;
}
