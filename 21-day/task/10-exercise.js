// 100. Check if Arrays Share at Least One Common Element
// 
// Write a JavaScript program to check if there is at least 
// one element in two given sorted arrays of integers. 

function haveCommonElement(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      return true;
    }
  }
  return false;
}
console.log(haveCommonElement([1, 2, 3], [3, 4, 5]));
console.log(haveCommonElement([1, 2, 3], [4, 5, 6]));