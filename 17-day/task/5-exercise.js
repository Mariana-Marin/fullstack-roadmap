// 35. Check Character Between 2nd and 4th Positions in String

// Write a program to check whether a specified character exists between the 
// 2nd and 4th positions in a given string.  


function checkCharacter(str, char) {
    let subStr = str.slice(2, 5);
    return subStr.includes(char);
}

console.log(checkCharacter("Mariana", "r"));
console.log(checkCharacter("JavaScript", "c"));