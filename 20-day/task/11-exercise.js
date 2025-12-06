// 86. Find Type of Given Angle
//
// Write a JavaScript program to find the types of a given angle.
//
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function findTypeOfAngle(angle) {
  if (angle <= 90) {
    return angle === 90 ? "Right angle" : "Acute angle";
  } else {
    return angle === 180 ? "straight angle" : "Obtuse angle";
  }
}

console.log(findTypeOfAngle(90));
console.log(findTypeOfAngle(180));
console.log(findTypeOfAngle(95));
console.log(findTypeOfAngle(80));
