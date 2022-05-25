//01
function checaTriangulo(a: number, b: number, c: number) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}
console.log(checaTriangulo(4, 5, 8));

// 02
function imprimeTresCoresFavoritas(
  cor1: string,
  cor2: string,
  cor3: string
): void {
  console.log([cor1, cor2, cor3]);
}

imprimeTresCoresFavoritas("preto", "roxo", "branco");

//03
function checaAnoBissexto(ano: number): boolean {
  const cond1: boolean = ano % 400 === 0;
  const cond2: boolean = ano % 4 === 0 && ano % 100 !== 0;
  return cond1 || cond2;
}

console.log(checaAnoBissexto(2022));

// //04
// function comparaDoisNumeros(num1, num2) {
//     let maiorNumero;
//     let menorNumero;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

  
// //05
// function checaRenovacaoRG() {
//     const anoAtual = Number(prompt("Digite o ano atual"))
//     const anoNascimento = Number(prompt("Digite o ano de nascimento"))
//     const anoEmissao = Number(prompt("Digite o ano de emissão do documento"))
 
//     const idade = anoAtual - anoNascimento
//     const tempoCarteira = anoAtual - anoEmissao
 
//     const cond1 = idade <= 20 && tempoCarteira >= 5
//     const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
//     const cond3 = idade > 50 && tempoCarteira >= 15
 
//     return (cond1 || cond2 || cond3)
//  }

