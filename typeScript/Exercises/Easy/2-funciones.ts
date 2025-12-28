/*
  ========================================
  EJERCICIOS DE FUNCIONES EN TYPESCRIPT
  ========================================
*/

/*
  Ejercicio 1
  Crea una función que reciba dos números y retorne su suma.
  Especifica los tipos de los parámetros y el tipo de retorno.
*/

console.log(sumar(5, 3)); // 8

/*
  Ejercicio 2
  Crea una función que reciba un nombre (string) y retorne un saludo.
  Usa template literals para el mensaje.
*/


console.log(saludar("Mariana")); // ¡Hola, Mariana! Bienvenido/a.

/*
  Ejercicio 3
  Crea una función que reciba un número y retorne si es par o impar (boolean).
*/

console.log(esPar(4)); // true
console.log(esPar(7)); // false

/*
  Ejercicio 4
  Crea una función que no retorne nada (void) y que imprima
  un mensaje en consola.
*/


imprimirMensaje("TypeScript es genial");

/*
  Ejercicio 5
  Crea una función con un parámetro opcional.
  La función debe saludar, y si se proporciona la edad, incluirla en el saludo.
*/


console.log(saludarConEdad("Ana")); // Hola Ana.
console.log(saludarConEdad("Luis", 25)); // Hola Luis, tienes 25 años.

/*
  Ejercicio 6
  Crea una función con un parámetro por defecto.
  La función debe calcular el precio con IVA (19% por defecto).
*/


console.log(calcularPrecioConIVA(100)); // 119 (IVA 19% por defecto)
console.log(calcularPrecioConIVA(100, 0.21)); // 121 (IVA 21%)

/*
  Ejercicio 7
  Crea una función flecha que reciba un array de números
  y retorne el número más grande.
*/


console.log(encontrarMaximo([5, 10, 3, 8, 15])); // 15

/*
  Ejercicio 8
  Crea una función que reciba un array de strings y retorne
  un nuevo array con todas las palabras en mayúsculas.
*/


console.log(convertirAMayusculas(["hola", "mundo", "typescript"]));
// ["HOLA", "MUNDO", "TYPESCRIPT"]

/*
  Ejercicio 9
  Crea una función que reciba un objeto persona con propiedades
  nombre y edad, y retorne un string descriptivo.
*/


function describirPersona(persona: Persona): string {
  return `${persona.nombre} tiene ${persona.edad} años.`;
}

console.log(describirPersona({ nombre: "Carlos", edad: 30 }));
// Carlos tiene 30 años.

/*
  Ejercicio 10
  Crea una función que reciba rest parameters (cantidad variable de números)
  y retorne su promedio.
*/

console.log(calcularPromedio(10, 20, 30)); // 20
console.log(calcularPromedio(5, 10, 15, 20)); // 12.5

/*
  Ejercicio 11
  Crea una función que reciba un array de números y un callback
  que determine cómo filtrar los números.
*/


console.log(pares); // [2, 4, 6, 8, 10]
console.log(mayoresQueCinco); // [6, 7, 8, 9, 10]

/*
  Ejercicio 12
  Crea una función que retorne un objeto con dos propiedades:
  - doble: el número multiplicado por 2
  - triple: el número multiplicado por 3
*/


console.log(multiplicar(5)); // { doble: 10, triple: 15 }

/*
  Ejercicio 13
  Crea una función que reciba un array de objetos producto
  y retorne el total de precios.
*/


console.log(calcularTotalProductos(productos)); // 1305

/*
  Ejercicio 14
  Crea una función que reciba un string y retorne un objeto con:
  - longitudTotal: número de caracteres
  - sinEspacios: número de caracteres sin contar espacios
  - palabras: número de palabras
*/


console.log(analizarTexto("Hola mundo desde TypeScript"));
// { longitudTotal: 28, sinEspacios: 24, palabras: 4 }

/*
  Ejercicio 15
  Crea una función con sobrecarga (overload) que pueda:
  - Recibir dos números y retornar su suma
  - Recibir dos strings y retornar su concatenación
*/


console.log(combinar(5, 3)); // 8
console.log(combinar("Hola ", "Mundo")); // "Hola Mundo"

/*
  Ejercicio 16
  Crea una función que reciba un array de cualquier tipo
  y retorne el primer elemento o undefined si está vacío.
  Usa genéricos.
*/

