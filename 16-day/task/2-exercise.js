// 17. Difference Between Number and 19 (Triple if >19)

// Write a JavaScript program to compute the absolute difference between a 
// specified number and 19. Returns triple the absolute difference if the 
// specified number is greater than 19.  

function getAbsoluteDifference(number) {
  if (number > 19) {
    number = Math.abs((number - 19) * 3);
  } else {
    number = 19 - number;
  }

  return number;
}

console.log(getAbsoluteDifference(25));
console.log(getAbsoluteDifference(19));
console.log(getAbsoluteDifference(7));