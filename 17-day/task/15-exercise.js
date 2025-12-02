// 45. Check if Integer is 15, or Sum/Difference is 15

// Write a JavaScript program that checks two integer values and returns 
// true if either one is 15 or if their sum or difference is 15.  

function check15(a, b) {
    if (a === 15 || b === 15 || a + b === 15 || Math.abs(a - b) === 15) {
        return true;
    } else {
        return false;
    }
};

console.log(check15(15, 10));
console.log(check15(10, 5));
console.log(check15(20, 5));