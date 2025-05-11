import { faturamento } from './faturamento';

export function desafio3(): void {
  const diasComFaturamento = faturamento.filter(item => item.valor !== 0.0);
  const menorFaturamento = Math.min(...diasComFaturamento.map(item => item.valor));
  const maiorFaturamento = Math.max(...diasComFaturamento.map(item => item.valor));
  const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
  const mediaFaturamento = somaFaturamento / diasComFaturamento.length;
  const diasAcimaMedia = diasComFaturamento.filter(item => item.valor > mediaFaturamento).length;
  const formatar = (valor: number): string => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  console.log(`Menor valor de faturamento: ${formatar(menorFaturamento)}`);
  console.log(`Maior valor de faturamento: ${formatar(maiorFaturamento)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
}

export default desafio3;