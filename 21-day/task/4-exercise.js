// 94. Find Most Frequent Number in Array
// 
// Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

function findMostFrequentNumber(array) {
  let maxCount = 0;
  let mostFrequentNumber = array[0];

  for (let i = 0; i < array.length; i++) {
    let count = 0;

    for (let index = 0; index < array.length; index++) {
      if (array[i] === array[index]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      mostFrequentNumber = array[i];
    }
  }
  return mostFrequentNumber;
}

console.log(findMostFrequentNumber([1, 2, 3, 2, 4, 2, 5]));
console.log(findMostFrequentNumber([5, 3, 9, 1, 3, 3, 6]));
console.log(findMostFrequentNumber([10, 4, 1, 7, 2, 4, 4]));
