function biggerNumber(num1, num2) {
  if (num1 > 60 || num1 < 40) {
    console.log("el parametro uno no esta en el rango permitido");
  } else if (num2 > 60 || num2 < 40) {
    console.log("el parametro dos no esta en el rango permitido");
  } else if (num1 > num2) {
    console.log("El parametro 1 es mayor al parametro 2 ");
  } else {
    console.log("El parametro 2 es mayor al parametro 1 ");
  }
}

biggerNumber(20, 30);
biggerNumber(10, 10);
biggerNumber(60, 40);

// recive 10 y 2
// funcion que reciba dos numeros, debe imprimir los numeros del
// cero hasta el primer parametro.
// si hay un numero 2 en el segundo parametro, en vez de imprimir el numero imprimes globant hasta llegar al doble
// del segundo pametro inclusive.

function printNumbers(num1, num2) {

  for (let index = 0; index <= num1; index++) {

      if (index !== num2){

        console.log (index)

      } else {

        for (let index = num2; index <= (num2 * num2); index++) {
        console.log("Globant", index);
      } 
        index = num2 * num2; 
      }
    
  }
}

printNumbers(10, 2);  

// opcions 2 sin doble for

/*function printNumbers(num1, num2) {
  for (let index = 0; index <= num1; index++) {
    const isInGlobantRange = index >= num2 && index <= (num2 * num2);
    
    if (isInGlobantRange) {
      console.log("Globant", index);
    } else {
      console.log(index);
    }
  }
}

printNumbers(10, 2);*/
