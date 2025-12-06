// 96. Sum of Absolute Differences of Consecutive Numbers
//
// Write a JavaScript program to compute the sum of the absolute differences of consecutive
// numbers in a given array of integers.

function sumOfAbsoluteDifferences(array) {
  let sum = 0;
  for (let index = 0; index < array.length - 1; index++) {
    sum += Math.abs(array[index] - array[index + 1]);
  }
  return sum;
}
console.log(sumOfAbsoluteDifferences([1, 2, 3, 2, 4, 2]));
console.log(sumOfAbsoluteDifferences([5, 3, 9, 1, 3, 3]));
