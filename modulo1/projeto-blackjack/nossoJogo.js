/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert("Olá, seja bem vindo ao jogo Blackjack!");
console.log("Olá, seja bem vindo ao jogo Blackjack!");

function iniciandoRodada() {
  if (confirm("Quer iniciar uma rodada?")) {
    alert("Oba! vamos la.");
    console.log("Oba! vamos la.");
    // Usuário
    let cartaDoUsuario = comprarCarta();
    let cartaSecundariaDoUsuario = comprarCarta();

    // IA (Computador)
    let cartaDoComputador = comprarCarta();
    let cartaSecundariaDoComputador = comprarCarta();

    // Pontuação (Usuário) - (Computador)
    let pontuacaoDoUsuario =
      cartaDoUsuario.valor + cartaSecundariaDoUsuario.valor;
    let pontuacaoDoComputador =
      cartaDoComputador.valor + cartaSecundariaDoComputador.valor;
    console.log(
      `Usuário — cartas: ${cartaDoUsuario.texto} ${
        cartaSecundariaDoUsuario.texto
      } — Pontuação ${cartaDoUsuario.valor + cartaSecundariaDoUsuario.valor}`
    );
    console.log(
      `Computador — cartas: ${cartaDoComputador.texto} ${
        cartaSecundariaDoComputador.texto
      } — Pontuação ${
        cartaDoComputador.valor + cartaSecundariaDoComputador.valor
      }`
    );

    if (pontuacaoDoUsuario > pontuacaoDoComputador) {
      console.log("O usuário ganhou!");
    } else if (pontuacaoDoComputador > pontuacaoDoUsuario) {
      console.log("O computador ganhou!");
    } else if (pontuacaoDoComputador === pontuacaoDoUsuario) {
      console.log("Empate!");
    }
  } else {
    alert("Que pena :( então fica para a próxima.");
    console.log("Que pena :( então fica para a próxima.");
  }
}
iniciandoRodada();
