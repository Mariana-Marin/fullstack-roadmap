// 106. Divide Integers Until Result is Integer
// 
// Write a JavaScript program to divide an integer by another integer as long as the 
// result is an integer and return the result. 

function divideUntilInteger(num1, num2) {
  let result = num1;
    while (result % num2 === 0) {   
        result = result / num2;
    }

    return result;
}
console.log(divideUntilInteger(48, 2));
console.log(divideUntilInteger(15, 3));