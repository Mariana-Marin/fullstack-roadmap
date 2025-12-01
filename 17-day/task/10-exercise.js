// 40. Check if Integer is 8 or Difference/Sum Equals 8

// Write a JavaScript program to check from two given integers whether one of them
// is 8 or their sum or difference is 8.

function check8(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || a - b === 8) {
    return true;
  } else {
    return false;
  }
}

console.log(check8(4, 4));
console.log(check8(8, 4));
console.log(check8(8, 8));
console.log(check8(2, 2));

