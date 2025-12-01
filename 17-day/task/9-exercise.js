// 39. Sum Two Integers and Return Based on Range

// Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.

function sumNumbersAndReturn(a, b) {
  if (a + b > 50 && a + b < 80) {
    return 65;
  } else {
    return 80;
  }
}

console.log(sumNumbersAndReturn(50, 10));
console.log(sumNumbersAndReturn(80, 10));