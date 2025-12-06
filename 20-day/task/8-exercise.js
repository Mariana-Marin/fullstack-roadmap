// 83. Find Longest String in Array
//
// Write a JavaScript program to find the longest string from a given array of strings.

function findLongestString(array) {
  let maxLength = 0;
  let longestString = "";
  
  for (const element of array) {
    if (element.length > maxLength) {
      maxLength = element.length;
      longestString = element;
    }
  }

  return longestString;
}

console.log(findLongestString(["a", "aa", "aaa"]));
console.log(findLongestString(["aaaa", "aa", "aaa"]));
console.log(findLongestString(["aa", "aa", "aa"]));
console.log(findLongestString(["aa", "aaa", "aa"]));
