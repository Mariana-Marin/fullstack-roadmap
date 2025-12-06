// 78. Check if Array Does Not Contain 1 or 3
// 
// Write a JavaScript program to test whether 
// an array of integers of length 2 does not 
// contain 1 or 3.  

function checkNot1Or3(array) {
  return !array.includes(1) && !array.includes(3);
}

console.log(checkNot1Or3([1, 5]));
console.log(checkNot1Or3([1, 3]));
console.log(checkNot1Or3([5, 3]));
console.log(checkNot1Or3([0, 0]));