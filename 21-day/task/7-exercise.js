// 97. Shortest String to Convert into Palindrome
//
// Write a JavaScript program to find the shortest possible string.
// This can be converted into a string and converted into a palindrome by adding characters to the end of it.

function shortestPalindromeStr(str) {
  let revStr = str.split("").reverse().join("");
  for (let index = 0; index < str.length; index++) {
    if (str.startsWith(revStr.slice(index))) {
      return str + revStr.slice(0, index);
    }
  }
  return str;
}
console.log(shortestPalindromeStr("abca"));
console.log(shortestPalindromeStr("abcd"));
