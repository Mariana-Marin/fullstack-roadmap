/*11. Convert Temperatures Between Celsius and Fahrenheit

Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in 
 Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C */

function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F`);
}

function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F is ${celsius}°C`);
}

/* Descomentar para usar con prompt:
const userChoice = Number(prompt(
  "Choose an option:\n" +
  "1. Convert Celsius to Fahrenheit\n" +
  "2. Convert Fahrenheit to Celsius"
));
*/

const userChoice = 2;

switch (userChoice) {
  case 1:
    /* Descomentar para usar con prompt:
    const tempInCelsius = Number(prompt("Enter temperature in Celsius:"));
    */
    const tempInCelsius = 60;
    convertCelsiusToFahrenheit(tempInCelsius);
    break;

  case 2:
    /* Descomentar para usar con prompt:
    const tempInFahrenheit = Number(prompt("Enter temperature in Fahrenheit:"));
    */
    const tempInFahrenheit = 45;
    convertFahrenheitToCelsius(tempInFahrenheit);
    break;

  default:
    console.log("Invalid option. Please choose 1 or 2.");
}