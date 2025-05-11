export function desafio(): void {
  const INDICE = 13;
  let SOMA = 0;

  for (let K = 1; K <= INDICE; K++) {
    SOMA = SOMA + K;
  }

  console.log(`O valor final da variável SOMA é: ${SOMA}`);
}

export default desafio;