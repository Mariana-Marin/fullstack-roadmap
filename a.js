function count3(object) {
    return Object.keys(object).length
}

let persona = {
    name: "pepe",
    edad: 10
}

persona.saludar = function() {
    console.log("hola")
}

let a = persona.saludar()
console.log(a)

console.log(count3(persona))