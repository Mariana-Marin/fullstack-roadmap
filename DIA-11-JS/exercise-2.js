<<<<<<< HEAD
// create a function that check if a string is a palindrome

// Un palíndromo es una palabra, frase o número que se lee igual 
// de izquierda a derecha que de derecha a izquierda.


function comprobarPalindrome (palindromeUsuario) {

    const palindromeUsuario = "Oso"

    const palindromeLimpio = palindromeUsuario.toLowerCase().trim();

    const palindromeArray = palindromeLimpio.split();

    const palindromeArrayInvertido = palindromeArray.reverse();

    if (palindromeArrayInvertido === palindromeArray) {

        console.log("El string ingresado SÍ es un Palindromo");
    } else {
        console.log("El string ingresado NO es un Palindromo")
    }


=======
// create a function that check if a string is a palindrome

// Un palíndromo es una palabra, frase o número que se lee igual 
// de izquierda a derecha que de derecha a izquierda.


function comprobarPalindrome (palindromeUsuario) {

    const palindromeUsuario = "Oso"

    const palindromeLimpio = palindromeUsuario.toLowerCase().trim();

    const palindromeArray = palindromeLimpio.split();

    const palindromeArrayInvertido = palindromeArray.reverse();

    if (palindromeArrayInvertido === palindromeArray) {

        console.log("El string ingresado SÍ es un Palindromo");
    } else {
        console.log("El string ingresado NO es un Palindromo")
    }


>>>>>>> 30cd245996cc503f9cb0efbf2d7e1ef7504dbdd0
};