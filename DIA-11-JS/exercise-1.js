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

console.log(contarVocales(stringUsuario));