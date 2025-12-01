// 20. Check if One Integer is Positive and One is Negative

// Write a JavaScript program to check two given integers whether one is 
// positive and another one is negative.

function checkSign(a, b) {

    // Second form - one line solution
    //if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        //return true;
    
    if (a < 0 && b > 0) {
        return true;
    } else if (a > 0 && b < 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSign(5, -3));
console.log(checkSign(-4, 6));
console.log(checkSign(-2, -8));