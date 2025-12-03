// 57. Create String of Specified Copies
//
// Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.

function createCopies(str, numCopies) {
  return str.repeat(numCopies);
}

console.log(createCopies("Mariana ", 3));
