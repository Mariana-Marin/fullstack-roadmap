// 108. Dot Product of Two 3D Vectors
// 
// Write a JavaScript program to create the dot products of two given 3D vectors. 
// Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

function dotProduct(vector1, vector2) {
  return vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
}

console.log(dotProduct([1, 2, 3], [4, 5, 6]));
console.log(dotProduct([0, 0, 0], [1, 2, 3]));
console.log(dotProduct([-1, -2, -3], [4, 5, 6]));