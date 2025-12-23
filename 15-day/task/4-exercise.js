/* 4. Calculate Area of Triangle (Sides: 5, 6, 7)

Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  */

//Fórmula de Herón
//A = √[4a²b² - (a² + b² - c²)²]/4

function findTriangleArea(a, b, c) {
  const area =
    Math.sqrt(4 * a ** 2 * b ** 2 - (a ** 2 + b ** 2 - c ** 2) ** 2) / 4;

  console.log(`El área del triángulo es: ${area.toFixed(2)}`);
}

findTriangleArea(5, 6, 7);

