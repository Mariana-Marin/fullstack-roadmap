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


// Ejercicio 4: Eliminar elementos
// Objetivo: Practicar delete().
// Dado el Set: const numeros = new Set([10, 20, 30, 40, 50])
// Elimina los números 20 y 60 (que no existe). Imprime el resultado de cada operación de eliminación y el Set final.

// Ejercicio 5: Iterar con forEach
// Objetivo: Recorrer un Set con forEach().
// Dado el Set: const ciudades = new Set(["Medellín", "Bogotá", "Cali", "Cartagena"])
// Usa forEach para imprimir cada ciudad con el formato: "Ciudad: [nombre]"

// Ejercicio 6: Convertir Set a Array
// Objetivo: Dominar la conversión Set → Array.
// Dado el Set: const letras = new Set(["a", "b", "c", "d"])
// Convierte el Set a un array usando el operador spread (...) y luego:

// Ordénalo alfabéticamente al revés
// Imprime el resultado


// Ejercicio 7: Limpiar un Set
// Objetivo: Usar clear().
// Crea un Set con 5 países de tu elección. Imprime su tamaño, luego usa clear() para vaciarlo. Imprime el tamaño nuevamente.

// Ejercicio 8: Eliminar duplicados de un array
// Objetivo: Caso de uso práctico básico.
// Dado el array: const edades = [25, 30, 25, 40, 30, 35, 25, 40]
// Usa un Set para eliminar los duplicados y devuelve un nuevo array sin repeticiones.

// <mark style="background: #ABF7F7A6;">NIVEL 2: OPERACIONES BÁSICAS (Ejercicios 9-16)</mark>
// Ejercicio 9: Set desde un string
// Objetivo: Crear Sets desde diferentes fuentes.
// Dado el string: "javascript"
// Crea un Set con todas las letras únicas del string. Imprime cuántas letras únicas tiene.

// Ejercicio 10: Filtrar usuarios únicos
// Objetivo: Aplicar Sets a datos del mundo real.
// Dado el array de usuarios que visitaron tu sitio:
// javascriptconst visitas = ["juan", "maria", "juan", "pedro", "maria", "juan", "ana"]
// Crea una función contarUsuariosUnicos(visitas) que devuelva el número de usuarios únicos usando Sets.

// Ejercicio 11: Comparar Sets con has()
// Objetivo: Verificar elementos múltiples.
// Dados dos Sets:
// javascriptconst setA = new Set([1, 2, 3, 4, 5]);
// const setB = new Set([3, 5, 7]);
// Crea una función que verifique si todos los elementos de setB están en setA. Devuelve true o false.

// Ejercicio 12: Actualizar un Set
// Objetivo: Agregar múltiples elementos.
// Dado un Set inicial: const tecnologias = new Set(["HTML", "CSS"])
// Agrega las siguientes tecnologías: "JavaScript", "React", "Node.js", "HTML" (duplicado)
// Imprime el Set final.

// Ejercicio 13: Set de objetos simples
// Objetivo: Entender que Sets comparan referencias.
// Crea un Set y agrega estos números:
// javascriptconst nums = new Set();
// nums.add(1);
// nums.add(1);
// nums.add("1");
// Imprime el Set y explica por qué tiene el tamaño que tiene.

// Ejercicio 14: Convertir valores a Set y viceversa
// Objetivo: Practicar conversiones bidireccionales.
// Dado el array: const datos = [1, 2, 2, 3, 4, 4, 5, 5, 5]

// Conviértelo a Set
// Convierte el Set nuevamente a array
// Calcula la suma de todos los números únicos


// Ejercicio 15: Encontrar el primer elemento
// Objetivo: Acceder a elementos sin índice.
// Dado un Set cualquiera, crea una función primerElemento(set) que devuelva el primer elemento del Set (usa el operador spread o iteradores).

// Ejercicio 16: Set como registro de eventos
// Objetivo: Caso de uso: tracking.
// Simula un sistema donde guardas los IDs de usuarios que dieron "like" a una publicación:
// javascriptconst likes = new Set();
// Crea funciones:

