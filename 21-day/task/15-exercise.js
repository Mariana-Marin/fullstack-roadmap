// 105. Replace Number with Digit Sum Until Single Digit
// 
// Write a JavaScript program to find the number of times 
// to replace a given number with the sum of its digits. 
// This is until it converts to a single-digit number. 

function replaceNumberWithDigitSum(num) {
  let count = 0;
  
  while (num >= 10) {
    let sum = 0;
    let numStr = num.toString();
    
    for (let i = 0; i < numStr.length; i++) {
      sum += Number(numStr[i]);
    }
    
    num = sum;
    count++;
  }
  
  return count;
}
console.log(replaceNumberWithDigitSum(38)); 
console.log(replaceNumberWithDigitSum(1234));