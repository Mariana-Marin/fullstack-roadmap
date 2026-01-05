/* 4. Necesitamos obtener cual es el hospital de preferencia (mas usado) 
de un usuario dado, para esto crea una funcion llamada userPreferredHospital 
que reciba como parametro el nombre de un usuario y retorne el nombre del hospital de preferencia.*/

const medicalHistory = require("../data/medical_history.json");
const { USER_NOT_FOUND } = require("../constants/error-messages");
const { findByIdOrName } = require("../repositories");

function userPreferredHospital(userIdentifier) {
  const user = findByIdOrName(userIdentifier);
  if (!user) return USER_NOT_FOUND;

  const userRecords = medicalHistory.filter((record) => record.userId === user.userId);

  const hospitalCount = {};
  userRecords.forEach((hospital) => {
    hospitalCount[hospital.hospitalName] = (hospitalCount[hospital.hospitalName] || 0) + 1;
  });

  const sortedHospitals = Object.entries(hospitalCount).sort((a, b) => b[1] - a[1]);

  return sortedHospitals.length > 0 ? sortedHospitals[0][0] : "Sin registros";
}

console.log(userPreferredHospital("usr_001"));
