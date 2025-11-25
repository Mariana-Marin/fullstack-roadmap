/**
 * Write a JavaScript program to get the difference between a given number and 13,
 * if the number is broader than 13 return double the absolute difference.
 */

function getAbsoluteDifference(number) {
  if (number > 13) {
    number = Math.abs((number - 13) * 2);
  } else {
    number -= 13;
  }

  return number;
}

console.log(getAbsoluteDifference(25));
console.log(getAbsoluteDifference(13));
