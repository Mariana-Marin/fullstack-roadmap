/*input: [2, 3, [2], 4]
output: [4, 6, 8]

input: [[3], 1, 5, 4]
output: [3, 15, 12]

input: [5, 2, 1, 4, 3, [2, 3], 2]
output: [30, 12, 6, 24, 18, 12]

input: [1, 2, 3]
output: [1, 2, 3]

input: [1, 2, [2], 5, 6, [2]]
output: [4, 8, 20, 24] */

// Multiply by Nested Elements
//
// Write a program that takes an array containing integers and potentially nested arrays of integers.
// The program should calculate a 'global multiplier' by multiplying all integers found inside any nested arrays.
// Then, it should return a new array containing only the top-level integers from the original array, each multiplied by this global multiplier.
// If there are no nested arrays, the multiplier is 1.

function multiplyFatherArray(array) {
  let fatherArray = [];
  let childArray = [];
  let globalMulplier = 1;
  let finalArray = [];

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "number") {
      fatherArray.push(array[index]);
    } else {
      childArray.push(array[index]);
    }
  }

  let nestedArray = childArray.flat();

  for (let index = 0; index < nestedArray.length; index++) {
    globalMulplier = globalMulplier * nestedArray[index];
    //globalMulplier *= childArray[index];
  }

  for (let index = 0; index < fatherArray.length; index++) {
    finalArray.push(fatherArray[index] * globalMulplier);
  }

  return finalArray;
}

console.log(multiplyFatherArray([5, 2, 1, 4, 3, [2, 3], 2]));
