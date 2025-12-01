// 26. Add Last 3 Characters to Front and Back of String

// Write a JavaScript program to create a string from a given string. 
// This is done by taking the last 3 characters and adding them at both the front and back.
// The string length must be 3 or more.  

function addLast3CharsToFrontAndBack(str) {
  if (str.length < 3) {
    return "String length must be 3 or more";
  }
  const last3Chars = str[str.length - 3] + str[str.length - 2] + str[str.length - 1];
  // Alternatively: const last3Chars = str.slice(-3);
  return last3Chars + str + last3Chars;
}

console.log(addLast3CharsToFrontAndBack("Mariana"));
console.log(addLast3CharsToFrontAndBack("abc"));
console.log(addLast3CharsToFrontAndBack("hi"));