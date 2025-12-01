// 32. Find Closest Value to 100 from Two Numbers

// Write a JavaScript program to find the closest value to 100 from two numerical values.

function findClosestValueTo100(numOne, numTwo) {
  const differenceOne = Math.abs(100 - numOne);
  const differenceTwo = Math.abs(100 - numTwo);

  if (differenceOne > differenceTwo) {
    return numTwo;
  } else {
    return numOne;
  }
}

console.log(findClosestValueTo100(20, 100));

console.log(findClosestValueTo100(200, 100));
