const nomeUsuario = prompt('Qual o seu nome?');
const emailUsuario = prompt('Qual o seu e-mail?');
console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem vindo (a) ${nomeUsuario}`);

const minhasComidasFavoritas = [
    'Strogonoff',
    'Pizza',
    'Big King',
    'Camarão',
    'Sushi'
];

console.log(minhasComidasFavoritas);
console.log(`Essas são as minhas comidas preferidas: ${minhasComidasFavoritas} `);

alert('Olá, você deverá informar três tarefas que realizará hoje!')

let listaDeTarefas = [];

const tarefaNum1 = prompt('Informe a primeira (0) tarefa a ser realizada hoje: ');
const tarefaNum2 = prompt('Informe a segunda (1) tarefa a ser realizada hoje: ');
const tarefaNum3 = prompt('Informe a terceira (2) tarefa a ser realizada hoje: ');

listaDeTarefas.push(tarefaNum1, tarefaNum2, tarefaNum3);
console.log(listaDeTarefas);

const tarefaRealizada = Number(prompt('Digite o indice da tarefa que você já realizou 0, 1, 2:'));
listaDeTarefas.splice(tarefaRealizada, 1);
console.log(listaDeTarefas);

