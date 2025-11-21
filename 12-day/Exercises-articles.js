// ejercicio 1

let user = {};
user.name = "jhon";
user.surname = "Smith";
user.name = "pete";
delete user.name;

// ejercicio 2 check for emptiness

let schedule = {};

console.log ( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log ( isEmpty(schedule) ); // false