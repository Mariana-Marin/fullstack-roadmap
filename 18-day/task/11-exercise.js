// 56. Divide Numbers and Format with Commas
//
// Write a JavaScript program to divide two positive numbers and return the result as string with properly formatted commas.

function addCommas(num1, num2) {
  return (num1 / num2).toLocaleString();
}

console.log(addCommas(3000, 2));
