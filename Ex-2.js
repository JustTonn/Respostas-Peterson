const lervalor = require("readline-sync");

const n1 = parseFloat(lervalor.question("Digite a primeira nota: "));
const n2 = parseFloat(lervalor.question("Digite a segunda nota: "));
const n3 = parseFloat(lervalor.question("Digite a terceira nota: "));

const media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
console.log("Média:", media);
