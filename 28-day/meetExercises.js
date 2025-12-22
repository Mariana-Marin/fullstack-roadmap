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
