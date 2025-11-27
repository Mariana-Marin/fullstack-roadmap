/*5. Rotate String 'w3resource' Periodically

Write a JavaScript program to rotate the string 'w3resource' in the right direction. 
This is done by periodically 
removing one letter from the string end and attaching it to the front.  */

/*.slice() - para cortar partes del string
setInterval() - ejecutar código cada X milisegundos
setInterval() necesita 2 parámetros:
* Una función a ejecutar
* El tiempo en milisegundos*/

let str = "w3resource";

function rotateString (){

    let lastCharacter = str[str.length -1];
    let restOfString = str.slice(0, -1);

    str = lastCharacter + restOfString;

    console.log (str);
}

setInterval(rotateString, 1000);


