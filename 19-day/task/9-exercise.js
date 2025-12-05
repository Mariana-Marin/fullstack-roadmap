// 69. Sum of 3 Elements in Array (Length 3)
//
// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

function calculateSum(array) {
  let sum = 0;

  for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
  }

  return sum;
}

console.log(calculateSum([3, 5, 6]));

/* function calculateSum (array) {

    return array[0]+array[1]+array[2];

}

console.log(calculateSum([3, 5, 6]));*/


