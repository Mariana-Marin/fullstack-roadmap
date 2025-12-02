/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}


function stringToRot13 (str) {

    let strRot13 = []
    let abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let arrayAbc = abc.split("")

    for (let index = 0; index < str.length; index++) {

    let indexLetter = arrayAbc.indexOf(str[index])
    let indexRot13 = (indexLetter + 13)
    let letterRot13 = arrayAbc[indexRot13]

    strRot13.push(letterRot13)
    }

    console.log (strRot13.join(""))
    
}

stringToRot13("hello");
stringToRot13("uryyb");