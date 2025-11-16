const lervalor = require("readline-sync");

const c = parseFloat(lervalor.question("Digite a temperatura em Celsius: "));
const f = (9 / 5) * c + 32;

console.log(`A temperatura em Fahrenheit é: ${f}°F`);
