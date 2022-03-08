// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((n1, n2) => {
    return n1 - n2;
  });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrPar = array.filter((i) => {
    return i % 2 == 0;
  });

  return arrPar;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const arrParElevado = array.filter((i) => {
    return i % 2 == 0;
  });
  const resultado = arrParElevado.map((i) => {
    return i * i;
  });
  return resultado;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let numeroMaior = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > numeroMaior) {
      numeroMaior = array[i];
    }
  }
  return numeroMaior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero = num2;
  let numeroMenor = num1;
  if (num1 - num2 > 0) {
    maiorNumero = num1;
    numeroMenor = num2;
  }
  let maiorDivisivelPorMenor = false;
  if (maiorNumero % numeroMenor === 0) {
    maiorDivisivelPorMenor = true;
  }
  let diferenca = maiorNumero - numeroMenor;
  const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  for (let i = 0; i < n; i += 1) {
    numerosPares.push(i * 2);
  }
  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoC === ladoA) {
    return "Equilátero";
  }
  if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
    return "Isósceles";
  }
  if (ladoA !== ladoB && ladoC !== ladoB && ladoC !== ladoA) {
    return "Escaleno";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
