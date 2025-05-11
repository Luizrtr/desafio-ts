import desafio1 from "./desafios/1";
import desafio2 from "./desafios/2";
import desafio3 from "./desafios/3";
import desafio4 from "./desafios/4";
import desafio5 from "./desafios/5";

const desafios: any = {
  "1": desafio1,
  "2": desafio2,
  "3": desafio3,
  "4": desafio4,
  "5": desafio5,
};

const args = process.argv.slice(2);
const numero = args[0];

const executar = desafios[numero];

if (executar) {
  executar();
} else {
  console.log("Informe uma questão válida: pnpm dev 1 (até 5)");
}
