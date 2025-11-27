/*1. Display Current Day and Time

Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

/*
// Crear la fecha actual
let fechaActual = new Date();
console.log("Fecha actual:", fechaActual);

// Crear una fecha específica (año, mes, día, hora, minuto, segundo)
// Nota: El mes empieza en 0 (0 = enero, 11 = diciembre)
let fechaEspecifica = new Date(2025, 10, 27, 14, 30, 0);
console.log("Fecha específica:", fechaEspecifica);

// Obtener partes de la fecha
console.log("Año:", fechaActual.getFullYear());
console.log("Mes (0-11):", fechaActual.getMonth());
console.log("Día del mes:", fechaActual.getDate());
console.log("Hora:", fechaActual.getHours());
console.log("Minutos:", fechaActual.getMinutes());
console.log("Segundos:", fechaActual.getSeconds());

// Modificar la fecha
fechaActual.setFullYear(2030);
console.log("Fecha modificada:", fechaActual); */

let now = new Date();
let period = now.getHours() >= 12 ? "PM" : "AM";
let weekDay = "";

switch (now.getDay()) {
  case 0:
    weekDay = "Sunday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;

  case 4:
    weekDay = "Thursday";
    break;

  case 5:
    weekDay = "Friday";
    break;

  case 6:
    weekDay = "Saturday";
    break;
}

console.log("Today is : " + weekDay);
console.log(
  "current time is : " +
    now.getHours() +
    " " +
    period +
    " : " +
    now.getMinutes() +
    " : " +
    now.getSeconds()
);
