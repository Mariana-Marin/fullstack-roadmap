// 87. Check if Two Arrays Are Similar with One Swap
//
// Write a JavaScript program to determine if two arrays of integers of the same length are similar.
// The arrays will be similar if one array can be obtained from another array by swapping at
// most one pair of elements.

function checkSimilarArr(arr1, arr2) {
  let differences = [];

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      differences.push(index);
    }
  }

  if (differences.length === 0) {
    return true;
  }

  if (differences.length === 2) {
    const [pos1, pos2] = differences;
    return arr1[pos1] === arr2[pos2] && arr1[pos2] === arr2[pos1];
  }

  return false;
}

console.log(checkSimilarArr([1, 2, 3], [1, 3, 2]));
console.log(checkSimilarArr([1, 2, 3], [3, 2, 1]));
console.log(checkSimilarArr([10, 20, 30], [30, 10, 20]));


