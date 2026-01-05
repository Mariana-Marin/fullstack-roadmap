// Por control medico debemos informar sobre la ultima vez que un usuario se
// le administro cierto medicamento, para esto crea una funcion llamada
// medicationUsedTracker, la funcion debe recibir 2 parametros, el primer parametro
// puede ser el id del usuario o su nombre completo y el segundo parametro debe ser el
// nombre del medicamento, la respuesta de la funcion debe dar la siguiente

// informacion:

// { userId: "", fullName: "", date: "", hospitalName: "" doctor: "" }

// esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.

const medicalHistory = require("../data/medical_history.json");
const { USER_NOT_FOUND } = require("../constants/error-messages");
const { findByIdOrName } = require("../repositories");

function medicationUsedTracker(userIdentifier, medicationName) {
  const user = findByIdOrName(userIdentifier);
  if (!user) return USER_NOT_FOUND;

  const userRecords = medicalHistory.filter((record) => {
    return user.userId === record.userId;
  });

  const medicationRecords = userRecords.filter((record) =>
    record.medicationsUsed.some(
      (medication) =>
        medication && medication.toLowerCase() === medicationName.toLowerCase()
    )
  );

  medicationRecords.sort((a, b) => new Date(b.date) - new Date(a.date));

  const lastVisit = medicationRecords[0];

  return {
    userId: user.userId,
    fullName: `${user.firstName} ${user.lastName}`,
    date: lastVisit.date,
    hospitalName: lastVisit.hospitalName,
    doctor: lastVisit.doctor,
  };
}

console.log(medicationUsedTracker("usr_125", "Naproxeno"));
