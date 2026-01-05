// Por orden del gobierno debemos informar cuales hospitales del pais estan atendiendo
// la mayor cantidad de pacientes, para esto crea una funcion llamada busiestHospitals
// que retorne una lista de los 3 hospitales mas usados, los objetos de la lista deben
// tener la siguiente

// estructura:

// { hospitalName: "Clínica Especialistas de Sincelejo" usersServed: 1200 }

const medicalHistory = require("../data/medical_history.json");

function busiestHospitals() {
  const hospitalCount = {};
  medicalHistory.forEach((record) => {
    hospitalCount[record.hospitalName] =
      (hospitalCount[record.hospitalName] || 0) + 1;
  });

  const sortedHospitals = Object.entries(hospitalCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((e) => ({ hospitalName: e[0], usersServed: e[1] }));
  return sortedHospitals;
}

console.log(busiestHospitals());
