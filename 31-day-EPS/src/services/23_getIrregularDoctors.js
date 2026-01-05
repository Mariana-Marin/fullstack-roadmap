// El gobierno nacional nos acaba de informar sobre una irregularidad 
// en nuestros centros de atencion, resulta que por ley ningun doctor puede atender 
// mas de 4 especialidades diferentes entonces el gobierno nos esta pidiendo un informe 
// sobre los doctores que han atendido mas de 4 especialidades, crea un script para encontrar
//  una lista de esos doctores y las especialidades que han impartido. 
 
//  (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del 
//   doctor y una lista con las especialidades que ha dado).

const medicalHistory = require("../data/medical_history.json");

function getIrregularDoctors() {

  const doctorsMap = {};

  medicalHistory.forEach((record) => {
    const doctor = record.doctor;
    const speciality = record.speciality;

      if (!doctorsMap[doctor]) {
        doctorsMap[doctor] = new Set();
      }
      doctorsMap[doctor].add(speciality);
    
  });

  const result = [];

  for (const doctor in doctorsMap) {
    const specialties = doctorsMap[doctor];

    if (specialties.size > 4) {
      result.push({
        doctor: doctor,
        specialties: [...specialties], // Convertir Set a Array o Array.from(specialties)
      });
    }
  }

  return result;
}

//   return Object.keys(doctorsMap)
//     .filter(doctor => doctorsMap[doctor].size > 4)
//     .map(doctor => ({
//       doctor: doctor,
//       specialties: [...doctorsMap[doctor]],
//     }));

console.log(getIrregularDoctors());