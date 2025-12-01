// 29. Check if Three Integers are in Range 50?99

// Write a JavaScript program to check whether three given integer values are 
// in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.  

function checkRange50to99(a, b, c) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange50to99(45, 55 , 100));
console.log(checkRange50to99(30, 80, 70));
console.log(checkRange50to99(99, 150, 49));