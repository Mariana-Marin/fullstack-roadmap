// 84. Replace Characters with Next in Alphabet
//
// Write a JavaScript program to replace each character in a given string with the next in the English alphabet.
// Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

function replaceStrWithNextLetter(str) {
  let strReplaced = [];
  let abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
  let arrayAbc = abc.split("");

  for (let index = 0; index < str.length; index++) {
    let indexLetter = arrayAbc.indexOf(str[index]);
    let indexPlus1 = indexLetter + 1;
    let letterPlus1 = arrayAbc[indexPlus1];

    strReplaced.push(letterPlus1);
  }

  return strReplaced.join("");
}

console.log(replaceStrWithNextLetter("hello"));
console.log(replaceStrWithNextLetter("gdkkn"));
