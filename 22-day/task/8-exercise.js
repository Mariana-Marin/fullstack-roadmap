// 113. Sum n + n/2 + n/4 + ...
// 
// Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integers. 

function sumSeries(n) {
  let sum = 0;
    while (n >= 1) {
        sum += n;
        n = Math.floor(n / 2);
    }
    return sum;
}
console.log(sumSeries(10));
console.log(sumSeries(25));
console.log(sumSeries(50));