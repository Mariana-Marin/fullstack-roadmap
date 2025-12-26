// Ejercicio 1: Crear tu primer Set
// Objetivo: Familiarizarte con la creación de Sets.Crea un Set llamado colores que contenga:
//  "rojo", "azul", "verde", "rojo", "amarillo".
// Imprime el Set y su tamaño. Observa qué pasó con el "rojo" duplicado.

const colors = new Set(["rojo", "azul", "verde", "rojo", "amarillo"]);

console.log(colors.size);
console.log(colors);

// Ejercicio 2: Agregar elementos
// Objetivo: Practicar el método add().
// Crea un Set vacío llamado frutas. Agrega las siguientes frutas una por una:
//  "manzana", "banana", "naranja", "manzana", "pera".
// Imprime el Set final y verifica cuántos elementos tiene.

const fruits = new Set();

fruits.add("manzana").add("banana").add("naranja").add("pera");

console.log(fruits, fruits.size);

// Ejercicio 3: Verificar existencia
// Objetivo: Usar has() para búsquedas.
// Dado el Set: const animales = new Set(["perro", "gato", "loro", "pez"])
// Verifica si existen los siguientes animales e imprime el resultado:

// "gato"
// "hamster"
// "loro"
// "Perro" (con mayúscula)

const animals = new Set(["perro", "gato", "loro", "pez"])
const toCheck = ["gato", "hamster","loro", "Perro"]

let result = toCheck.every((animal)=>{
  return animals.has(animal)
})

console.log(result);
