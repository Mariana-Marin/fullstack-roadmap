/**
 * EJERCICIO PROPUESTO: El Bibliotecario Ahorrador (Optimización de Espacio)
 *
 * CONTEXTO:
 * Tienes una lista de libros, y cada libro tiene varios géneros.
 * Las palabras como "Science Fiction" se repiten muchas veces.
 * Guardar el texto completo muchas veces ocupa mucha memoria.
 * Es mejor guardar el texto UNA sola vez en una lista aparte (diccionario)
 * y en los libros solo guardar el número (índice) que corresponde a ese texto.
 *
 * RETO:
 * Comprimir la colección de libros usando índices en lugar de textos.
 *
 * REGLAS:
 * - NO puedes usar `Set` (queremos ver lógica de arrays).
 * - Usa `forEach`, `includes`, `push`, `map`, `indexOf`.
 *
 * PASOS:
 * 1. Recorre todos los libros y todos sus géneros. Si un género NO está
 *    en `genreDictionary`, agrégalo.
 *
 * 2. Crea `compressedBooks`. Para cada libro, crea un nuevo objeto donde
 *    `genres` sea una lista de NÚMEROS (los índices del diccionario).
 *
 * 3. Crea una función `decompressBook` que reciba un libro comprimido y
 *    te devuelva el libro original con los textos.
 */

const bookCollection = [
  { title: "Dune", genres: ["Science Fiction", "Epic", "Adventure"] },
  { title: "The Hobbit", genres: ["Fantasy", "Adventure"] },
  { title: "1984", genres: ["Science Fiction", "Dystopian"] },
  { title: "Harry Potter", genres: ["Fantasy", "Adventure"] },
  { title: "Foundation", genres: ["Science Fiction", "Epic"] },
  { title: "Neuromancer", genres: ["Science Fiction", "Cyberpunk"] },
];

console.log("--- Colección Original ---");
console.log(JSON.stringify(bookCollection, null, 2));

// TU CÓDIGO AQUÍ:

// 1. Crear genreDictionary (Lista única de géneros)
const genreDictionary = [];
// Pista: Usa forEach para recorrer libros, y otro forEach para los géneros.
// Usa !genreDictionary.includes(genero) para saber si agregarlo.

// 2. Crear compressedBooks (Reemplazar textos por índices)
const compressedBooks = [];
// Pista: Usa map para crear la nueva lista de libros.
// Dentro, usa map otra vez en los géneros para cambiarlos por su genreDictionary.indexOf(genero)

// 3. Función de descompresión
function decompressBook(compressedBook, dictionary) {
  // Tu código aquí
  // Debe devolver un objeto con los géneros como texto
}

// VERIFICACIÓN
console.log("\n--- 1. Diccionario de Géneros (Únicos) ---");
console.log(genreDictionary);

console.log("\n--- 2. Colección Comprimida (Con índices) ---");
console.log(JSON.stringify(compressedBooks, null, 2));

// console.log("\n--- 3. Prueba de Descompresión ---");
// const libro1 = compressedBooks[0];
// console.log(decompressBook(libro1, genreDictionary));

function multiplyArray(n, array) {
  return array.map((e) => {
    return n * e;
  });
}

console.log(multiplyArray(3, [1, 2, 3])); 
