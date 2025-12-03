// 54. Count Vowels in String
//
// Write a JavaScript program to count the number of vowels in a given string.

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    if (vowels.includes(str[index])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("w3resource.com"));
console.log(countVowels("MARIANA"));
