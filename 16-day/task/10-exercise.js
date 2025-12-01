// 25. Check if Number is Multiple of 3 or 7

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

function isMultipleOf3Or7(number) {
  return number % 3 === 0 || number % 7 === 0;
}

console.log(isMultipleOf3Or7(10));
console.log(isMultipleOf3Or7(14));
console.log(isMultipleOf3Or7(6));