// darLike(userId) - agrega el like
// quitarLike(userId) - elimina el like
// tieneLike(userId) - verifica si dio like
// contarLikes() - devuelve el total de likes


// <mark style="background: #ABF7F7A6;">NIVEL 3: OPERACIONES ENTRE SETS (Ejercicios 17-23)</mark>
// Ejercicio 17: Unión de Sets
// Objetivo: Usar union().
// Dados dos Sets:
// javascriptconst grupoA = new Set(["Ana", "Luis", "Carlos"]);
// const grupoB = new Set(["María", "Luis", "Pedro"]);
// Usa union() para crear un Set con todos los estudiantes de ambos grupos.

// Ejercicio 18: Intersección de Sets
// Objetivo: Usar intersection().
// Dados dos Sets de habilidades:
// javascriptconst empleado1 = new Set(["JavaScript", "Python", "SQL", "React"]);
// const empleado2 = new Set(["Python", "Java", "SQL", "MongoDB"]);
// Encuentra las habilidades comunes entre ambos empleados usando intersection().

// Ejercicio 19: Diferencia de Sets
// Objetivo: Usar difference().
// Dados dos Sets:
// javascriptconst productosDisponibles = new Set(["laptop", "mouse", "teclado", "monitor"]);
// const productosVendidos = new Set(["mouse", "teclado"]);
// Encuentra qué productos aún están disponibles (no se han vendido) usando difference().

// Ejercicio 20: Diferencia simétrica
// Objetivo: Usar symmetricDifference().
// Dados dos Sets:
// javascriptconst favoritosJuan = new Set(["pizza", "hamburguesa", "tacos"]);
// const favoritosMaria = new Set(["sushi", "pizza", "pasta"]);
// Encuentra las comidas que solo le gustan a uno de los dos (no a ambos) usando symmetricDifference().

// Ejercicio 21: Verificar subconjunto
// Objetivo: Usar isSubsetOf().
// Dados dos Sets:
// javascriptconst permisosUsuario = new Set(["leer", "escribir"]);
// const permisosRequeridos = new Set(["leer", "escribir", "eliminar", "admin"]);
// Verifica si los permisos del usuario son un subconjunto de los permisos requeridos usando isSubsetOf().

// Ejercicio 22: Verificar superconjunto
// Objetivo: Usar isSupersetOf().
// Dados dos Sets:
// javascriptconst temasEstudiados = new Set(["variables", "funciones", "arrays", "objetos", "sets"]);
// const temasExamen = new Set(["variables", "funciones", "arrays"]);
// Verifica si los temas estudiados cubren todos los temas del examen usando isSupersetOf().

// Ejercicio 23: Conjuntos disjuntos
// Objetivo: Usar isDisjointFrom().
// Dados dos Sets:
// javascriptconst alergiasJuan = new Set(["maní", "mariscos", "lácteos"]);
// const ingredientesReceta = new Set(["harina", "huevos", "azúcar", "mantequilla"]);
// Verifica si Juan puede comer la receta (sus alergias no deben tener elementos en común con los ingredientes) usando isDisjointFrom().

// <mark style="background: #ABF7F7A6;">NIVEL 4: CASOS AVANZADOS (Ejercicios 24-30)</mark>
// Ejercicio 24: Sistema de votación
// Objetivo: Combinar Sets con lógica de negocio.
// Crea un sistema de votación donde:

// Los usuarios solo pueden votar una vez por opción
// Estructura: Map donde la clave es la opción y el valor es un Set de IDs de usuarios

// Implementa:

// votar(usuario, opcion) - registra el voto
// obtenerVotos(opcion) - devuelve la cantidad de votos
// haVotado(usuario, opcion) - verifica si ya votó

// javascript// Ejemplo de uso:
// votar("user123", "opcionA");
// votar("user456", "opcionA");
// votar("user123", "opcionA"); // No debe contar (ya votó)

