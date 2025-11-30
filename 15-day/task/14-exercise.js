/* 14. Get File Extension of Filename

Write a JavaScript exercise to get the filename extension.  */

function getFileExtension(filename) {
  let extension = "";
  let foundDot = false;

  for (let i = filename.length - 1; i >= 0; i--) {
    if (filename[i] === ".") {
      foundDot = true;
      break;
    }
    extension = filename[i] + extension;
  }

  return foundDot ? extension : "";
}

console.log(getFileExtension("documento.txt"));
console.log(getFileExtension("noextension"));
console.log(getFileExtension("foto.jpeg"));
