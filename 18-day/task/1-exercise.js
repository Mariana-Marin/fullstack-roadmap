// 46. Check if Only One Integer is Multiple of 7 or 11
//
// Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.

function isMultipleOf7Or11(numberOne, numberTwo) {
  return (numberOne % 7 === 0 || numberOne % 11 === 0) || (numberTwo % 7 === 0 || numberTwo % 11 === 0) ;
}

console.log(isMultipleOf7Or11(11, 14));
console.log(isMultipleOf7Or11(14, 11));
console.log(isMultipleOf7Or11(6, 2));
