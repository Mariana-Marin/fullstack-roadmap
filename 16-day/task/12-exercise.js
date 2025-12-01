// 27. Check if String Starts with 'Java'

// Write a JavaScript program to check whether a string starts with 'Java' if 
// it does not otherwise.  

function startsWithJava(str) {

    firstFourLetters = str.toLowerCase().slice(0, 4);
    return firstFourLetters === "java";
    //return str.startsWith("java");

}
console.log(startsWithJava("JavaScript"));
console.log(startsWithJava("Mariana"));