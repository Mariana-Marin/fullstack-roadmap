// 80. Swap First and Last Elements in Array
//
// Write a JavaScript program to swap the first and last elements of
// a given array of integers. The array length should be at least 1.

function swapElements(array) {
  return [array.at(-1), array.slice(1, -1), array[0]].flat();
  //return [array.at(-1), ...array.slice(1, -1), array[0]].flat();
}

console.log(swapElements([1, 3, 4]));
console.log(swapElements([4, 3, 1]));
