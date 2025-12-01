// 31. Find Largest of Three Integers

// Write a JavaScript program to find the largest of three given integers.

function LargestOfThreeIntegers(a, b, c) {
  // return Math.max(a, b, c);
  
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log(LargestOfThreeIntegers(1, 2, 3));
