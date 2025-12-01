// 33. Check if Two Numbers are in Specific Ranges

// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function checkRangeNumbers(a, b) {
  return (
    ((a >= 40 && a <= 60) || (a >= 70 && a <= 100)) &&
    ((b >= 40 && b <= 60) || (b >= 70 && b <= 100))
  );
}

console.log(checkRangeNumbers(45, 86));
console.log(checkRangeNumbers(10, 200));
console.log(checkRangeNumbers(48, 300));
