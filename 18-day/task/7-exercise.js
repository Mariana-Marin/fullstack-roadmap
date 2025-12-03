// 52. Sort Letters Alphabetically in String
//
// Write a JavaScript program to convert letters of a given string alphabetically.

function sortStr(str) {
  return str.toLowerCase().split("").sort().join("");
}

console.log(sortStr("Mariana"));
