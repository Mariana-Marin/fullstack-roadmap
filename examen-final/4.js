// El pais se enfrenta a una situacion global compleja en la que requiere la mayor cantidad de medicos posible, para esto necesitamos encontrar una lista con los estudiantes de medicina que hallan aprobado 6 de las 10 materias que tiene la carrera de Medicina, la lista debe tener la siguiente estructura:

// { fullName: "", approvedSubjects: [], universityName: "", }

const students_db = require("./students_db.json");
const grades_db = require("./grades_db.json");

function encontrarEstudiantesDeMedicinaHabilitados() {
  const result = [];

  students_db.forEach((student) => {

    const subjectsGrades = {};

    grades_db.forEach((grade) => {
      if (grade.userId === student.userId) {
        if (!subjectsGrades[grade.subject]) {
          subjectsGrades[grade.subject] = [];
        }
        subjectsGrades[grade.subject].push(grade.grade);
      }
    });

    const approvedSubjects = [];

    for (const subject in subjectsGrades) {
      const grades = subjectsGrades[subject];
      let sum = 0;
      grades.forEach((g) => sum += g);
      
      const average = sum / grades.length;

      if (average >= 3) {
        approvedSubjects.push(subject);
      }
    }

    if (approvedSubjects.length >= 6) {
      result.push({
        fullName: student.firstName + student.lastName,
        approvedSubjects: approvedSubjects,
        universityName: student.university,
      });
    }
  });

  return result;
}

console.log(encontrarEstudiantesDeMedicinaHabilitados());
