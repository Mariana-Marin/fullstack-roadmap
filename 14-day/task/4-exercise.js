/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.  
 */

function removeCharacter(str, position) {

    const partOneStr = str.slice(0, position);
    const partTwoStr = str.slice(position + 1);

    return partOneStr + partTwoStr;
}

console.log(removeCharacter("Mariana", 3));