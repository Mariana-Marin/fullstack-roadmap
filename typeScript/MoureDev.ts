// comentario

/* comentario de
varias lineas */

console.log("Hello World"); // imprime un mensaje en consola

// variables y constantes
var myVar = "Hello"; // variable (no recomendable en TS)
let age = 30;
//const name = "Mariana";
age = 31;
// name = "Carlos"; Error: no se puede reasignar una constante

// tipos de datos
const isDeveloper: boolean = true; // boolean
const pi: number = 3.14; // numero
const greeting: string = "Hello, TypeScript!"; // string
const nullValue: null = null; // null
const undefinedValue: undefined = undefined; // undefined

// estructuras de datos
const languages: string[] = ["JavaScript", "TypeScript", "Python"]; // array de strings
const languages2 : Array<string> = ["Java", "C#", "Ruby"]; // otra sintaxis para array de strings
const mixedArray: (string | number)[] = ["Hello", 42, "World", 100]; // array mixto
const emptyArray: any[] = []; // array vacio
const nestedArray: number[][] = [[1, 2], [3, 4]]; // array anidado
const objectArray: Array<{ id: number; name: string }> = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
]; // array de objetos
const scores: Array<number> = [95, 85, 76]; // array de numeros
const person: { name: string; age: number } = { name: "Mariana", age: 31 }; // objeto
const user: { id: string; email: string } = {
  id: "usr_001",
  email: "mariana@example.com",
}; // objeto con propiedades
const tuple: [string, number] = ["Mariana", 31]; // tupla
const unionType: string | number = "Puede ser string o numero"; // union

// enum: representa un conjunto de valores constantes (enumerados)
const enum Color { Red, Green, Blue } // enum
const favoriteColor: Color = Color.Green; // uso de enum

// any: puede contener cualquier tipo de dato
const anything: any = "Puede ser cualquier cosa"; // any

// never: representa un valor que nunca ocurre (o una funcion que nunca retorna)
const errorMessage: never = throwError("This is an error message"); // never

function throwError(message: string): never {
  throw new Error(message);
}

//unknown: representa un valor desconocido
let unknownValue: unknown = "Puede ser cualquier cosa"; // unknown
unknownValue = 42; // puede ser reasignado a otro tipo

//undefined: representa una variable que no ha sido asignada
let undefinedVar: undefined = undefined;

// controles de flujo (if, switch, for, while)

// if-else
if (age > 18) {
  console.log("Eres mayor de edad.");
} else if (age === 18) {
  console.log("Tienes 18 años.");
} else if (age < 18) {
  console.log("Eres menor de edad.");
}

// switch
const day: number = 3;
switch (day) {
  case 1:
    console.log("Lunes");   
    break;
  case 2:
    console.log("Martes");
    break;
    case 3:
    console.log("Miércoles");
    break;
}

// for
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

// while
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// funciones: sirven para encapsular bloques de codigo reutilizables

function greet(userName: string): string {
  return `Hello, ${userName}!`;
}

// void: representa la ausencia de un valor (usado en funciones que no retornan nada)
function logMessage(message: string): void {
  console.log(message);
}
