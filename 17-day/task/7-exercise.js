// 37. Modify String Based on Length (First 3 Lowercase/Uppercase)

// Write a JavaScript program to produce a new string that has the first
// 3 characters in lower case from a given string. If the string length is less than
// 3 convert all the characters to upper case.

function modifyString(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    let firstPart = str.slice(0, 3).toLowerCase();
    let restPart = str.slice(3);
    return firstPart + restPart;
  }
}

console.log(modifyString("MARIANA"));
console.log(modifyString("mar"));