console.log(obtenerPrimero([1, 2, 3])); // 1
console.log(obtenerPrimero(["a", "b", "c"])); // "a"
console.log(obtenerPrimero([])); // undefined

/*
  Ejercicio 17
  Crea una función genérica que reciba un array y retorne
  un nuevo array con los elementos duplicados.
*/


console.log(duplicarElementos([1, 2, 3])); // [1, 1, 2, 2, 3, 3]
console.log(duplicarElementos(["a", "b"])); // ["a", "a", "b", "b"]

/*
  Ejercicio 18
  Crea una función que reciba un union type (string | number)
  y retorne un mensaje diferente según el tipo.
*/


console.log(procesarValor("hola")); // "Es un texto: HOLA"
console.log(procesarValor(10)); // "Es un número: 20"

/*
  Ejercicio 19
  Crea una función que valide un email (que contenga @ y .)
  y retorne un objeto con isValid (boolean) y message (string).
*/


console.log(validarEmail("usuario@example.com"));
// { isValid: true, message: "Email válido" }
console.log(validarEmail("usuarioexample.com"));
// { isValid: false, message: "Email inválido" }

/*
  Ejercicio 20
  Crea una función que reciba un array de objetos persona
  y retorne solo las personas mayores de edad (>=18).
*/


console.log(filtrarMayoresDeEdad(personas));
// [{ nombre: "Ana", edad: 25 }, { nombre: "María", edad: 30 }]

/*
  Ejercicio 21
  Crea una función que reciba un array de números y retorne
  un objeto con el mínimo, máximo y promedio.
*/

console.log(calcularEstadisticas([5, 10, 15, 20, 25]));
// { minimo: 5, maximo: 25, promedio: 15 }

/*
  Ejercicio 22
  Crea una función que reciba un objeto con propiedades opcionales
  y retorne el objeto con valores por defecto si faltan.
*/

console.log(aplicarConfiguracionPorDefecto({}));
// { tema: "claro", idioma: "es", notificaciones: true }
console.log(aplicarConfiguracionPorDefecto({ tema: "oscuro" }));
// { tema: "oscuro", idioma: "es", notificaciones: true }

/*
  Ejercicio 23
  Crea una función que reciba dos arrays y retorne
  un array con los elementos que están en ambos (intersección).
*/

console.log(interseccionArrays([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(interseccionArrays(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]

/*
  Ejercicio 24
  Crea una función que convierta un objeto a un array de pares [clave, valor].
*/

console.log(objetoAPares(usuario));
// [["nombre", "Ana"], ["edad", 25], ["ciudad", "Medellín"]]

/*
  Ejercicio 25
  Crea una función que reciba un array de productos y una categoría,
  y retorne solo los productos de esa categoría.
*/


console.log(filtrarPorCategoria(productosVariados, "Electrónica"));
// [{ nombre: "Laptop", ... }, { nombre: "Mouse", ... }]

/*
  Ejercicio 26
  Crea una función que reciba una fecha (Date) y retorne
  un objeto con día, mes y año por separado.
*/

console.log(desglosarFecha(new Date("2024-12-27")));
// { dia: 27, mes: 12, año: 2024 }

/*
  Ejercicio 27
  Crea una función que reciba un array de strings y retorne
  el string más largo.
*/


console.log(encontrarStringMasLargo(["hola", "mundo", "typescript", "js"]));
// "typescript"

/*
  Ejercicio 28
  Crea una función que reciba un precio y una moneda ("USD", "EUR", "COP")
  y retorne el precio formateado con símbolo.
*/


console.log(formatearPrecio(1000, "USD")); // "$1,000"
console.log(formatearPrecio(1500, "EUR")); // "€1,500"
console.log(formatearPrecio(50000, "COP")); // "COP $50,000"

/*
  Ejercicio 29
  Crea una función que reciba un array de objetos con id único
  y retorne un Map con los ids como claves.
*/

console.log(mapaItems.get(2)); // { id: 2, nombre: "Item 2" }

/*
  Ejercicio 30
  Crea una función compleja que procese un carrito de compras:
  - Recibe un array de productos con cantidad
  - Aplica descuento si el total supera cierto monto
  - Calcula el IVA
  - Retorna un objeto con el desglose completo
*/

console.log(procesarCarrito(carrito));
/*
{
  subtotal: 1330,
  descuento: 133,
  subtotalConDescuento: 1197,
  iva: 227.43,
  total: 1424.43,
  productos: [...]
}
*/