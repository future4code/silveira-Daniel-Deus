const dadosObjeto = require("./package.json");
console.log(
  `Olá, ${dadosObjeto.exercicio_1.nome} você tem ${dadosObjeto.exercicio_1.idade} anos.`
);
console.log(
  `Olá, ${dadosObjeto.exercicio_1.nome}! Você tem: ${
    dadosObjeto.exercicio_1.idade
  } anos. Em sete anos você terá: ${dadosObjeto.exercicio_1.idade + 7}`
);
