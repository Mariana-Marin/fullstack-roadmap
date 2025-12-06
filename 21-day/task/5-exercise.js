// 95. Replace Numbers with Specified Value in Array
//
// Write a JavaScript program to replace all numbers with a specified number in an array of integers.

function replaceNumbers(array, toReplace, replaceWith) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === toReplace) {
      array[index] = replaceWith;
    }
  }
  return array;
}
console.log(replaceNumbers([1, 2, 3, 2, 4, 2], 2, 5));
console.log(replaceNumbers([5, 3, 9, 1, 3, 3], 3, 7));
console.log(replaceNumbers([10, 4, 1, 7, 2, 4], 4, 0));
