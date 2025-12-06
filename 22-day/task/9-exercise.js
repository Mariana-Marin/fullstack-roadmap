// 114. Check String as Correct Sentence
//
// Write a JavaScript program to check whether a given string represents a
// correct sentence or not. A string is considered a correct sentence if it
// starts with a capital letter and ends with a full stop (.)

function isCorrectSentence(str) {
  const firstChar = str[0];
  const startsWithCapital =
    firstChar === firstChar.toUpperCase() &&
    firstChar !== firstChar.toLowerCase();
  const endsWithFullStop = str.at(-1) === ".";

  return startsWithCapital && endsWithFullStop;
}
console.log(isCorrectSentence("This is a correct sentence."));
console.log(isCorrectSentence("this is not a correct sentence."));
console.log(isCorrectSentence("This is also not a correct sentence"));
