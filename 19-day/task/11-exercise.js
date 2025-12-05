// 71. Check if 1 is First/Last Element in Array
//
// Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers. The array length must be larger than or equal to 1.

function check1(array) {
  return array[0] === 1 || array[array.length - 1] === 1 
}

console.log(check1([9, 6, 0, 1]));
console.log(check1([1, 6, 0, 1]));
console.log(check1([1, 6, 0, 9]));
console.log(check1([9, 6, 0, 9]));
