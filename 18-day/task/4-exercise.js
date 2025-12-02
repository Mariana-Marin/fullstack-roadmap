// 49. Replace Each Character with Next Alphabet Letter
//
// Write a JavaScript program to replace every character in a given string 
// with the character following it in the alphabet.

// Aun no implemento str con espacios (sorry)

function replaceStrWithNextLetter (str) {

    let strReplaced = []
    let abc = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    let arrayAbc = abc.split("")

    for (let index = 0; index < str.length; index++) {

    let indexLetter = arrayAbc.indexOf(str[index])
    let indexPlus1 = (indexLetter + 1)
    let letterPlus1 = arrayAbc[indexPlus1]

    strReplaced.push(letterPlus1)
    }

    console.log (strReplaced.join(""))
    
}

replaceStrWithNextLetter("hello");
replaceStrWithNextLetter("gdkkn");