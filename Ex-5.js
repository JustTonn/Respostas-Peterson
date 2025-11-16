const lervalor = require("readline-sync");

const n = parseInt(lervalor.question("Digite um numero: "));

for (let i = 0; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
