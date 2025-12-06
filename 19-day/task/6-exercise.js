// 66. Return City Name if Starts with 'Los' or 'New'
// 
// Write a JavaScript program to display the city name 
// if the string begins with "Los" or "New" otherwise 
// return blank.


function returnCityName(str) {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  } else {
    return "";
  }
}

console.log(returnCityName("New York"));
console.log(returnCityName("Los Angeles"));
console.log(returnCityName("Medellin"));