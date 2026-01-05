/*2. necesitamos un resumen sobre los servicios que a usado un paciente,
 para esto crea una funcion llamada userServicesResume, que reciba como parametro
el nombre de un usuario de nuestra base de datos. 
  
la funcion debe retornar el siguiente informe:

{ userId: "", firstName: "", lastName: "", totalMedicalAppointments: 1302, }

*/

const medicalHistory = require("../data/medical_history.json");
const { USER_NOT_FOUND } = require("../constants/error-messages");
const { findByIdOrName } = require("../repositories");

function userServicesResume(userIdentifier) {
  const user = findByIdOrName(userIdentifier);
  if (!user) return USER_NOT_FOUND;

  const userRecords = medicalHistory.filter((record) => {
    return user.userId === record.userId;
  });

  const result = {
    userId: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    totalMedicalAppointments: userRecords.length,
  };
  return result;
}

console.log(userServicesResume("usr_001"));
