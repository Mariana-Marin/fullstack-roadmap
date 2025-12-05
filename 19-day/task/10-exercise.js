// 70. Rotate Elements Left in Array (Length 3)
//
// Write a JavaScript program to rotate the elements left in a given array of integers of length 3.

function rotateElements(array) {
  array.push(array[0]);
  array.shift();
  return array;
}

console.log(rotateElements([0, 4, 5, 6 ,7]));

/*function rotateElements (array){
    return [array[1], array[2], array[0]]
}
console.log(rotateElements([3,4,5]))*/
