/*# Example usage:
sentence = "This is a sample sentence. This sentence is for the Python exercise."
result = count_words(sentence)
print(result)*/

function count_words(sentence) {
  return sentence.split(" ").length; // pase el String a Array, donde cada indice es una palabra, luego conte el tamaño de ese array.
}

console.log(
  count_words(
    "This is a sample sentence. This sentence is for the Python exercise."
  )
); // OUTPUT: 12 CHECK

/*# Example usage:
    string_with_special_characters = "$700.50 E"
    result = extract_float_from_string(string_with_special_characters)
    print(result)*/

function extractFloatFromString(str) {
  let arrStr = str.split("");
  let arrNum = "0123456789.";
  let finalArr = [];

  for (let index = 0; index < arrStr.length; index++) {
    if (arrNum.includes(arrStr[index])) {
      finalArr.push(arrStr[index]);
    }
  }

  return Number(finalArr.join(""));
}

console.log(extractFloatFromString("$700.50 E"));
