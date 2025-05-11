const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

export function desafio4(): void {
  const total = Object.values(faturamento)
  .reduce((acc, valor) => acc + valor, 0);

  const percentual = (valor: number): string => {
    return ((valor / total) * 100).toFixed(2) + '%';
  };

  Object.entries(faturamento).forEach(([estado, valor]) => {
    console.log(`O percentual de faturamento de ${estado} é: ${percentual(valor)}`);
  });
}

export default desafio4;
