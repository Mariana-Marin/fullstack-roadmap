// 72. Check if First and Last Elements Are Same
//
// Write a JavaScript program to check whether the
// first and last elements are the same in a given
// array of integers of length

function checkFirstAndLastElement(array) {
  return array[0] === array[array.length - 1];
  //return array[0] === array.at(-1);
}

console.log(checkFirstAndLastElement([1, 2, 1]));
console.log(checkFirstAndLastElement([1, 2, 3]));
