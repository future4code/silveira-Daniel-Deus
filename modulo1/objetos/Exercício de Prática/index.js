
const apelidosUsuario = {
  nome: "Daniel",
  apelidos: ["Dan", " Dani", " Oliver."],
};

function imprimeApelidos(objeto) {
  return `Eu sou o: ${objeto.nome} mas pode me chamar de: ${objeto.apelidos[0]}`;
}
console.log(apelidosUsuario);

const novosApelidosUsuario = {
  ...apelidosUsuario,
  apelidos: ["Oliv", "Oliveira", "Danoliv"],
};
console.log(novosApelidosUsuario);

const aluno = {
    nome: "Daniel",
    idade: "22",
    profissao: "Desenvolvedor"
}

const retornaArray = (objeto) => {
    const array = [`O nome é: ${objeto.nome}, o tamanho é: ${objeto.nome.length}, a idade é: ${objeto.idade} sua profissão é: ${objeto.profissao}`]
    return array
}
console.log(retornaArray(aluno));



const carrinho = [];
const fruta1 ={
    nome: "Maça", disponibilidade: true
}
const fruta2 ={
    ...fruta1,
    nome: "Manga"
}
const fruta3 ={
    ...fruta1,
    nome: "Banana"
}
function adicionaFruta (objeto) {

    carrinho.push(objeto)
}

adicionaFruta(fruta1)
adicionaFruta(fruta2)
adicionaFruta(fruta3)
console.log(carrinho);