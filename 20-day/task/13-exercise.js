// 88. Check Similarity of Two Integers with Divisor
//
// Write a JavaScript program that takes two integers and a divisor.
// If the given divisor divides both integers and does not divide either, two specified integers are similar.
// Check whether two integers are similar or not.

function checkSimilarity(num1, num2, divisor) {
  const divides1 = num1 % divisor === 0;
  const divides2 = num2 % divisor === 0;

  return divides1 === divides2;
}

console.log(checkSimilarity(10, 20, 5));
console.log(checkSimilarity(12, 9, 3));
console.log(checkSimilarity(7, 12, 3));
