let nome;
let idade;
console.log(typeof nome, typeof idade); //undefined undefined (pois não atribuimos nenhum valor/tipo a variavel)

nome = prompt('Qual o seu nome?');
idade = prompt('Qual sua idade?');
console.log(typeof nome, typeof idade); //resultou em duas string

console.log('Olá', nome, 'você tem', idade, 'anos.');
