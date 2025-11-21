// el siguiente objeto contiene las dimensiones de alto y ancho de un rectangulo, calcula el area del rectangulo y guardala en una propiedad llamada area
// imprime unicamente el area por consola
// ten en cuenta que el area de un rectangulo se calcula multiplicando el alto por el ancho

let rectangle = {
  height: 10,
  width: 5
};


let user = { name: "John", age: 30 };

console.log( "age" in user );    // true -> La propiedad "age" existe.
console.log( "blabla" in user ); // false -> La propiedad "blabla" no existe.

for (let key in user) {
    console.log("Clave:", key); 
    console.log("Valor:", user[key]); 
}

