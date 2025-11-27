/*6. Check Leap Year (Gregorian Calendar)

Write a JavaScript program to determine whether a given year is a leap 
year in the Gregorian calendar.  */

// Para determinar si un año es bisiesto, verifica si es divisible por 4,
// pero no por 100, a menos que también sea divisible por 400.

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeapYear(2000));
console.log(isLeapYear(2024));
