// 74. Set All Elements to Largest of First/Last in Array
// 
// Write a JavaScript program to find the largest value 
// between the first and last elements and set all the 
// other elements to that value. Display the updated array.


function setValueElements (array){

  const largestValue = Math.max(array[0], array.at(-1));
  return array.map(() => largestValue);

}

console.log(setValueElements([2,5,7]))