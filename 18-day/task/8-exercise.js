// 53. Check 'a' and 'b' Separated by Exactly 3 Places
//
// Write a JavaScript program to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string.

function checkPlacesBetweenAyB(str) {
  let charA = str.toLowerCase().indexOf("a");
  let charB = str.toLowerCase().indexOf("b");

  return Math.abs(charA - charB) === 4;
}
console.log(checkPlacesBetweenAyB("Chainsbreak"));
console.log(checkPlacesBetweenAyB("pane borrowed"));
