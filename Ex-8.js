const lervalor = require("readline-sync");

let usuario = lervalor.question("Usuario: ");
let senha = lervalor.question("Senha: ");

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha incorretos.");
}
