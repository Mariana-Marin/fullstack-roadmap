// write a js function that returns all the properties names of an Object

const person = {
    name: "Mariana",
    age : 23,
    "num of children": 1, 
}

function propertiesNamesOfObject (object) {

    return Object.keys(object);
}

console.table (propertiesNamesOfObject(person));