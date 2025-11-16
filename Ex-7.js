const lervalor = require("readline-sync");

const palavra = lervalor.question("Digite uma palavra: ").toLowerCase();
const vogais = "aeiou";
let contador = 0;

for (const letra of palavra) {
  if (vogais.includes(letra)) {
    contador++;
  }
}

console.log(`A palavra tem ${contador} vogais.`);
