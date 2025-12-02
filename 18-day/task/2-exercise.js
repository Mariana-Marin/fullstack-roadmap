// 47. Check if Integer is in Range 40?10,000
//
// Write a JavaScript program to check whether a given number exists in the range 40..10000.
// For example 40 presents in 40 and 4000

function checkRange40to10000(number) {
    return number >= 40 && number <= 10000;
}

console.log(checkRange40to10000(25));
console.log(checkRange40to10000(40));
console.log(checkRange40to10000(4000));
console.log(checkRange40to10000(10003));