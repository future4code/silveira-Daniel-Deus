const bool1 = true // atribuindo true
const bool2 = false // atruibuindo false
const bool3 = !bool2 // redeclarando o valor que antes era false para true

let resultado = bool1 && bool2
console.log("a. ", resultado) // Dará false pois a bool2 foi redeclarada utilizando ! ou seja, atribuindo o valor "inverso" false...

resultado = bool1 && bool2 && bool3  //Dara false 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)  //iria dar false porem foi inserido o ! transforamndo o false em true
console.log("c. ", resultado)

console.log("d. ", typeof resultado) //resultado booleano


/*
let primeiroNumero = prompt("Digite um numero!") falta incluir o + no prompt para informar que será do tipo number
let segundoNumero = prompt("Digite outro numero!") falta incluir o + no prompt para informar que será do tipo number

const soma = primeiroNumero + segundoNumero

console.log(soma) 
*/

let primeiroNumero = +prompt("Digite um numero!") // Funcionando após informar que será do tipo Number adicionando o ( + ) no ( prompt )
let segundoNumero = +prompt("Digite outro numero!") // Funcionando após informar que será do tipo Number adicionando o ( + ) no ( prompt )

const soma = primeiroNumero + segundoNumero

console.log(soma)