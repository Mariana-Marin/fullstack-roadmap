// 44. Evaluate if Integer is =20 and Less Than Another

// Write a JavaScript program that evaluates three given integers to determine 
// if any one of them is greater than or equal to 20 and less than at least one of the other two.  

function evaluateIntegers(a, b, c) {
    if ((a >= 20 && (a < b || a < c)) || 
        (b >= 20 && (b < a || b < c)) || 
        (c >= 20 && (c < a || c < b))) {
        return true;
    } else {
        return false;
    }
};

console.log(evaluateIntegers(23, 45, 10));
console.log(evaluateIntegers(23, 23, 10));
console.log(evaluateIntegers(21, 66, 75));