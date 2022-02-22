const filme = {
  nome: "Auto da Compadecida",
  ano: 2000,
  elenco: [
    "Matheus Nachtergaele",
    "Selton Mello",
    "Denise Fraga",
    "Virginia Cavendish",
  ],
  transmissoesHoje: [
    { canal: "Telecine", horario: "21h" },
    { canal: "Canal Brasil", horario: "19h" },
    { canal: "Globo", horario: "14h" },
  ],
};

console.log(filme.elenco[0]);
console.log(filme.elenco[filme.elenco.length - 1]);
console.log(filme.transmissoesHoje[2]);
/* Será impresso Matheus Nachtergaele e Virginia Cavendish
E também o objeto { canal: 'Globo', horário: '14'}
*/

const cachorro = {
  nome: "Juca",
  idade: 3,
  raca: "SRD",
};

const gato = { ...cachorro, nome: "Juba" };
const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") };
console.log(cachorro);
console.log(gato);
console.log(tartaruga);
/* Será impreso o objeto igual 3x porem o terceira terá terá as letras a alterada por o.
A sintaxe ... antes do nome do objeto, informa que iremos utilizar o objeto já criado, chamando ele dessa forma ...nomeDoObjeto*/

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
/*Será impreso false e undefined pois * o parametro propriedade não foi definido/alocado em */