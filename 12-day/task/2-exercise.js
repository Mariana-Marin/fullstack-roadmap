/**
 *  write a js function that receives an object and a string as parameters
 *  the function should remove the property that has the name of the string parameter
 *  from the object and return it.
 */


const person = {
    name: "Mariana",
    age : 23,
    "num of children": 1, 
}

function removePropertyOfObject (object, namePropertyToRemove) {

    delete object[namePropertyToRemove];
    return object

}

console.log (removePropertyOfObject(person, "age"));