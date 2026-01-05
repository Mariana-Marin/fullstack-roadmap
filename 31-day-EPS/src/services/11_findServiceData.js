/* 1. Necesitamos crear una funcion que nos de la informacion de un servicio dado,
para esto crea una funcion llamada serviceData que reciba por parametro el id 
del servicio y retorne el objeto de ese servicio en nuestra base de datos.*/

const medicalHistory = require("../data/medical_history.json");

function serviceData(serviceId) {
  if (!serviceId || typeof serviceId !== "string") return "servicio no existe";

  return medicalHistory.find((record) => record.serviceId === serviceId);
}

console.log(serviceData("srv_0001"));
