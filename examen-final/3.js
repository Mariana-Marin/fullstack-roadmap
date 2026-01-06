// 3. Necesitamos crear una funcion que nos permita identificar si un
// estudiante aprobo una materia, para esto la funcion debe recibir el
// nombre completo del estudiante y el nombre de la materia como parametros,
// debe retornar "true" si aprobo la materia o "false" si la reprobo.

// Nota: Cada estudiante tiene varias calificaciones en cada materia,
// para determinar si paso la materia, el promedio de las calificaciones
// debe ser superior a 3.

const students_db = require("../examen-final/students_db.json");
const grades_db = require("../examen-final/grades_db.json");

function averageGrades(nameStudent, nameSubject) {
  const student = students_db.find((student) => {
    const fullName = student.firstName + " " + student.lastName;
    return nameStudent === fullName;
  });

  const grades = [];

  grades_db.forEach((grade) => {
    if (grade.subject === nameSubject && grade.userId === student.userId) {
      grades.push(grade.grade);
    }
  });

  let sum = 0;

  grades.forEach((grade) => {
    sum += grade;
  });

  return sum / grades.length >= 3;
}

console.log(averageGrades("Oscar Téllez", "Tipografía"));
