// 93. Find Max Difference Among All Pairs in Array
// 
// Write a JavaScript program to find the maximum difference 
// among all possible pairs of a given array of integers. 

function maxDifferenceAmongAllPairs(array) {
  let maxDiff = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let index = i + 1; index < array.length; index++) {
            let currentDiff = Math.abs(array[i] - array[index]);
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }
    }
    return maxDiff;
}
console.log(maxDifferenceAmongAllPairs([1, 2, 3, 8, 5]));
console.log(maxDifferenceAmongAllPairs([10, 4, 1, 7, 2]));
console.log(maxDifferenceAmongAllPairs([5, 3, 9, 1, 6]));