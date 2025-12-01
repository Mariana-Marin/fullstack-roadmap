// 28. Check if Two Integers are in Range 50?99

// Write a JavaScript program to check whether two given integer values are in 
// the range 50..99 (inclusive). Return true if either of them falls within the range.  

function checkRange50to99(a, b) {
  if ((a >= 50 && a <= 99) || (b >= 50 && b <= 99)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkRange50to99(45, 55));
console.log(checkRange50to99(30, 80));
console.log(checkRange50to99(99, 150));