// 1. Necesitamos encontrar todos los estudiantes de Mosquera que estudien
// en la Universidad Nacional.

const students_db = require("../examen-final/students_db.json");
const universities_db = require("../examen-final/universities_db.json");

function findStudentByUniversityAndCity() {
  const universidadNacional = universities_db.find((university) => {
    return university.universityName === "Universidad Nacional";
  });
  const city = "Mosquera";

  return students_db.filter((student) => {
    return (
      student.universityCode === universidadNacional.code &&
      student.originCity === city
    );
  });
}

console.log(findStudentByUniversityAndCity());
