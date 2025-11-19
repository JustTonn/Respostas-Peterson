const lervalor = require("readline-sync");

let usuario = lervalor.question("Usuario: ");
let senha = lervalor.question("Senha: ");

if (usuario === "admin" && senha === "1234") {
  return console.log("Login realizado com sucesso!");
}

return console.log("Usuário ou senha incorretos.");
