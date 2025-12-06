// 65. Check if String Ends with 'Script'
// 
// Write a JavaScript program to test whether a 
// string ends with "Script". The string length 
// must be greater than or equal to 6.  


function endsWithScript(str) {
  if (str.length < 6) {
    return "String is too short";
  } else {
    return str.slice(-6) === "Script";
    //return str.endsWith("Script");
    //return str.includes("Script", str.length - 6);
  }
}

console.log(endsWithScript("JavaScript"));
console.log(endsWithScript("TypeScript"));
console.log(endsWithScript("Java"));
console.log(endsWithScript("Scripted"));