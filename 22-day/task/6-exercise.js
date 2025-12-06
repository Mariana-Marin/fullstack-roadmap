// 111. Find Unique Number Among Three
// 
// Write a JavaScript program to check a number from three given numbers where 
// two numbers are equal. Find the third one. 

function findUniqueNumber(num1, num2, num3) {
  if (num1 === num2) {
    return num3;
  } else if (num1 === num3) {
    return num2;
  } else {
    return num1;
  }
}
console.log(findUniqueNumber(5, 5, 10));
console.log(findUniqueNumber(20, 15, 20));
console.log(findUniqueNumber(30, 40, 40));