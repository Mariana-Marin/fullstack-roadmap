// acabamos de ser demandados por la familia de un paciente que murio luego de una 
// visita a uno de nuestros centros medicos, resulta que en la investigacion sobre 
// su muerte encontraron que en uno de nuestros centros medicos le suministraron 
// Warfarina y Meloxicam en una misma visita, esta combinacion puede ser mortal 
// porque no se debe combinar anticoagulantes con antiinflamatorios no esteroides, 
// no tenemos una lista de los medicamentos que usamos pero con la base de datos que 
// tenemos podemos determinar cuales son los medicamentos que utilizamos luego de que 
// tengas esa lista de medicamentos investiga cuales de ahi son antiinflamatorios 
// no esteroides y luego de eso realiza un script que permita identificar a los doctores 
// que suministraron Warfarina con alguno de esos antiinflamatorios no esteroides, 
// los hospitales que permitieron esto tambien tienen responsabilidad por lo tanto tambien 
// debemos obtener el nombre los hospitales donde sucedio esto y ademas el nombre de los 
// usuarios para poder contactarlos y llegar a una conciliacion con ellos antes de que se 
// sumen a esta demanda.


const medicalHistory = require("../data/medical_history.json");
const { findByIdOrName } = require("../repositories");

function getDangerousInteractionAlerts() {

  const nsaids = [
    "meloxicam", 
    "ibuprofeno", 
    "naproxeno", 
    "diclofenaco", 
    "aspirina", 
    "ketorolaco"
  ];
  
  const anticoagulant = "warfarina";

  const alerts = [];

  medicalHistory.forEach((record) => {

    const meds = record.medicationsUsed.map(m => m ? m.toLowerCase() : "");

    const hasWarfarin = meds.includes(anticoagulant);

    const hasNSAID = meds.some(med => nsaids.includes(med));

    if (hasWarfarin && hasNSAID) {
      const user = findByIdOrName(record.userId);
      
      alerts.push({
        doctor: record.doctor,
        hospital: record.hospitalName, 
        patientName: user ? `${user.firstName} ${user.lastName}` : "Desconocido",
        contactEmail: user ? user.email : "No disponible", 
        date: record.date,
        medications: record.medicationsUsed
      });
    }
  });

  return alerts;
}

console.log(JSON.stringify(getDangerousInteractionAlerts(), null, 2));
