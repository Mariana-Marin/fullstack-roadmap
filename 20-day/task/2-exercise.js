// 77. Check if Array Contains 1 or 3
//
// Write a JavaScript program to test whether an
// array of integers of length 2 contains 1 or 3.

function check1Or3(array) {
  return array.includes(1) || array.includes(3);
}

console.log(check1Or3([1, 5]));
console.log(check1Or3([1, 3]));
console.log(check1Or3([5, 3]));
console.log(check1Or3([0, 0]));

