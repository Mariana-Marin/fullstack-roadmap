// 36. Check if Last Digit of Three Integers is Same

// Write a JavaScript program that checks whether the last digit of three positive
// integers is the same.

function checkLastDigitOfNumber(a, b, c) {

  return a.toString().slice(-1) === b.toString().slice(-1) && b.toString().slice(-1) === c.toString().slice(-1);

}

console.log(checkLastDigitOfNumber(52, 82, 92));
console.log(checkLastDigitOfNumber(5772, 8882, 9882));
console.log(checkLastDigitOfNumber(50, 82, 92));
