// 63. Extract Middle 3 Characters from Odd-Length String
// 
// Write a JavaScript program to create a string using the middle 
// three characters of a given string of odd length. 
// The string length must be greater than or equal to three.  

function extractMiddleThreeChars(str) {
  if (str.length < 3 || str.length % 2 === 0) {
    return "Invalid String";
  } else {
    const midIndex = Math.floor(str.length / 2);
    return str.slice(midIndex - 1, midIndex + 2);
  }
}

console.log(extractMiddleThreeChars("Mariana"));