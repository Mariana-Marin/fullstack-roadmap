/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.  
 */

function getSum (numberOne, numberTwo) {

    let sum;

    if (numberOne === numberTwo) {
        sum = (numberOne+numberTwo)*3;
        
    } else { 
        sum = numberOne+numberTwo;
    }

    return sum;
}

console.log(getSum(3, 3));
console.log(getSum(2, 12));