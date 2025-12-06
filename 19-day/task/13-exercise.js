// 73. Reverse Elements of Array (Length 3)
//
// Write a JavaScript program to reverse the
// elements of a given array of integers of length 3.

function reverseElements(array) {
  array.splice(0, 3, array.at(-1), array.at(-2), array.at(0));

  return array;
  //return array.reverse();
}

console.log(reverseElements([5, 4, 3]));
