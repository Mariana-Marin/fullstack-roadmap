// Un proveedor internacional de medicamentos nos acaba de informar que hubo un error 
// con un lote de pregabalina que suministramos en nuestros centros medicos, de 
// nuestro sistema de informacion de inventario nos informan que ese lote fue consumido 
// en su totalidad durante el 2024, teniendo esta informacion crea un script que permita 
// identificar que pacientes fueron medicados con pregabalina durante el 2024, rapidooo 
// necesitamos contactar a estos usuarios (en el resultado debe estar el correo de los usuarios 
// para poder contactarlos)

const medicalHistory = require("../data/medical_history.json");
const { findByIdOrName } = require("../repositories");

function getPregabalinPatients2024() {
  const usersSet = new Set();
  
  medicalHistory.forEach((record) => {
    if (new Date(record.date).getFullYear() !== 2024) return;
    if (!record.medicationsUsed) return;
    
    if (record.medicationsUsed.some(m => m && m.toLowerCase() === "pregabalina")) {
      usersSet.add(record.userId);
    }
  });

  return Array.from(usersSet).map(id => {
    const user = findByIdOrName(id);
    return user ? { fullName: `${user.firstName} ${user.lastName}`, email: user.email } : null;
  }).filter(Boolean);
}

console.log(getPregabalinPatients2024());