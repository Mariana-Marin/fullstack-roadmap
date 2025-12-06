// 64. Concatenate Strings with Matching Length
//
// Write a JavaScript program to concatenate two
// strings and return the result. If the length of the strings does not match,
// then remove the characters from the longer string.

function concatenateTwoStrings(str1, str2) {
  if (str1.length > str2.length) {
    const difference = str1.length - str2.length;

    return str1.slice(0, -difference) + str2;

  } else if (str2.length > str1.length) {
    const difference = str2.length - str1.length;

    return str2.slice(0, -difference) + str1;

  } else {
    return str1 + str2;
  }
}

console.log(concatenateTwoStrings("mariana", "mariana"));
console.log(concatenateTwoStrings("marianaa", "mariana"));
console.log(concatenateTwoStrings("mariana", "marianaa"));
