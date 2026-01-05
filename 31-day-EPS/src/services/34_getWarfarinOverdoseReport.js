//la Warfarina es un anticoagulante muy potente y su dosis debe ser controlada con
// una exactitud muy alta, nos informaron que existen doctores en nuestra red que
// han suministrado este medicamente mas de 1 vez en una misma visita medica,
// encuentra esos doctores y da un informe detallado sobre que dia hicieron esa mala
// practica y en que pacientes lo utilizaron. el informe debe tener la siguiente estructura:

//[ { doctor: "Dr. Mario Vargas"
// fechas: [ "2023-07-13T17:36:17.616Z", "2024-08-14T21:17:05.780Z", "2023-10-18T10:38:20.499Z" ],
// pacientes: [ "Andrés Gomez", "Nicolás Torres", "Alejandro Moreno" ] },

// { doctor: "Dra. Isabela Rosales"
// fechas: [ "2023-06-11T17:36:17.616Z", "2024-04-18T21:17:05.780Z", "2023-12-04T10:38:20.499Z" ],
// pacientes: [ "Lorena Bermúdez", "Cristian Toro", ] }, ]

const medicalHistory = require("../data/medical_history.json");
const { findByIdOrName } = require("../repositories");

function getReportDoctors() {
  const doctorsReport = {};

  medicalHistory.forEach((record) => {

    const warfarinCount = record.medicationsUsed.filter(
      (med) => med && med.toLowerCase() === "warfarina"
    ).length;

    if (warfarinCount > 1) {
      const doctorName = record.doctor;
      const user = findByIdOrName(record.userId);
      const patientName = user
        ? `${user.firstName} ${user.lastName}`
        : "Desconocido";

      if (!doctorsReport[doctorName]) {
        doctorsReport[doctorName] = {
          doctor: doctorName,
          fechas: [],
          pacientes: [],
        };
      }

      doctorsReport[doctorName].fechas.push(record.date);
      doctorsReport[doctorName].pacientes.push(patientName);
    }
  });

  return Object.values(doctorsReport);
}

console.log(JSON.stringify(getReportDoctors(), null, 2));
