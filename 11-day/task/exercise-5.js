
/**
 * create a function that Capitalizes the first letter of each word in a given string.
 */

const stringUsuario = "mariana marin vanegas";

function capitalizarPrimeraLetra(stringUsuario) {
    const palabrasArray = stringUsuario.split(' ');
    const palabrasCapitalizadas = [];
    
    for (let i = 0; i < palabrasArray.length; i++) {
        const palabra = palabrasArray[i];
        
        const palabraCapitalizada = palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();

        palabrasCapitalizadas.push(palabraCapitalizada);
    }
    return palabrasCapitalizadas.join(' ');
}

console.log(capitalizarPrimeraLetra(stringUsuario)); 

