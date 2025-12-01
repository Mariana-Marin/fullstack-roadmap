/*- El juego se juega entre 2 jugadores
- El jugador 1 comienza sacando
- Se cambia de saque cada 2 puntos
- Gana el primero que llegue a 11 puntos
Objetivo:
Crear una función que reciba:
- Nombre del jugador 1
- Nombre del jugador 2
- Puntos actuales del jugador 1
- Puntos actuales del jugador 2
La función debe retornar:
- Quién debe sacar en este momento
- Si el juego ha terminado y quién ganó*/

//Si el residuo es 0 o 1: Saca P1.
//Si el residuo es 2 o 3: Saca P2.

function pingPongGame(player1, player2, score1, score2) {
  if (score1 === 11 || score2 === 11) {
    if (score1 === 11) {
      return `${player1} is the winner!`;
    } else {
      return `${player2} is the winner!`;
    }
  }

  if ((score1 + score2) % 4 < 2) {
    return `It's ${player1}'s turn to serve`;
  } else {
    return `It's ${player2}'s turn to serve`;
  }
}

console.log(pingPongGame("Mariana", "Dary", 0, 0));
console.log(pingPongGame("Mariana", "Dary", 0, 1));
console.log(pingPongGame("Mariana", "Dary", 1, 1));
console.log(pingPongGame("Mariana", "Dary", 5, 4));
