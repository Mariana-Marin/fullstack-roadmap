// 119. Check if Digits in Integer Are Increasing
// 
// Write a JavaScript program to check if a given integer has an increasing digit sequence. 

function hasIncreasingDigits(number) {
  const numStr = number.toString();
    for (let index = 0; index < numStr.length - 1; index++) {
        if (numStr[index] >= numStr[index + 1]) {
            return false;
        }
    }
    return true;
}
console.log(hasIncreasingDigits(1234)); 
console.log(hasIncreasingDigits(1223)); 