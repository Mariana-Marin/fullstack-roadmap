// resulta que en medio de una reunion con nuestros medicos el doctor Alberto Martínez
// nos informo que un paciente se comunico con el para preguntarle acerca de unas
// indicaciones que el doctor le habia dado en su cita de Alergología pero el doctor
// Alberto no da esa especialidad, eso solo quiere decir que tenemos un impostor! realiza
// un script que nos permita identificar tanto a los pacientes que este impostor halla
// atendido como a los hospitales en los que estuvo para poder realizar nuestro respectivo informe.

const medicalHistory = require("../data/medical_history.json");

function getImpostorDoctorRecords() {
  const hospitals = new Set();
  const patients = new Set();

  const filterRecords = medicalHistory.filter((record) => {
    return record.doctor === "Dr. Alberto Martínez";
  });

  filterRecord.forEach((record) => {
    hospitals.add(record.hospitalName);
    patients.add(record.userId)
  });


  
  return filterRecords;
}

console.log(getImpostorDoctorRecords());
