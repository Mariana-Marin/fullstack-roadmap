// 60. Remove First and Last Characters in String
//
// Write a JavaScript program to create a new string without the first and last characters of a given string.

function removeFirstAndLastChr(str) {
  return str.slice(1, -1);
}

console.log(removeFirstAndLastChr("Mariana"));
