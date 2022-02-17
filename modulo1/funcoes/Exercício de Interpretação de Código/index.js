// Ex1

function minhaFuncao(variavel) {
  return variavel * 5;
}

minhaFuncao(2);
minhaFuncao(10);

/*  PERGUNTA
a) O que vai ser impresso no console?

    RESPOSTA
=> O que aparecerá no primeiro console.log será 10 pois multiplicamos 5x o valor dentro de minhaFuncao
=> O que aparecerá no segundo console.log será 50 pois multiplicamos 5x o valor dentro de minhaFuncao

    PERGUNTA
b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) 
e minhaFuncao(10)? O que apareceria no console?

=> Iria multiplicação do mesmo jeito, porem não apareceria no console...
=> A multiplicação aconteceria pois, já passamos as instruções que é: return variavel * 5 e minhaFuncao(2) e minhaFuncao(10)...
=> Independente do console.log o resultado da primeira seria 10, e o da segunda seria 50. O console.log é só para imprimir o resultado 
no console do navegador e etc...

*/

// ========================================================================================================================== //

// Ex2

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes("cenoura");
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);

/* PERGUNTA

a. Explique o que essa função faz e qual é sua utilidade

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`

*/

/*

1) a variavel textoDoUsuario armazena o texto
2) a const outraFuncao = function cria uma função com o parametro de texto
3) dentro da outraFuncao está um return que irá retornar o texto em minusculo porem o includes cenoura meio que "gera uma palavra mágica"
necessitando que as respostas contenham Cenoura CENOURA ou cenouras incluso, senão retornará false...

*/
