/**
 *  create a function that receives an string and a letter as parameters
 *  removes all the letter occurrences from the string and return it
 */

const palabraUsuario = "Mariana";
const letraUsuario = "a";

function eliminarCoincidencias (palabraUsuario , letraUsuario) {

    palabraUsuario = palabraUsuario.replaceAll(letraUsuario, '');
    return palabraUsuario;
}

console.log(eliminarCoincidencias(palabraUsuario, letraUsuario));