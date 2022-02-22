const usuarioIdade = +prompt("Qual é a sua idade?");
if (usuarioIdade >= 18) {
  console.log("Parabéns, você pode dirigir!");
} else {
  console.log("Infelizmente você não pode dirigir");
}

const usuarioTurno = prompt(
  "Em qual turno você está estudando? Matutino (M) - Vespertino (V) - Noturno (N)"
).toUpperCase();
if (usuarioTurno === "M") {
  console.log("Olá, bom dia!");
} else if (usuarioTurno === "V") {
  console.log("Olá, boa tarde!");
} else if (usuarioTurno === "N") {
  console.log("Olá, boa noite!");
}

const usuarioTurnoSwitch = prompt(
  "Em qual turno você está estudando? Matutino (M) - Vespertino (V) - Noturno (N)"
).toUpperCase();

switch (usuarioTurnoSwitch) {
  case "M":
    console.log("Olá, bom dia!");
    break;
  case "V":
    console.log("Olá, boa tarde!");
    break;
  case "N":
    console.log("Olá, boa noite!");
    break;
  default:
    console.log(
      "ERROR, Por favor informe: Em qual turno você está estudando? Matutino (M) - Vespertino (V) - Noturno (N)"
    );
    break;
}
