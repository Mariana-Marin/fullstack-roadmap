// 55. Check Equal Number of 'p's and 't's
//
// Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

function countPyT(str) {
  let countP = 0;
  let countT = 0;

  for (let index = 0; index < str.length; index++) {
    if (str[index] === "p" || str[index] === "P") {
      countP++;
    } else if (str[index] === "t" || str[index] === "T") {
      countT++;
    }
  }

  return countP === countT;
}

console.log(countPyT("pptt"));
console.log(countPyT("ptt"));
