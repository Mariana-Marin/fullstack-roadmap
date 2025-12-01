// 41. Return 30, 40, or 20 Based on Same Numbers

// Write a JavaScript program to check a set of three numbers; 
// if the three numbers are the same return 30; otherwise return 20; 
// and if two numbers are the same return 40.  

function checkSameNumbers (a, b, c){

    if (a === b && b === c){
        return 30;
    } else if (a === b || b === c || a === c){
        return 40;
    } else {
        return 20
    }
}

console.log(checkSameNumbers(2,2,2));
console.log(checkSameNumbers(2,3,2));
console.log(checkSameNumbers(1,2,3));