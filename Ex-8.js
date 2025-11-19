const lervalor = require("readline-sync");

let n = parseInt(lervalor.question("Digite um numero: "));
let soma = 0;

for (let i = 1; i <= n; i++) {
  soma += i;
}

console.log(`A soma de 1 até ${n} é ${soma}`);
