/*
  Ejercicio 1
  Declara variables con los siguientes tipos y asígnales un valor:
    string
    number
    boolean
*/

const nombre: string = "Mariana";
const edad: number = 23;
const mayorEdad: boolean = true;

/*  
  Ejercicio 2
  Declara una variable que solo pueda contener "admin" o "user".
*/

type rol = "admin" | "user";
const rolUsuario: rol = "admin";

/*  
  Ejercicio 3
    Declara una variable que pueda contener un string o un número.
*/

let myVar: string | number = "Mariana";
myVar = "23";

/*  
  Ejercicio 4
    Declara una tupla que contenga un string y un número.
*/

const datos: [string, number] = ["Mariana", 23];

/*
    Ejercicio 5
    Declara un enum con los días de la semana.
*/

enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo,
}

const hoy: DiaSemana = DiaSemana.Sabado;

/* 
    Ejercicio 6
    Declara una variable de tipo any y asígnale diferentes tipos de valores.
*/

let colores: any = "azul";
colores = false;
colores = 23;
colores = [];
colores = {};

/*
    Ejercicio 7
    Declara una variable de tipo unknown y asígnale diferentes tipos de valores.
*/

let info: unknown = "azul";
info = false;
info = 23;
info = [1, 3, 4, 5, 0];
info = { nombre: "Mariana", edad: 23 };

/*
    Ejercicio 8
    Crea un objeto que represente un libro con las siguientes propiedades:
    - titulo (string)
    - autor (string)
    - paginas (number)
    - disponible (boolean)
*/

interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

const libro: Libro = {
  titulo: "Cien años de soledad",
  autor: "Gabo",
  paginas: 470,
  disponible: false,
};

/*
    Ejercicio 9
    Crea un objeto persona con las siguientes propiedades:
    - nombre (string)
    - edad (number)
    - email (string)
    - telefono (string, opcional)
*/

const persona: {
  nombre: string;
  edad: number;
  email: string;
  telefono?: string;
} = {
  nombre: "Mariana",
  edad: 23,
  email: "m@gmail.com",
  telefono: "3022776263",
};

/*
    Ejercicio 10
    Crea un array de números y otro array de strings.
*/

const numeros: number[] = [1, 2, 3, 4, 5];
const letras: string[] = ["a", "b"];
const color: Array<string> = ["azul", "amarillo"];

/*
    Ejercicio 11
    Crea un array que contenga objetos de tipo "Producto" con las propiedades:
    - id (number)
    - nombre (string)
    - precio (number)
*/

const productos: Array<{ id: number; nombre: string; precio: number }> = [
  {
    id: 1,
    nombre: "BomBom",
    precio: 2000,
  },
  {
    id: 2,
    nombre: "ChocoRamo",
    precio: 3000,
  },
];

/*
    Ejercicio 12
    Crea un array mixto que pueda contener strings y números.
*/

const datosMixtos: Array<string | number> = ["Luis", 23, "Mariana", 40];

/*
    Ejercicio 13
    Crea una tupla que represente las coordenadas GPS (latitud, longitud)
    donde ambos valores son números.
*/

const coordenadas: [number, number] = [6.2442, -75.5812];

/*
    Ejercicio 14
    Crea una tupla que contenga información de un empleado:
    - nombre (string)
    - edad (number)
    - activo (boolean)
*/

const infoEmpleado: [string, number, boolean] = ["Mariana", 23, true];

/*
    Ejercicio 15
    Crea un enum para los estados de un pedido:
    "Pendiente", "EnProceso", "Enviado", "Entregado", "Cancelado"
*/

enum estadosPedido {
  PENDIENTE = "Pendiente",
  ENPROCESO = "EnProceso",
  ENVIADO = "Enviado",
  ENTREGADO = "Entregado",
  CANCELADO = "Cancelado",
}

const estado: estadosPedido = estadosPedido.CANCELADO;

/*
    Ejercicio 16
    Crea un type para representar los niveles de prioridad:
    "baja", "media", "alta", "urgente"
*/

type niveles = "baja" | "media" | "alta" | "urgente";

const nivelesPrioridad: niveles = "media";

