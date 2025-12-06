// 120. Check if Point is Inside Circle
// 
// Write a JavaScript program to check if a point lies strictly inside the circle. 
// Input:
// Center of the circle (x, y)
// Radius of circle: r
// Point inside a circle (a, b)


function isPointInsideCircle(circleX, circleY, radius, pointX, pointY) {
  return  ((pointX - circleX) ** 2 + (pointY - circleY) ** 2) < radius ** 2;
}

console.log(isPointInsideCircle(0, 0, 5, 1, 1));
console.log(isPointInsideCircle(0, 0, 5, 6, 0));