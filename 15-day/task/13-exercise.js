/*13. Create Variable with User-Defined Name

Write a JavaScript exercise to create a variable using a user-defined name.  */

let nameDefinedForUser = "name";
let valueDefinedForUser = "Mariana";

function createVariableWithNameDefinedForUser(nameDefinedForUser, value) {
    window[nameDefinedForUser] = value;
}

createVariableWithNameDefinedForUser(nameDefinedForUser, valueDefinedForUser);
console.log(window.name);


