export function desafio5(): void {
  const str = "Vasco da Gama";
  let strInvertida = '';

  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }

  console.log(`String original: ${str}`);
  console.log(`String invertida: ${strInvertida}`);
}

export default desafio5;