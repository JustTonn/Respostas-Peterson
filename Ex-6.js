const lervalor = require("readline-sync");

let b = parseFloat(lervalor.question("Base: "));
let h = parseFloat(lervalor.question("Altura: "));

let area = b * h;
let perimetro = 2 * (b + h);

console.log(`Área = ${area}`);
console.log(`Perímetro = ${perimetro}`);
