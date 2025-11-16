const lervalor = require("readline-sync");

const n = parseInt(lervalor.question("Digite um numero: "));
let fat = 1;

for (let i = n; i >= 1; i--) {
  fat *= i;
}

console.log(`Fatorial de ${n} é ${fat}`);
