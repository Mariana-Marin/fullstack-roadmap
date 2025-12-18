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

function printStr(str1, str2) {
  const arrStr1 = str1.split("");
  const arrStr2 = str2.split("");
  const out1 = [];
  const out2 = [];

  arrStr1.forEach((e) => {
    if (!str2.includes(e)) {
      out1.push(e);
    }
  });

  arrStr2.forEach((e) => {
    if (!str1.includes(e)) {
      out2.push(e);
    }
  });

  return [out1.join(""), out2.join("")];
}

console.log(printStr("hola", "mundo"))
