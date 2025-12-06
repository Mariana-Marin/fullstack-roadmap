// 99. Check if String Can Rearrange to Match Another
//
// Write a JavaScript program to check whether it is possible to rearrange the characters
// of a given string. This is in such a way that it will become equal to another given string

function canRearrangeToMatch(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

console.log(canRearrangeToMatch("listen", "silent"));
console.log(canRearrangeToMatch("hello", "billion"));
