# Atividade prática de TDD

Aluno: Kauê Kendric Loureiro da Costa, 10° semestre engenharia da computação

Atividade de Engenharia de Software com três desafios em TypeScript e Vitest.

## Executar

Requisito: Node.js 22.12 ou superior, com npm.

```bash
npm ci
npm test
npm run typecheck
```

Para manter os testes executando durante alterações:

```bash
npm run test:watch
```

## Organização

```text
src/
  calculadora.ts
  descontos.ts
  frete.ts
tests/
  calculadora.test.ts
  descontos.test.ts
  frete.test.ts
evidencias/                  Saídas reais dos testes em cada fase
scripts/registrar-tdd.mjs    Executa os testes e registra o resultado
package.json
package-lock.json
tsconfig.json
```

As implementações e os testes estão separados. `node_modules` não faz parte do repositório.

## Desafio 1: calculadora de operações

As funções `somar`, `subtrair`, `multiplicar` e `dividir` recebem dois números.
A divisão por zero lança `Error` com a mensagem exata `Divisão por zero`.

| Operação | Entrada | Resultado esperado |
| --- | --- | --- |
| Soma | 3 e 5 | 8 |
| Subtração | 10 e 4 | 6 |
| Multiplicação | 4 e 3 | 12 |
| Divisão | 10 e 2 | 5 |
| Divisão por zero | 10 e 0 | Erro: Divisão por zero |

## Desafio 2: sistema de descontos

`calcularValorFinal(valor)` retorna o valor da compra após aplicar a faixa de desconto:

| Valor da compra | Desconto |
| --- | --- |
| Abaixo de R$ 100 | Sem desconto |
| A partir de R$ 100 e abaixo de R$ 200 | 10% |
| A partir de R$ 200 | 20% |

O domínio de entrada da atividade é de valores não negativos. O resultado é um número arredondado para duas casas decimais; por exemplo, `90` representa R$ 90,00, sem necessidade de retornar uma string `"90.00"`.

Casos mínimos cobertos: `50 → 50`, `100 → 90`, `150 → 135`, `200 → 160` e `250 → 200`.
Também há testes para zero, R$ 99,99 e arredondamento: `123.45 → 111.11`, `199.99 → 179.99`, `200.03 → 160.02` e `100.05 → 90.05`.

## Desafio 3: cálculo de frete

`calcularFrete(valor)` retorna apenas o custo do frete de uma compra de valor não negativo.

| Valor da compra | Frete |
| --- | --- |
| Abaixo de R$ 100 | R$ 20 |
| A partir de R$ 100 e abaixo de R$ 200 | R$ 10 |
| A partir de R$ 200 | Gratuito (0) |

Casos mínimos cobertos: `50 → 20`, `99.99 → 20`, `100 → 10`, `199.99 → 10` e `200 → 0`. Foram incluídos também zero e R$ 250.

## Registro do ciclo TDD

Cada comportamento foi desenvolvido seguindo esta ordem:

1. **Red:** escrever o teste e executá-lo para observar a falha. O teste e a saída foram registrados no commit `Teste falhando: ...`.
2. **Green:** implementar o comportamento e executar novamente toda a suíte. A implementação e a saída foram registradas no commit `Implementa ...`.
3. **Refactor:** melhorar a organização quando houve oportunidade e executar novamente os testes. Os descontos tiveram o arredondamento centralizado e os limites nomeados. No frete, os limites e preços passaram a usar constantes. A calculadora permaneceu simples, sem necessidade de uma refatoração adicional.

Os arquivos de `evidencias/` contêm comando, etapa, fase, data da execução em UTC, código de saída e saída do Vitest. As falhas foram efetivamente executadas, e os commits preservam o estado do código de cada fase. Nos primeiros testes de cada módulo, a falha ocorre pela ausência da função; nas etapas seguintes, as regras ainda não implementadas causam falhas de resultado.

