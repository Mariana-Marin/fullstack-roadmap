// 22. Remove Character at Specified Position in String

// Write a JavaScript program to remove a character at the specified position in 
// a given string and return the modified string.  

function removeCharacter(str, position) {
    let firstPart = str.slice(0, position);
    let restPart = str.slice(position + 1);
    return firstPart + restPart;
}

console.log(removeCharacter("Mariana", 3));
console.log(removeCharacter("JavaScript", 0));