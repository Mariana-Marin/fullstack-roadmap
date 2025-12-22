
function reverseWithForEach(text) {
  const characters = text.split("");
  let reversedText = "";

  characters.forEach((char) => {
    reversedText = char + reversedText;
  });

  return reversedText;
}

console.log(reverseWithForEach("Hola mundo"));

/*
  Crea una función que reciba dos cadenas como parámetro (str1, str2)
  e imprima otras dos cadenas como salida (out1, out2).
  - out1 contendrá todos los caracteres presentes en la str1 pero NO
    estén presentes en str2.
  - out2 contendrá todos los caracteres presentes en la str2 pero NO
    estén presentes en str1.
 */

  
function diffStrings(str1, str2) {
  let out1 = "";
  let out2 = "";
  const chars1 = str1.split("");
  const chars2 = str2.split("");

  chars1.forEach((char) => {
    if (!chars2.includes(char)) {
      out1 += char;
    }
  });
  chars2.forEach((char) => {
    if (!chars1.includes(char)) {
      out2 += char;
    }
  });
  return { out1, out2 };
}
console.log(diffStrings("abcdef", "defghi"));
