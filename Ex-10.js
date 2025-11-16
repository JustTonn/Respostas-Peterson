const lervalor = require("readline-sync");

let segundosTotal = parseInt(lervalor.question("Digite os segundos: "));

let horas = Math.floor(segundosTotal / 3600);
let minutos = Math.floor((segundosTotal % 3600) / 60);
let segundos = segundosTotal % 60;

console.log(`${horas}h ${minutos}m ${segundos}s`);
