// 1. necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion
//  llamada userCity que retorne el nombre de la ciudad del usuario. la funcion puede
//  recibir el id del usuario o el nombre completo del usuario, si el usuario no existe en
//  nuestros registros debe retornar "usuario no existe".

const medicalHistory = require("../medical_history.json");
const userDataBase = require("../user-database.json");

function userCity(userIdentifier) {
  if (!userIdentifier || typeof userIdentifier !== "string")
    return "usuario no existe";

  userIdentifier = userIdentifier.trim().toLowerCase();
  const arrUserIdentifier = userIdentifier.split(" ");

  const user = userDataBase.find(
    (u) =>
      u.userId === userIdentifier ||
      (arrUserIdentifier.length === 2 &&
        u.firstName.toLowerCase() === arrUserIdentifier[0] &&
        u.lastName.toLowerCase() === arrUserIdentifier[1])
  );

  return user ? user.city : "usuario no existe";
}

console.log(userCity("usr_001"));
console.log(userCity("Andrés Gómez"));
console.log(userCity("andrés gómez"));
console.log(userCity("ANDRÉS GÓMEZ"));
console.log(userCity(""));

// 2. necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la
// edad como un factor. Crea una funcion llamada userRiskByAge que reciba como parametro
// el nombre de un usuario y retorne "alto" si el usuario tiene mas de 60 años,
// "medio" si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.

function userRiskByAge(inputFullName) {
  if (!inputFullName || typeof inputFullName !== "string")
    return "usuario no existe";

  inputFullName = inputFullName.trim().toLowerCase();

  if (inputFullName.split(" ").length === 2) {
    const user = userDataBase.find(
      (u) => (u.firstName + " " + u.lastName).toLowerCase() === inputFullName
    );
    if (user) {
      const age = user.age;
      if (!age || typeof age !== "number" || age < 0)
        return "usuario con edad desconocida";

      if (age > 60) return "alto";
      if (age >= 40) return "medio";
      return "bajo";
    }
  }
  return "usuario no existe";
}

console.log(userRiskByAge("usr_001"));
console.log(userRiskByAge("Andrés Gómez"));
console.log(userRiskByAge("andrés gómez"));
console.log(userRiskByAge("ANDRÉS GÓMEZ"));
console.log(userRiskByAge(""));

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
