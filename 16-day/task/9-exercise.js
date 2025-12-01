// 24. Add First Character to Front and Back of String

// Write a JavaScript program to create another string from a given string
// with the first character of the given string added to the front and back.

function addFirstCharToFrontAndBack(str) {
  if (str.length < 1) {
    return "String length must be broader than or equal to 1";
  }
  const firstLetter = str[0];
  return firstLetter + str + firstLetter;
}

console.log(addFirstCharToFrontAndBack("Mariana"));
console.log(addFirstCharToFrontAndBack("A"));
console.log(addFirstCharToFrontAndBack(""));
