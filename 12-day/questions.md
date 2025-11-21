# PREGUNTAS DIA 12

## 1. **¿Cómo manejar propiedades con nombres complejos (con espacios o caracteres especiales)?**

> Si el nombre de una propiedad contiene espacios, guiones, o empieza con un número, la **notación de punto (`.`) no funcionará**.

>**La solución:** Debes usar la **notación de corchetes (`[]`)**, poniendo el nombre de la propiedad entre comillas como si fuera un string.



## 2. **¿Qué atajo existe si el nombre de una clave y el de la variable que le da valor son idénticos?**

>JavaScript nos ofrece un atajo fantástico llamado **"Abreviatura de Propiedades" (Property Shorthand)**.

>**El atajo:** Si la clave y la variable que contiene el valor se llaman igual, ¡puedes escribir el nombre una sola vez!



## 3. **¿Cuál es la forma más segura de verificar si una propiedad existe en un objeto?**
>Aunque podrías pensar en comprobar si `objeto.propiedad === undefined`, esto puede ser engañoso si la propiedad realmente existe pero su valor es `undefined`.
>
 **La solución definitiva:** Usa el operador **`in`**. Este operador comprueba si la **clave** existe en el objeto, sin importar qué valor tenga asociado.

## 4.**¿Qué retorna esta expresión?**
`let user = { name: "Mariana", age: 23 };`
`console.log( "age" in user );`

>**Respuesta:** La expresión retornará **`true`**.
>El operador `in` se usa para verificar si una clave (propiedad) existe dentro de un objeto.


## 5. **¿Es posible usar un bucle `for` tradicional para iterar sobre las propiedades de un objeto?**

> **Respuesta:** No, no directamente. Un bucle `for` tradicional como `for (let i = 0; i < array.length; i++)` está diseñado para estructuras ordenadas con índices numéricos, como los **Arrays**.
> **La herramienta correcta:** Para recorrer las propiedades de un objeto, debes usar el bucle especial **`for...in`**.

