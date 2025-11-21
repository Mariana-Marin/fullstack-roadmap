<<<<<<< HEAD
/**
 * create a function that receives an string
 * if the string has more than 30 characters
 * the function should return a truncated string with elipsis
 * that only contains 30 valid characters
 */
const stringUsuario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

function truncarString (stringUsuario) {

    if (stringUsuario.length > 30) {
    stringUsuario = stringUsuario.substring(0, 30) + '...';
    }
    return stringUsuario;
}

=======
/**
 * create a function that receives an string
 * if the string has more than 30 characters
 * the function should return a truncated string with elipsis
 * that only contains 30 valid characters
 */
const stringUsuario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

function truncarString (stringUsuario) {

    if (stringUsuario.length > 30) {
    stringUsuario = stringUsuario.substring(0, 30) + '...';
    }
    return stringUsuario;
}

>>>>>>> 30cd245996cc503f9cb0efbf2d7e1ef7504dbdd0
console.log(truncarString(stringUsuario));