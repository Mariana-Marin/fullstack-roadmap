// 82. Add Two Integers Without Carrying
// 
// Write a JavaScript program to add two positive integers without carrying.  


function addWithoutCarrying(num1, num2) {
  const str1 = num1.toString().split('').reverse();
  const str2 = num2.toString().split('').reverse();
  const maxLength = Math.max(str1.length, str2.length);
  let result = '';  
    for (let i = 0; i < maxLength; i++) {
        const digit1 = i < str1.length ? Number(str1[i]) : 0;
        const digit2 = i < str2.length ? Number(str2[i]) : 0;
        const sum = (digit1 + digit2) % 10;
        result = sum.toString() + result;
    }   
    return Number(result);
}

console.log(addWithoutCarrying(456, 1734));
console.log(addWithoutCarrying(999, 999));
