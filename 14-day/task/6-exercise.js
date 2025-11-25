/**
 * Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
 */

function checkMultiple(number) {
  return number % 3 === 0 || number % 7 === 0;
}

console.log(checkMultiple(21));
console.log(checkMultiple(10));
console.log(checkMultiple(9));
