// 98. Change Case Minimally for Upper or Lower Case
//
// Write a JavaScript program to change the case of the minimum number of letters to
// make a given string written in upper case or lower case.
// Fox example "Write" will be write and "PHp" will be "PHP"

function changeCaseMinimally(str) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  for (const char of str) {
    if (char === char.toUpperCase()) {
      upperCaseCount++;
    } else {
      lowerCaseCount++;
    }
  }
  return upperCaseCount > lowerCaseCount
    ? str.toUpperCase()
    : str.toLowerCase();
}

console.log(changeCaseMinimally("Write"));
console.log(changeCaseMinimally("PHp"));
