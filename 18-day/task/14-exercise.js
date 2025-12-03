// 59. Extract First Half of Even-Length String
//
// Write a JavaScript program to extract the first half of a even string.

function extractFirstHalf(str) {
  if (str.length % 2 === 0) {
    const firstHalf = str.length / 2;

    return str.slice(0, firstHalf);
  }

  return str;
}

console.log(extractFirstHalf("Hola"));
