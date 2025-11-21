<<<<<<< HEAD
// create a function that given an string as a parameter returns how many vowels the string had.

const stringUsuario = "Mariana"
function contarVocales(stringUsuario) {
    
    let contadorLetras = 0;
    const vocales = 'aeiouAEIOU'; 

    for (let i = 0; i < stringUsuario.length; i++) {
        if (vocales.includes(stringUsuario[i])) {
            contadorLetras++;
        }
    }
    return contadorLetras;
}

=======
// create a function that given an string as a parameter returns how many vowels the string had.


function contarVocales(stringUsuario) {
    const stringUsuario = "Mariana"
    let contadorLetras = 0;
    const vocales = 'aeiouAEIOU'; 

    for (let i = 0; i < stringUsuario.length; i++) {
        if (vocales.includes(stringUsuario[i])) {
            contadorLetras++;
        }
    }
    return contadorLetras;
}

>>>>>>> 30cd245996cc503f9cb0efbf2d7e1ef7504dbdd0
console.log(contarVocales(stringUsuario));