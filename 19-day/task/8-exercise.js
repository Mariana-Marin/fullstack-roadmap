// 68. Use First and Last 'n' Characters from String
//
// Write a JavaScript program to create a new
// string using the first and last n characters
// from a given string. The string length must be
// larger than or equal to n.

function createNewStr(str, n) {
  return str.length >= n 
  ? str.slice(0, n) + str.slice(-n) 
  : str;
}

console.log(createNewStr("Mariana", 2));
console.log(createNewStr("Mar", 4));
