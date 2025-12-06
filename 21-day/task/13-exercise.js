// 103. Max Integer by Removing One Digit
//
// Write a JavaScript program to find the maximum number of
//  a given positive integer by deleting exactly one digit
// of the given number.

function maxIntegerByRemovingOneDigit(num) {
  const numStr = num.toString();
  let maxNum = 0;

  for (let index = 0; index < numStr.length; index++) {
    const newNum = Number(numStr.slice(0, index) + numStr.slice(index + 1));
    maxNum = Math.max(maxNum, newNum);
  }
  return maxNum;
}
console.log(maxIntegerByRemovingOneDigit(152));
console.log(maxIntegerByRemovingOneDigit(1001));
