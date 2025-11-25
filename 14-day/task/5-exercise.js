/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.
 */

function swapFirstAndLastChar(str) {
  if (str.length < 1) {
    return "String length must be broader than or equal to 1";
  }

  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  const middleStr = str.slice(1, str.length - 1);
  return lastChar + middleStr + firstChar;
}

console.log(swapFirstAndLastChar("Mariana"));
console.log(swapFirstAndLastChar("A"));
console.log(swapFirstAndLastChar(""));
