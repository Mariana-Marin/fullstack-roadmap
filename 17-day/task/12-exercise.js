// 42. Check Numbers in Strict or Soft Increasing Mode

// Write a JavaScript program to check whether three given numbers are increasing 
// in strict or in soft mode.  
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function checkIncreasingNumbers(a, b, c) {
    if (a < b && b < c) {
        return "Strict mode";
    } else if (b < c) {
        return "Soft mode";
    } else {
        return "Undefined mode";
    }
}
console.log(checkIncreasingNumbers(10, 15, 31));
console.log(checkIncreasingNumbers(24, 22, 31));
console.log(checkIncreasingNumbers(50, 21, 15));