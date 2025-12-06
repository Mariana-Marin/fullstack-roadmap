// 92. Find Max Difference Between Adjacent Elements
//
// Write a JavaScript program to find the maximum difference between any two adjacent
// elements of a given array of integers.

function maxDifference(array) {
  let maxDiff = 0;
  for (let i = 0; i < array.length - 1; i++) {
    let currentDiff = Math.abs(array[i] - array[i + 1]);
    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }
  }
  return maxDiff;
}
console.log(maxDifference([1, 2, 3, 8, 5]));
console.log(maxDifference([10, 4, 1, 7, 2]));
console.log(maxDifference([5, 3, 9, 1, 6]));
