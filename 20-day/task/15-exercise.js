// 90. Find kth Greatest Element in Array
//
// Write a JavaScript program to find the kth greatest element in a given array of integers.

// "kth greatest" significa el k-ésimo elemento más grande del array.

function findKthGreatest(array, kth) {
  array.sort(function (a, b) {
    return b - a;
  });

  return array[kth - 1];
}

console.log(findKthGreatest([1, 3, 4, 5, 6], 2));
console.log(findKthGreatest([10, 4, 3, 50, 23, 90], 1));
console.log(findKthGreatest([5, 2, 9, 1, 7], 1));
