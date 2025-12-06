// 75. Create Array with Middle Elements from Two Arrays
//
// Write a JavaScript program to create an array
// taking the middle elements of the two arrays
// of integer and each length 3.

function takeMiddleElement(array1, array2) {
  const newArr = [];
  newArr.push(array1[1]);
  newArr.push(array2[1]);

  //newArr.push(array1[1], array2[1]);

  return newArr;

  //return [array1[1], array2[1]];
}

console.log(takeMiddleElement([1, 2, 3], [1, 5, 6]));
