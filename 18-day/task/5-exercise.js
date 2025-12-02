// 50. Capitalize First Letter of Each Word in String
//
// Write a JavaScript program to capitalize the first letter of each word in a given string.

function capitalizeFirstLetter(str) {
  let arrayStr = str.split(" ");

  for (let index = 0; index < arrayStr.length; index++) {
    let currentWord = arrayStr[index];
    let firstPart = currentWord.charAt(0).toUpperCase();
    let restPart = currentWord.slice(1);

    arrayStr[index] = firstPart + restPart;
  }

  return arrayStr.join(" ");
}

console.log(capitalizeFirstLetter("mariana marin"));