// Ejercicio 25: Análisis de asistencia
// Objetivo: Trabajar con múltiples Sets.
// Tienes la asistencia de 3 días de clase:
// javascriptconst lunes = new Set(["Ana", "Juan", "Pedro", "María"]);
// const miercoles = new Set(["Juan", "María", "Carlos"]);
// const viernes = new Set(["Ana", "María", "Pedro", "Carlos"]);
// Calcula:

// Estudiantes que asistieron los 3 días (intersección triple)
// Estudiantes que faltaron al menos un día
// Estudiantes que solo asistieron un día


// Ejercicio 26: Deduplicar array de objetos
// Objetivo: Usar Sets con estructuras complejas.
// Dado un array de usuarios:
// javascriptconst usuarios = [
//   { id: 1, nombre: "Ana" },
//   { id: 2, nombre: "Juan" },
//   { id: 1, nombre: "Ana" }, // duplicado
//   { id: 3, nombre: "María" },
//   { id: 2, nombre: "Juan" }  // duplicado
// ];
// Crea una función que devuelva un array sin usuarios duplicados (considera duplicados los que tienen el mismo id).
// Pista: Usa un Set para guardar IDs ya vistos.

// Ejercicio 27: Palabras únicas en un texto
// Objetivo: Procesamiento de texto con Sets.
// Dado un texto:
// javascriptconst texto = "JavaScript es genial y JavaScript es poderoso. JavaScript es muy usado.";
// Crea una función que:

// Convierta el texto a minúsculas
// Elimine puntuación
// Separe en palabras
// Devuelva un Set con las palabras únicas
// Devuelva cuántas palabras únicas hay


// Ejercicio 28: Tags de artículos
// Objetivo: Sistema de etiquetas.
// Tienes varios artículos con tags:
// javascriptconst articulos = [
//   { id: 1, tags: ["javascript", "web", "frontend"] },
//   { id: 2, tags: ["python", "backend", "api"] },
//   { id: 3, tags: ["javascript", "react", "frontend"] },
//   { id: 4, tags: ["python", "django", "backend"] }
// ];
// Crea funciones:

// obtenerTodosLosTags() - devuelve un Set con todos los tags únicos
// buscarPorTag(tag) - devuelve los artículos que tienen ese tag
// tagsComunes(id1, id2) - devuelve tags comunes entre dos artículos


// Ejercicio 29: Validador de permisos avanzado
// Objetivo: Sistema de autorización complejo.
// Tienes roles y permisos:
// javascriptconst roles = new Map([
//   ["admin", new Set(["crear", "leer", "editar", "eliminar", "publicar"])],
//   ["editor", new Set(["crear", "leer", "editar", "publicar"])],
//   ["viewer", new Set(["leer"])]
// ]);
// Crea funciones:

// tienePermiso(rol, permiso) - verifica si un rol tiene un permiso
// permisosAdicionales(rol1, rol2) - devuelve permisos que tiene rol2 pero no rol1
// puedeHacerTodo(rol, acciones) - verifica si el rol puede hacer todas las acciones del array


// Ejercicio 30: Análisis de productos en carritos
// Objetivo: Análisis de datos complejo.
// Tienes datos de carritos de compra:
// javascriptconst carritos = [
//   { usuario: "user1", productos: new Set(["laptop", "mouse", "teclado"]) },
//   { usuario: "user2", productos: new Set(["laptop", "monitor"]) },
//   { usuario: "user3", productos: new Set(["mouse", "teclado", "webcam"]) },
//   { usuario: "user4", productos: new Set(["laptop", "mouse"]) }
// ];
// Implementa:

// productosPopulares() - devuelve Set con productos que están en al menos 2 carritos
// recomendarProducto(usuario) - basándote en lo que otros compraron, recomienda productos que no tiene
// usuariosSimilares(usuario) - encuentra usuarios con al menos 2 productos en común

// Desafío extra: Crea una función que sugiera combos de productos frecuentemente comprados juntos.