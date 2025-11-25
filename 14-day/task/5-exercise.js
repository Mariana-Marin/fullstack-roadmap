/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.
 */

function swapFirstAndLastLetter (str) {
  if (str.length < 1) {
    return "String length must be broader than or equal to 1";
  }

  const firstLetter = str[0];
  const lastLetter = str[str.length - 1];
  const middleStr = str.slice(1, str.length - 1);
  return lastLetter + middleStr + firstLetter;
}

console.log(swapFirstAndLastLetter("Mariana"));
console.log(swapFirstAndLastLetter("A"));
console.log(swapFirstAndLastLetter(""));