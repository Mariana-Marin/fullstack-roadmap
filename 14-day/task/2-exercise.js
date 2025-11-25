/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.
 */

function check50(...numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return numbers.includes(50) || sum === 50;
}

console.log(check50(3, 3, 50));
console.log(check50(25, 25));
console.log(check50(24, 25));
