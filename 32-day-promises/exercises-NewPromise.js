// Nivel 1: Mecánica de Fluidos (Inputs y Outputs básicos)
// El objetivo aquí es entender qué sale de resolve y reject y dónde aterriza.

// Hola Mundo Promesa: Crea una Promesa que se resuelva inmediatamente con el string "¡Hola Mundo!".
// Consúmela con un .then e imprime el mensaje.

const saludo = new Promise((resolve, reject) => {
  resolve("¡Hola Mundo!");
});

saludo.then((mensaje) => {
  console.log(mensaje);
});

// El Rechazo: Crea una Promesa que se rechace inmediatamente con el string "Algo salió mal". Consúmela con .catch e imprime el error.

// El Interruptor: Crea una variable exito = true. Dentro del new Promise, usa un if. Si exito es true, usa resolve("Todo bien"); si es false, reject("Todo mal"). Cambia la variable y prueba ambos caminos.

// Matemática Simple: Crea una Promesa que resuelva el número 10. En el .then, imprime ese número.

// Nivel 2: La Línea de Ensamblaje (Chaining / Encadenamiento)
// El objetivo es entender que el return de un .then pasa al siguiente .then.

// Transformación: Promesa que resuelve un 5.

// Primer .then: recibe el 5, retorna el doble (return numero * 2).

// Segundo .then: recibe el resultado (10) e imprímelo.

// Cadena de Strings: Promesa que resuelve "hola".

// Primer .then: retorna el string en mayúsculas.

// Segundo .then: retorna el string concatenado con "!!!".

// Tercer .then: imprime el resultado final ("HOLA!!!").

// Tipos de Datos: Promesa que resuelve el string "50".

// Primer .then: convierte el string a número y retórnalo.

// Segundo .then: verifica si es mayor a 20 (retorna true/false).

// Tercer .then: imprime el booleano.

// El Salto del Error: Crea una cadena de 3 .then. En el segundo .then, lanza un error manualmente (throw new Error("Fallo en paso 2")). Comprueba que el tercer .then se salta y cae directo al .catch.

// Nivel 3: Introduciendo el Tiempo (Asincronía Real)
// Aquí conectamos setTimeout dentro de la Promesa.

// La Espera: Crea una función esperar(ms) que retorne una Promesa. Dentro, usa setTimeout para resolver la promesa después de ms milisegundos.

// La Bomba de Tiempo: Crea una promesa que use setTimeout. Si pasan 3 segundos, debe ejecutar resolve("Boom!").

// Timeout con Cancelación (Simulada): Crea una promesa que tenga un setTimeout de 2 segundos para resolver, pero también una condición if (true) antes del timeout que haga reject("Cancelado inmediatamente"). ¿Cuál de los dos gana? (Entender que una promesa solo cambia de estado una vez).

// Validación Asíncrona: Crea una promesa que espere 1 segundo. Luego genera un número aleatorio (Math.random()). Si es mayor a 0.5, resuelve; si es menor, rechaza.

// Nivel 4: Funciones que retornan Promesas (Modularización)
// Así es como se escribe código profesional en Node.js.

// Función dividir(a, b): Crea una función que acepte a y b.

// Debe retornar una Promesa.

// Si b es 0, reject("No se puede dividir por cero").

// Si no, resolve(a / b).

// Prueba dividir(10, 2) y dividir(10, 0).

// Lectura de "Base de Datos" (Mock): Crea una función checkStock(producto).

// Usa un objeto simple db = { "lápiz": 10, "cuaderno": 0 }.

// Retorna una promesa. Si el producto existe y tiene stock > 0, resuelve "Stock disponible: X". Si es 0, rechaza "Sin stock". Si no existe, rechaza "Producto no encontrado".

// Login Simulado: Función login(user, pass).

// Espera 1 segundo.

// Si user es "admin" y pass "1234", resuelve un objeto { id: 1, rol: "admin" }.

// Si no, rechaza "Credenciales inválidas".

// Nivel 5: El Infierno de Promesas vs. La Cadena Perfecta
// Este es el nivel experto. Manejar promesas dentro de promesas.

// Promesa dentro de Promesa (El concepto clave):

// Usa la función esperar(ms) del ejercicio 9.

// Llama a esperar(1000).

// En su .then, retorna otra llamada a esperar(1000).

// En el siguiente .then, imprime "Han pasado 2 segundos".

// Objetivo: Entender que si retornas una promesa, JS espera a que termine.

// Callback Hell Refactorizado:

// Escribe 3 funciones que retornen promesas: conectarDB(), buscarUsuario(), cerrarDB().

// Encadénalas para que se ejecuten una tras otra usando .then() plano (sin anidar .then dentro de .then).

// Propagación de Datos:

// Función 1: pedirUsuario(id) -> resuelve {id: 1, nombre: "Mariana"}.

// Función 2: pedirPermisos(usuario) -> recibe el objeto usuario y resuelve {...usuario, admin: true}.

// Encadena ambas para pasar del ID al usuario con permisos.

// Promise.all (Paralelismo):

// Crea dos promesas que esperen 1 y 2 segundos respectivamente.

// Usa Promise.all([p1, p2]) para esperar a que ambas terminen e imprimir los dos resultados juntos.

// Promise.race (La carrera):

// Crea una promesa que resuelva en 2 segundos y otra en 5 segundos.

// Usa Promise.race([p1, p2]) para ver cuál gana e imprimir solo el resultado de la ganadora.
