// 85. Split Array into Two Sums Alternating Elements
//
// Write a JavaScript program to divide a given array of positive integers into two parts.
// First element belongs to the first part,
// second element belongs to the second part,
// and third element belongs to the first part and so on.
// Now compute the sum of two parts and store it in an array of size two.

function sumArr(array) {
  let arrayTotal = [0, 0];

  for (let index = 0; index < array.length; index++) {
    if (index % 2 === 0) {
      arrayTotal[0] += array[index]; 
    } else {
      arrayTotal[1] += array[index]; 
    }
  }

  return arrayTotal;
}

console.log(sumArr([1, 3, 6, 2, 5, 10]));