| Comportamento | Commit Red | Commit Green | Evidências |
| --- | --- | --- | --- |
| Soma | [4ceab1d](../../commit/4ceab1d) | [5bb0ac6](../../commit/5bb0ac6) | [Red](evidencias/01-soma-red.txt) / [Green](evidencias/01-soma-green.txt) |
| Subtração | [c7ed3b2](../../commit/c7ed3b2) | [0110d06](../../commit/0110d06) | [Red](evidencias/02-subtracao-red.txt) / [Green](evidencias/02-subtracao-green.txt) |
| Multiplicação | [daf1f0e](../../commit/daf1f0e) | [3b3c833](../../commit/3b3c833) | [Red](evidencias/03-multiplicacao-red.txt) / [Green](evidencias/03-multiplicacao-green.txt) |
| Divisão | [7512947](../../commit/7512947) | [6d2774b](../../commit/6d2774b) | [Red](evidencias/04-divisao-red.txt) / [Green](evidencias/04-divisao-green.txt) |
| Divisão por zero | [e941963](../../commit/e941963) | [a03b667](../../commit/a03b667) | [Red](evidencias/05-divisao-por-zero-red.txt) / [Green](evidencias/05-divisao-por-zero-green.txt) |
| Compra sem desconto | [1f552d3](../../commit/1f552d3) | [d9e030e](../../commit/d9e030e) | [Red](evidencias/06-compra-sem-desconto-red.txt) / [Green](evidencias/06-compra-sem-desconto-green.txt) |
| Desconto de 10% | [5b5a8c1](../../commit/5b5a8c1) | [af248e5](../../commit/af248e5) | [Red](evidencias/07-desconto-dez-por-cento-red.txt) / [Green](evidencias/07-desconto-dez-por-cento-green.txt) |
| Desconto de 20% | [2af7b73](../../commit/2af7b73) | [e7dd08d](../../commit/e7dd08d) | [Red](evidencias/08-desconto-vinte-por-cento-red.txt) / [Green](evidencias/08-desconto-vinte-por-cento-green.txt) |
| Arredondamento | [7cefe30](../../commit/7cefe30) | [9541855](../../commit/9541855) | [Red](evidencias/09-arredondamento-red.txt) / [Green](evidencias/09-arredondamento-green.txt) |
| Frete de R$ 20 | [d782cbe](../../commit/d782cbe) | [fe3b4dd](../../commit/fe3b4dd) | [Red](evidencias/11-frete-integral-red.txt) / [Green](evidencias/11-frete-integral-green.txt) |
| Frete de R$ 10 | [d925010](../../commit/d925010) | [a279af3](../../commit/a279af3) | [Red](evidencias/12-frete-reduzido-red.txt) / [Green](evidencias/12-frete-reduzido-green.txt) |
| Frete gratuito | [e2e6879](../../commit/e2e6879) | [e28656a](../../commit/e28656a) | [Red](evidencias/13-frete-gratuito-red.txt) / [Green](evidencias/13-frete-gratuito-green.txt) |

Refatorações com a suíte passando:

- [Descontos: d1a7b0b](../../commit/d1a7b0b) — [registro](evidencias/10-refatoracao-descontos-refactor.txt).
- [Frete: 71d9094](../../commit/71d9094) — [registro](evidencias/14-refatoracao-frete-refactor.txt).

Para consultar a sequência pelo terminal:

```bash
git log --reverse --oneline
```

O registrador pode ser usado em novos ciclos:

```bash
node scripts/registrar-tdd.mjs red 15-novo-comportamento
# Implementar o comportamento antes de executar o próximo comando.
node scripts/registrar-tdd.mjs green 15-novo-comportamento
```

O script só aceita falha com código 1 na fase Red e sucesso com código 0 nas demais fases. Ele registra o resultado, mas não cria commits automaticamente.

## Observações sobre a implementação

Na divisão, JavaScript retorna `Infinity` ao dividir por zero; por isso foi necessário tratar esse caso explicitamente. Nos descontos, aplicar apenas `valor * 0.9` deixava resultados como `111.105`. O teste de arredondamento revelou esse problema antes da correção.

Ao concluir, a suíte tem **23 testes passando em três arquivos**, além da verificação de tipos com `npm run typecheck`.

## Entrega

Repositório público: [atividade-pratica-tdd-github](https://github.com/KaueKendric/atividade-pratica-tdd-github).
Esse é o link para enviar ao professor; o acesso ao código e ao histórico não exige convite.
