// 32. Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.

function findClosestValueTo100(a, b) {

  if ( Math.abs(100 - a) > Math.abs(100 - b) ) {
    return b;
  } else {
    return a;
  }
}

console.log(findClosestValueTo100(20, 100));

console.log(findClosestValueTo100(200, 100));