/*
    Ejercicio 17
    Crea un objeto "coche" con las siguientes propiedades:
    - marca (string)
    - modelo (string)
    - año (number)
    - color (string)
    - electrico (boolean)
    - precio (number, opcional)
*/

interface Coche {
  marca: string;
  modelo: string;
  año: number;
  color: string;
  electrico: boolean;
  precio?: number;
}

const coche: Coche = {
  marca: "Suzuki",
  modelo: "swith",
  año: 2020,
  color: "negro",
  electrico: true,
};

/*
    Ejercicio 18
    Crea un objeto "estudiante" con propiedades anidadas:
    - nombre (string)
    - edad (number)
    - direccion (objeto con: calle, ciudad, codigoPostal)
    - calificaciones (array de números)
*/

interface Estudiante {
  nombre: string;
  edad: number;
  direccion: {
    calle: number;
    ciudad: string;
    codigoPostal: string;
  };
  calificaciones: Array<number>;
}

const estudiante: Estudiante = {
  nombre: "Mariana",
  edad: 23,
  direccion: {
    calle: 90,
    ciudad: "Medellin",
    codigoPostal: "10001",
  },
  calificaciones: [4, 5, 3, 4, 5, 2],
};

/*
    Ejercicio 19
    Crea una variable que pueda ser:
    - un string
    - un número
    - null
*/

let resultado: string | number | null = "exito";
resultado = 4.5;
resultado = null;

/*
    Ejercicio 20
    Crea un array de tuplas donde cada tupla contenga:
    - nombre del producto (string)
    - cantidad (number)
    - precio unitario (number)
*/

const producto: Array<[string, number, number]> = [
  ["cepillo", 12, 10000],
  ["camisa", 13, 40000],
];

/*
    Ejercicio 21
    Crea un objeto "empresa" con:
    - nombre (string)
    - empleados (array de objetos con: id, nombre, puesto)
    - activa (boolean)
*/

const empresa: {
  nombre: string;
  empleados: Array<{ id: string; nombre: string; puesto: string }>;
  activa: boolean;
} = {
  nombre: "Globant",
  empleados: [{ id: "ID1001", nombre: "Mariana", puesto: "Practicante" }],
  activa: true,
};

/*
    Ejercicio 22
    Crea un type para códigos de error que solo puedan ser:
    400, 401, 404, 500, 503
*/

type codigos = 400 | 401 | 404 | 503;

const codigo: codigos = 400;

/*
    Ejercicio 23
    Crea un objeto "configuracion" con propiedades readonly:
    - apiKey (string)
    - baseUrl (string)
    - timeout (number)
*/

const configuracion: {
  readonly apiKey: string;
  readonly baseUrl: string;
  readonly timeout: number;
} = {
  apiKey: "202020",
  baseUrl: "2020",
  timeout: 3003,
};

/*
    Ejercicio 24
    Crea una matriz (array bidimensional) de números de 3x3.
*/

const matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/*
    Ejercicio 25
    Crea un objeto "restaurante" con:
    - nombre (string)
    - tipo (solo puede ser: "italiano", "mexicano", "japones", "colombiano")
    - menu (array de objetos con: plato, precio, vegetariano)
    - abierto (boolean)
*/

const restaurante :  


/*
    Ejercicio 26
    Crea un array que contenga diferentes tipos de datos usando union types:
    - puede contener strings, números, o booleanos
*/

/*
    Ejercicio 27
    Crea un enum para las tallas de ropa:
    XS, S, M, L, XL, XXL
*/

/*
    Ejercicio 28
    Crea un objeto "usuario" con:
    - id (number o string)
    - nombre (string)
    - edad (number)
    - hobbies (array de strings, opcional)
    - contacto (objeto con: email y telefono opcional)
*/

/*
    Ejercicio 29
    Crea un array de objetos "tarea" donde cada tarea tenga:
    - id (number)
    - titulo (string)
    - completada (boolean)
    - prioridad ("baja" | "media" | "alta")
*/

/*
    Ejercicio 30
    Crea un objeto complejo "ecommerce" que represente un carrito de compras:
    - usuario (objeto con: id, nombre, email)
    - productos (array de objetos con: id, nombre, precio, cantidad)
    - total (number)
    - fecha (string)
    - estado (solo puede ser: "pendiente", "procesando", "completado", "cancelado")
*/
