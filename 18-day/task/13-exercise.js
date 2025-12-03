// 58. Four Copies of Last 3 Characters
//
// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters
// of a given original string. The string length must be 3 and above.

function copy3LastCharacters(str) {
  if (str.length < 3) {
    return "Invalid String";
  } else {
    const threeLastChr = str.slice(-3);

    return threeLastChr.repeat(4);
  }
}

console.log(copy3LastCharacters("Mariana"));
console.log(copy3LastCharacters("Hi"));