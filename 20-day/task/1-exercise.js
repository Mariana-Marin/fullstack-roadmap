// 76. Create Array with First/Last Elements from Array
//
// Write a JavaScript program to create an array by
// taking the first and last elements from a given array
// of integers.The length must be larger than or equal to 1.

function createNewArr(array) {
  return [array[0], array.at(-1)];
}

console.log(createNewArr([20, 20, 30]));
