const { USER_NOT_FOUND } = require("../constants/error-messages");
const { findByIdOrName } = require("../repositories");

// 1. necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion
//  llamada userCity que retorne el nombre de la ciudad del usuario. la funcion puede
//  recibir el id del usuario o el nombre completo del usuario, si el usuario no existe en
//  nuestros registros debe retornar "usuario no existe".


function userCity(userIdentifier) {
  const user = findByIdOrName(userIdentifier);
  return user ? user.city : USER_NOT_FOUND;
}

// --- CASOS DE PRUEBA PARA userCity ---
console.log("--- Tests userCity ---");
console.log("ID existente:", userCity("usr_001")); 
console.log("Nombre con tildes/mayúsculas:", userCity("Sebastián Hernández")); 
console.log("ID inexistente:", userCity("usr_999")); 
console.log("String vacío:", userCity("")); 
console.log("Valor nulo:", userCity(null)); 

