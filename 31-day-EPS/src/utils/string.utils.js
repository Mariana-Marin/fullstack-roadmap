// Normaliza un string: remueve espacios extras y convierte a minúsculas

function normalizeString(str) {
  if (!str || typeof str !== "string" || str.trim() === "") {
    return "";
  }

  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

// Capitaliza la primera letra de cada palabra en un string

function capitalizeWords(str) {
  if (!str || typeof str !== "string" || str.trim() === "") {
    return "";
  }
  return str
    .trim()
    .split(" ") 
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

// Separa un nombre completo en partes

function parseFullName(fullName) {
  const normalized = normalizeString(fullName);
  const parts = normalized.split(" ");

  if (parts.length < 2) {
    return null;
  }

  return {
    firstName: parts[0],
    lastName: parts[1],
  };
}


module.exports = {
  normalizeString,
  capitalizeWords,
  parseFullName
};
