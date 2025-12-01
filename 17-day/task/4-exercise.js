// 34. Find Larger Number in Range 40?60

// Write a JavaScript program to find the largest number from the two given positive integers.
// The two numbers are in the range 40..60 inclusive.

function LargestOfTwoIntegers(a, b) {
  // return Math.max(a, b);

  if ((a < 40 || a > 60) || (b < 40 || b > 60)) {
    return "Invalid range";
  } else {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
}

console.log(LargestOfTwoIntegers(1, 2));
console.log(LargestOfTwoIntegers(46, 60));
