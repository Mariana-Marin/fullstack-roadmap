/* 3. necesitamos obtener una lista de usuarios que han visitado un hospital dado, 
para esto crea una funcion llamada hospitalUsers que reciba como parametro 
el nombre del hospital y que retorne un array con el nombre COMPLETO de los usuarios 
que han visitado ese hospital ej:

["Diego Sánchez", "Isabella Flores", "Fernando Sierra"] */

const medicalHistory = require("../data/medical_history.json");
const { findById } = require("../repositories");

function hospitalUsers(inputHospitalName) {
  if (!inputHospitalName || typeof inputHospitalName !== "string") return "hospital no existe";

  const hospitalsSet = new Set();

  medicalHistory.forEach((record) => {
    if (record.hospitalName.toLowerCase() === inputHospitalName.toLowerCase()) {
      const user = findById(record.userId);
      if (user) {
        const fullName = `${user.firstName} ${user.lastName}`;
        hospitalsSet.add(fullName);
      }
    }
  });

  return Array.from(hospitalsSet);
}

console.log(hospitalUsers("Clínica Villarreal"));
