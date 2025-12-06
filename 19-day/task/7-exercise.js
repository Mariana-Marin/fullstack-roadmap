// 67. Remove First/Last 'P' Characters in String
// 
// Write a JavaScript program to create a new string 
// from a given string. This program removes the first 
// and last characters of the string if the first or 
// last character is 'P'. 
// Return the original string if the condition is 
// not satisfied.  

function removeFirstLastP(str) {
    if(str.startsWith("p") && str.endsWith("p")){
        return str.slice(1,-1)
    } else if (str.startsWith("p")){
        return str.slice(1)
    } else if (str.endsWith("p")){
        return str.slice(0,-1)
    } else{
        return str
    }
}

console.log (removeFirstLastP("php"));
console.log (removeFirstLastP("phyton"));
console.log (removeFirstLastP("mariana"));
console.log (removeFirstLastP("pop"));