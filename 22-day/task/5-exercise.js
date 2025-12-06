// 110. Count Evens Before First Occurrence of Number
// 
// Write a JavaScript program to find the number of even values in sequence 
// before the first occurrence of a given number. 

function countEvensBeforeNumber(array, number) {
  let count = 0;
    for (const element of array) {
        if (element === number) {
            return count;
        }
        if (element % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvensBeforeNumber([1, 2, 3, 4, 5, 6], 5));
console.log(countEvensBeforeNumber([2, 4, 6, 8, 10], 8));
console.log(countEvensBeforeNumber([1, 3, 5, 7], 5));