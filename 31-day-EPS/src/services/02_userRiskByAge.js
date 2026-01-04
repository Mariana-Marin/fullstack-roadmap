const medicalHistory = require("../data/medical_history.json");
const userDataBase = require("../data/user-database.json");
const { USER_NOT_FOUND, UNKNOWN_AGE } = require("../constants/error-messages");
const { findByIdOrName } = require("../repositories");

// 2. necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la
// edad como un factor. Crea una funcion llamada userRiskByAge que reciba como parametro
// el nombre de un usuario y retorne "alto" si el usuario tiene mas de 60 años,
// "medio" si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.

function userRiskByAge(userIdentifier) {

  const user = findByIdOrName(userIdentifier);
  if (!user) return USER_NOT_FOUND;

  if (user) {
    const age = user.age;

    if (!age || typeof age !== "number" || age < 0)
      return UNKNOWN_AGE;

    if (age > 60) return "alto";
    if (age >= 40) return "medio";
    return "bajo";
  }
  
  return USER_NOT_FOUND;
}

console.log(userRiskByAge("usr_001"));
console.log(userRiskByAge("Andrés Gómez"));
console.log(userRiskByAge("andrés gómez"));
console.log(userRiskByAge("ANDRÉS GÓMEZ"));
console.log(userRiskByAge(""));
