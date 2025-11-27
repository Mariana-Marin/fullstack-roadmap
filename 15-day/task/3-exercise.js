/*3. Get Current Date in Various Formats

Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

let currentDate = new Date();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let year = currentDate.getFullYear();

console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);
