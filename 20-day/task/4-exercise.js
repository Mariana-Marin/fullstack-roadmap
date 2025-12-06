// 79. Check if Array Contains 30 and 40 Twice
//
// Write a JavaScript program to test whether a
// given array of integers contains 30 and 40 twice.
// The array length should be 0, 1, or 2.

function check30Or40(array) {
  return array.includes(40) || array.includes(30);
}

console.log(check30Or40([30, 30]));
console.log(check30Or40([40, 30]));
console.log(check30Or40([30, 40]));
console.log(check30Or40([40, 40]));
console.log(check30Or40([0, 0]));
