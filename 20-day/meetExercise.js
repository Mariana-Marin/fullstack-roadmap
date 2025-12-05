/*This task gives you some basic array practice:
Create an array of three items, and store it in a variable called myArray. 
The items can be anything you want — how about your favorite foods or bands?
Next, modify the first two items in the array using bracket notation and assignment.
Finally, add a new item to the beginning of the array.*/

const myArray = [1, 2, 3, 4];

myArray[0] = 5;
myArray[1] = 6;

myArray.unshift(7);

console.log(myArray);

// crear una funcion que reciba numero del 1 al 10, y retorne un array
// con cantidad de items de acuerdo al n que le paso, con valores del 0 al 100 de forma aleatoria.

function generateRandomNumber(num) {
  if (num > 10) {
    return "invalid Number";
  } else {
    const array = [];

    for (let index = 0; index < num; index++) {
      array.push((Math.random() * 100).toFixed(0));
    }
    return array;
  }
}

console.log(generateRandomNumber(4));
console.log(generateRandomNumber(20));

// recibir un array como argumento en un array, que tiene n elementos (edades).
// Devolver true or false si hay un menor de edad en ese array

function checkAge(array) {
  //return array.some((el) => el < 18);
  for (let index = 0; index < array.length; index++) {
    if (array[index] < 18) {
      return true;
    }
  }
  return false;
}

console.log(checkAge([1, 18, 20]));
console.log(checkAge([30, 18, 20]));
console.log(checkAge([30, 10, 20]));

// Crear una funcion que cuente la cantidad de personas mayores de edad

function checkAge(array) {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 18) {
      count++;
    }
  }
  return count;
}

console.log(checkAge([1, 18, 20]));
console.log(checkAge([30, 18, 20]));
console.log(checkAge([30, 10, 20]));

// Calcular el promedio la edad promedio de solo las personas mayores de edad

function calculateAverage(array) {
  let sum = 0;
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= 18) {
      sum += array[index];
      count++;
    }
  }

  return sum / count;
}

console.log(calculateAverage([1, 18, 20]));

// 


