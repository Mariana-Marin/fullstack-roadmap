// 30. Remove 'Script' from String at 5th Position

// Write a JavaScript program to check whether a string "Script" 
// appears at the 5th (index 4) position in a given string. If "Script" appears 
// in the string, return the string without "Script" otherwise return the original one.  

function removeScript(str) {
    if (str.slice(4, 10) === "Script") {
        let firstPart = str.slice(0, 4);
        return firstPart;
    } else {
        return str;
    }
}

console.log(removeScript("JavaScript"));
console.log(removeScript("TypeScript"));
