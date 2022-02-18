//Ex1
function dadosUsuario() {
  console.log("Eu sou Daniel, tenho 22 anos, moro em Brasília e sou estudante");
}
dadosUsuario();

function dadosUsuarioCompleto(nome, idade, cidade, profissao) {
  nome = "Daniel";
  idade = "21";
  cidade = "Brasília";
  profissao = "Desenvolvedor";
  console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
  );
}
dadosUsuarioCompleto();
//

//Ex2
function soma(num1, num2) {
  num1 = 5;
  num2 = 10;
  return num1 * num2;
}
soma();
console.log(`O resultado da soma é: ${soma()}`);
//

//Ex3
function numBoolean(bool1, bool2) {
  bool1 = 2;
  bool2 = 2;
  return bool1 >= bool2;
}
numBoolean();
console.log(`O resultado é: ${numBoolean()}`);
//

//Ex4
function parBool(par1) {
  par1 = 2;
  return par1 % 2 === 0;
}
parBool();
console.log(`O resultado é: ${parBool()}`);
//

//Ex5
function minhaMensagem(mensagem) {
  mensagem = "Olá, mundo! ";

  return mensagem.toUpperCase() + mensagem.length;
}
minhaMensagem();
console.log(`A mensagem ficou assim: ${minhaMensagem()}`);
//

//Ex6
function somando(a, b) {
  const novaSoma = a + b;
  return novaSoma;
}

function subtraindo(a, b) {
  const novaSubracao = a - b;
  return novaSubracao;
}

function multiplicando(a, b) {
  const novaMultiplicacao = a * b;
  return novaMultiplicacao;
}

function dividindo(a, b) {
  const novaDivisao = a / b;
  return novaDivisao;
}

const primeiroNumeroUsuario = Number(prompt("Digite um número:"));
const segundooNumeroUsuario = Number(prompt("Digite outro número:"));

const realizandoSoma = somando(primeiroNumeroUsuario, segundooNumeroUsuario);
console.log(`O resultado da soma foi: ${realizandoSoma}`);

const realizandoSubtracao = subtraindo(
  primeiroNumeroUsuario,
  segundooNumeroUsuario
);
console.log(`O resultado da subtração foi: ${realizandoSubtracao}`);

const realizandoMultiplicacao = multiplicando(
  primeiroNumeroUsuario,
  segundooNumeroUsuario
);
console.log(`O resultado da multiplicação foi: ${realizandoMultiplicacao}`);

const realizandoDivisao = dividindo(
  primeiroNumeroUsuario,
  segundooNumeroUsuario
);
console.log(`O resultado da divisão foi: ${realizandoDivisao}`);
//
