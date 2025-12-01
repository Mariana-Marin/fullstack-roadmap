/* 14. Get File Extension of Filename

Write a JavaScript exercise to get the filename extension.  */

function getFileExtension(filename) {
  let extension = "";
  let hasDot = false;

  for (let i = filename.length - 1; i >= 0; i--) {
    if (filename[i] === ".") {
      hasDot = true;
      break;
    }
    extension = filename[i] + extension;
  }

  return hasDot ? extension : "invalid extension";
}

console.log(getFileExtension("foto.jpeg"));

console.log(getFileExtension("documento.txt"));

console.log(getFileExtension("noextension"));

