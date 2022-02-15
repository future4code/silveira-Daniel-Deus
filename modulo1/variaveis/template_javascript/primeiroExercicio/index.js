let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)


/**
 * Bom na let a, b estamos atribuindo o valor 10
 * no console.log(b) estamos exibindo o valor atribuido a variavel b que seria 10
 * em b = 5 estamos atribuindo um novo valor para a variavel b, que será 5
 * no console.log(a, b) estamos exibindo o valor da variavel a, b que seria: 10 5
 */

 let a = 10
 let b = 20
 c = a
 b = c
 a = b
 
 console.log(a, b, c)

 /**
  * Bom na let a estamos atribuindo o valor de 10 e na let b estamos atribuindo o valor de 20
  * c = a diz que c tem o valor de a ( 10 )
  * b = c diz que b tem o valor de c ( 10 )
  * a = b diz que a tem o valor de b ( 10 )
  * 
  * console.log(a, b, c) mostrara 10 10 10
  */

  let horasTrabalhadasDia = prompt("Quantas horas você trabalha por dia?")
  let valorRecebidoDia = prompt("Quanto você recebe por dia?")
  alert(`Voce recebe ${valorRecebidoDia/horasTrabalhadasDia} por hora`)

  /**
   * Criamos uma variavel que recebe o valor de horas trabalhadas e uma variavel que recebe quanto recebemos por dia
   * ao dividirmos obtemos o resultado de quanto ganhamos por hora
   */