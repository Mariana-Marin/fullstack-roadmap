// 91. Find Max Sum of k Consecutive Numbers in Array
// 
// Write a JavaScript program to find the maximum possible sum of some of its k 
// consecutive numbers (numbers that follow each other in order) in a given array of positive integers. 

function findMaxSumOfKConsecutiveNumbers(array, k) {
  let maxSum = 0;
    for (let i = 0; i <= array.length - k; i++) {
        let currentSum = 0;
        for (let index = i; index < i + k; index++) {
            currentSum += array[index];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }
    return maxSum;
}
console.log(findMaxSumOfKConsecutiveNumbers([1, 2, 3, 4, 5], 2)); 
console.log(findMaxSumOfKConsecutiveNumbers([10, 20, 30, 40, 50], 3)); 
console.log(findMaxSumOfKConsecutiveNumbers([5, 1, 3, 7, 2], 4)); 