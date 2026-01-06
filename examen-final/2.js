// 2. Nos reportaron sobre un fraude de estudiantes que estan matriculados
// (su status debe ser "Matriculado") en carreras que no son ofrecidas
// en la universidad a la que pertenecen, Necesitamos generar una lista
// con los siguientes datos por cada uno de los estudiantes que estan cometiendo el fraude.

// { fullName: "", userId: "", universityName: "", }

const students_db = require("../examen-final/students_db.json");
const universities_db = require("../examen-final/universities_db.json");

function encontrarEstudianteFraudulento() {
  const listStudents = [];

  students_db.forEach((student) => {
    const university = universities_db.find((university) => {
      return university.code === student.universityCode;
    });

    if (
      !university.offeredCareers.includes(student.career) &&
      student.status === "Matriculado"
    ) {
      listStudents.push(student);
    }
  });

  return listStudents.map((student) => {
    const universityName = universities_db.find((university) => {
      return university.code === student.universityCode;
    });

    return {
      fullName: student.firstName + " " + student.lastName,
      userId: student.userId,
      universityName: universityName.universityName,
    };
  });
}

console.log(encontrarEstudianteFraudulento());
