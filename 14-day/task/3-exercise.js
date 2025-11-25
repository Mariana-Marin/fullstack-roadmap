/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.
 */

function addPy(str) {
  getTwofirstLetters = str.toLowerCase().slice(0, 2);

  if (getTwofirstLetters === "py") {
    return str;
  } else {
    return "Py" + str;
  }
}

console.log(addPy("thon"));
console.log(addPy("Python"));
