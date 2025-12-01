// 43. Check Rightmost Digits of Three Numbers

// Write a JavaScript program to check from three given
// numbers (non negative integers) that two or all of them have the same rightmost digit.

function checkLastDigitOfNumber(a, b, c) {
  return (
    a.toString().slice(-1) === b.toString().slice(-1) ||
    b.toString().slice(-1) === c.toString().slice(-1) ||
    a.toString().slice(-1) === c.toString().slice(-1)
  );
}

console.log(checkLastDigitOfNumber(52, 82, 92));
console.log(checkLastDigitOfNumber(20, 22, 45));
console.log(checkLastDigitOfNumber(50, 82, 92));
console.log(checkLastDigitOfNumber(52, 80, 92));
