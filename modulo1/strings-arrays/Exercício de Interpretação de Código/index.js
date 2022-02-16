let array
console.log('a. ', array) // será undefined pois não tem absolutamente nada definido

array = null
console.log('b. ', array) //null meio que é um valor vazio, nulo... então não dará nada, ah não ser null ou algo vazio

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //dara o tamanho do array acima pois usamos o length para descobrir quantos carcater ( ou o tamanho )

let i = 0
console.log('d. ', array[i]) //aqui estamos solicitando o indice [i] que retornara 3 devido 0 --> 1 (3)

array[i+1] = 19 // i+1 = 19 retornará a string + 19 após o 3 devido i representar 3
console.log('e. ', array)

const valor = array[i+6] //(retornará o nono valor, 9)
console.log('f. ', valor)



const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //estamos deixando tudo em maiusculo, e trocando A letra a pela letra I e verificando o tamanho (quantos carcater) com o length
// o resultado será SUBI NUM ÔNIBUS EM MIRROCOS => 27 de tamanho