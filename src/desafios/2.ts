export function questao2(): void {
  // número escolhido para verificar se pertence à sequência de Fibonacci
  const numero: number = 30;

  let a = 0;
  let b = 1;

  while (b < numero) {
    const temp = b;
    b = a + b;
    a = temp;
  }

  if (b === numero || numero === 0) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
  }
}

export default questao2;
