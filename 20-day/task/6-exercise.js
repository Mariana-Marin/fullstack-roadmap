// 81. Add Two Digits in a Two-Digit Number
//
// Write a JavaScript program to add two digits to a given positive integer of length two.

function sumTwoDigits(num) {
  const str = num.toString();
  return Number(str[0]) + Number(str[1]);
}

console.log(sumTwoDigits(25));
