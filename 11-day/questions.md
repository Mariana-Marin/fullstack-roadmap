# PREGUNTAS DIA 11

1. ¿Cuáles son los dos únicos tipos de datos en JavaScript que se consideran "nullish"?
    
2. ¿Qué cadena de texto devuelve el operador `typeof` cuando se aplica al valor `null`?
    
3. De las siguientes comparaciones, ¿cuál dará como resultado `false` y por qué?
    
    - `null == undefined;`
        
    - `null === undefined;`
    
4. El valor numérico `-1`, ¿es considerado un valor "truthy" o "falsy" en un contexto booleano?

5. En el siguiente código, ¿se imprimirá el mensaje "Me ejecuto?" en la consola? ¿Por qué?
`if (new Boolean(false)) {
` console.log("Me ejecuto?");`
`}`

6. ¿Cuál será el resultado de las siguientes dos operaciones? ¿Son diferentes?
`// Operación 1`
`let n1 = 2 + null;`
`console.log(n1);`

`// Operación 2`
`let n2 = 2 + undefined;`
`console.log(n2);`