// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" },
// ];

// const retornarNomePets = pets.map((item) => {
//   return item.nome;
// });
// console.log(retornarNomePets);

// const dogSalsicha = pets.filter((item) => {
//   return item.raca === "Salsicha";
// });
// console.log(dogSalsicha);

// const descontoPoodles = pets.filter((item) => {
//   if (item.raca === "Poodle") {
//     return true;
//   } else {
//     return false;
//   }
// });

// const msgPoodles = descontoPoodles.map((item) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`;
// });

// console.log(msgPoodles);


// //=============================================================================================================//


// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
// ];

// const retornarProdutos = produtos.map((item) => {
//   return item.nome;
// });
// console.log(retornarProdutos);

// const aplicandoDescontoProduto = produtos.map((item) => {
//   const desconto = { nome: item.nome, preco: item.preco - 0.06 * item.preco };
//   return desconto;
// });
// console.log(aplicandoDescontoProduto);

// const bebidas = produtos.filter((item) => {
//   return item.categoria === "Bebidas";
// });
// console.log(bebidas);

// const produtosYpes = produtos.filter((item) => {
//   return item.nome.includes("Ypê");
// });
// console.log(produtosYpes);

// const compreProdutosYpes = produtos
//   .filter((item) => {
//     const somenteYpes = item.nome.includes("Ypê");
//     return somenteYpes;
//   })
//   .map((item) => {
//     msgYpes = `Compre ${item.nome} por ${item.preco}`;
//     return msgYpes;
//   });
// console.log(compreProdutosYpes);
