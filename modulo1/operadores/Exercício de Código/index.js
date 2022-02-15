//Ex1
const idade = +prompt("Qual a sua idade?");
const idadeBestFriend = +prompt("Qual a idade do seu melhor (a) amigo (a)?");
const respostaIdade = idade > idadeBestFriend;

console.log("Sua idade é maior do que a do seu melhor amigo?", respostaIdade);

//Ex2
const numeroPar = +prompt("Insira um número par:");
console.log(numeroPar % 2);

/*
    Notei que todos os números pares resultam num resto de zero. 
    Bom números pares não sobram restos então logo seria zero.
    agora inserindo outro número ou seja, com impar dependendo do número, sobra resto.
*/

//Ex3
const suaIdade = +prompt("Qual sua idade?")
console.log('Sua idade em meses:', suaIdade * 12)
console.log('Sua idade em dias:', suaIdade * 365)
console.log('Sua idade em horas:', suaIdade * 365 * 24)

//Ex4

const num1 = +prompt('Informe um número:');
const num2 = +prompt('Informe outro número:');

console.log('O primeiro número é maior que o segundo?',  num1 > num2);
console.log('O primeiro numero é igual ao segundo?',  num1 === num2);
console.log('O primeiro numero é divisível pelo segundo?', num1 % num2);
console.log('O primeiro numero é divisível pelo segundo?',  num1 % num2) ;