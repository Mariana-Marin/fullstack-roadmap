// 89. Replace $ in Expression to Make True
//
// Write a JavaScript program to check whether it is possible
// to replace $ in a given expression x $ y = z with one of the
// four signs +, -, * or / to obtain a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with
// a multiple operator (*) to obtain x * y = z

function checkExpression(x, y, z) {
  return x + y === z || x - y === z || x * y === z || x / y === z;
}

console.log(checkExpression(10, 10, 20));
console.log(checkExpression(10, 10, 0));
console.log(checkExpression(1, 10, 10));
console.log(checkExpression(1, 1, 1));
