// 118. Check if Number is in Range
// 
// Write a JavaScript program to check whether a given number is in a given range

function isNumberInRange(number, rangeStart, rangeEnd) {
  return number >= rangeStart && number <= rangeEnd;
}   
console.log(isNumberInRange(5, 1, 10));
console.log(isNumberInRange(0, 1, 10));
console.log(isNumberInRange(15, 1, 10));