const userDataBase = require('../data/user-database.json');
const { normalizeString, parseFullName } = require('../utils');

// Busca un usuario por su ID
function findById(userId) {
  if (!userId) return null; 

  const normalizedId = normalizeString(userId);

  return userDataBase.find((user) => normalizeString(user.userId) === normalizedId) || null;  
}


// Busca un usuario por nombre completo
function findByFullName(fullName) {
  if (!fullName) return null;  

  const nameParts = parseFullName(fullName);
  if (!nameParts) return null;  

  const FirstName = nameParts.firstName;
  const LastName = nameParts.lastName;

  return userDataBase.find(user => {
    const dbFirstName = normalizeString(user.firstName);
    const dbLastName = normalizeString(user.lastName);
    
    return dbFirstName === FirstName && dbLastName === LastName;
  }) || null; 
}


// Busca un usuario por ID o nombre completo
function findByIdOrName(identifier) {

  if (!identifier) return null;

  const normalized = normalizeString(identifier);
  
  // Si tiene espacios, busca por nombre
  if (normalized.includes(" ")) {
    return findByFullName(normalized);
  }
  
  // Si no tiene espacios, busca por ID
  return findById(normalized);
}

module.exports = {
  findById,
  findByFullName,
  findByIdOrName,
};