// 3. necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros,
// para esto crea una funcion llamada userLastAppointment que reciba como parametro
// el nombre completo del usuario o su id, la funcion debe retornar la siguiente informacion.

//     {
//         userId: "",
//         fullName: "",
//         serviceId: ""
//         speciality: "",
//         hospitalName: "",
//         medicalNotes: "",
//         medicationsUsed: "",
//         date: ""
//     }

const medicalHistory = require("../data/medical_history.json");
const userDataBase = require('../data/user-database.json');

function userLastAppointment(userIdentifier) {

  if (!userIdentifier || typeof userIdentifier !== "string")
    return "usuario no existe";

  userIdentifier = userIdentifier.trim().toLowerCase();

  const user = userDataBase.find(
    (u) =>
      u.userId === userIdentifier ||
      (userIdentifier.split(" ").length === 2 &&
        u.firstName.toLowerCase() + " " + u.lastName.toLowerCase() ===
          userIdentifier)
  );

  if (!user) return "usuario no existe";

  const userMedicalHistory = medicalHistory.filter(
    (record) => record.userId === user.userId
  );

  if (!userMedicalHistory.length) return "sin historial medico";

  const lastAppointmentDate = [...userMedicalHistory].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )[0];

  return {
    userId: user.userId,
    fullName: user.firstName + " " + user.lastName,
    serviceId: lastAppointmentDate.serviceId || "Servicio no especificado",
    speciality: lastAppointmentDate.speciality || "Especialidad no especificada",
    hospitalName: lastAppointmentDate.hospitalName || "Hospital no especificado",
    medicalNotes: lastAppointmentDate.medicalNotes || "Sin notas medicas",
    medicationsUsed: lastAppointmentDate.medicationsUsed.length
      ? lastAppointmentDate.medicationsUsed.join(", ")
      : "Ninguna medicacion",
    date:
      lastAppointmentDate.date.toString().slice(0, 10) || "Fecha no especificada",
  } || "sin historial medico";
}

console.log(userLastAppointment("usr_077"));
console.log(userLastAppointment("usr_168"));