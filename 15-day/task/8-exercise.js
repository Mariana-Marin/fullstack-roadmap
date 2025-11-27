/*8. Random Integer Guess Game

Write a JavaScript program where the program takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. The program displays a 
message "Good Work" if the input matches the guess number otherwise "Not matched".  */

/*Math.random() → genera número entre 0 y 0.999...
Math.trunc(0.847362) → elimina decimales */

let secretNumber = Math.trunc(Math.random() * 10) + 1;
console.log(secretNumber);

/* Descomentar para usar con prompt:
const userGuess = Number(prompt("Guess a number between 1 and 10: "));
*/
let userNumber = 4;

userNumber === secretNumber
  ? console.log("Good Work")
  : console.log("Not matched");
