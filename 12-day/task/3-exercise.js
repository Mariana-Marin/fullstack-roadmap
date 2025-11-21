/**
 *  write a js function that receives an object and two strings as parameters
 *  the function should add a property named as the second parameter and 
 *  the value of that property should be the third parameter.
 */

const person = {
    name: "Mariana",
    age : 23,
    "num of children": 1, 
}

function addNewParameter (object, nameParameter, valueParameter) {

    object[nameParameter] = valueParameter;
    return object
}

console.log (addNewParameter(person, "neighborhood", "Castilla"));