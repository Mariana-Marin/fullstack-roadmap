<<<<<<< HEAD
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

=======
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

>>>>>>> 30cd245996cc503f9cb0efbf2d7e1ef7504dbdd0
console.log(eliminarCoincidencias(palabraUsuario, letraUsuario));