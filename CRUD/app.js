const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const userDB = "./usuarios.json";

async function leerBaseDeDatos() {
  try {
    const data = await fs.readFile(userDB, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function guardarBaseDeDatos(usuarios) {
  await fs.writeFile(userDB, JSON.stringify(usuarios, null, 2), "utf-8");
}

// --- CRUD ---

// 1. CREATE (Crear usuario)
async function crearUsuario(nuevoUsuario) {
  const usuarios = await leerBaseDeDatos();

  if (usuarios.find((user) => user.id === nuevoUsuario.id)) {
    return `❌ El usuario con id [${nuevoUsuario.id}] ya existe.`;
  }

  nuevoUsuario["id"] = uuidv4();
  usuarios.push(nuevoUsuario);
  await guardarBaseDeDatos(usuarios);
  return `✅ Usuario creado: ${nuevoUsuario.nombre}`;
}

// 2. READ (Leer todos los usuarios)
async function obtenerUsuarios() {
  const usuarios = await leerBaseDeDatos();
  return `Lista de usuarios: ${JSON.stringify(usuarios, null, 2)}`;
}

// 3. UPDATE (Actualizar usuario)
async function actualizarUsuario(id, nuevosDatos) {
  const usuarios = await leerBaseDeDatos();

  const indice = usuarios.findIndex((user) => user.id === id);

  if (indice === -1) {
    return `❌ No se encontró usuario con id: ${id}`;
  }

  // Actualizamos solo los campos que enviamos, manteniendo los otros (spread operator)
  usuarios[indice] = { ...usuarios[indice], ...nuevosDatos };

  await guardarBaseDeDatos(usuarios);
  return `Usuario actualizado: ${id}`;
}

// 4. DELETE (Eliminar usuario por id)
async function eliminarUsuario(id) {
  let usuarios = await leerBaseDeDatos();

  const usuariosFiltrados = usuarios.filter((user) => user.id !== id);

  if (usuarios.length === usuariosFiltrados.length) {
    return `❌ No se encontró usuario para eliminar con id: ${id}`;
  }

  await guardarBaseDeDatos(usuariosFiltrados);
  return `Usuario eliminado: ${id}`;
}

// --- EJECUCIÓN DE PRUEBA ---

(async () => {
  // A. CREAR
  console.log(await crearUsuario({
    id: "",
    nombre: "Juan",
    apellido: "Gomez",
    ciudad: "Medellín",
    edad: 30,
    correo: "juan@example.com",
  }));

  console.log(await crearUsuario({
    id: "",
    nombre: "Ana",
    apellido: "Lopez",
    ciudad: "Bogotá",
    edad: 25,
    correo: "ana@example.com",
  }));
  
    // B. LEER
    console.log(await obtenerUsuarios());

    // C. ACTUALIZAR (Cambiamos la edad de Juan)
    console.log(await actualizarUsuario("6ffaab8c-7d05-44b1-a5c7-5810e75b6e13", { edad: 31, ciudad: "Cali" }));

    // D. ELIMINAR (Borramos a Ana)
    console.log(await eliminarUsuario("6ffaab8c-7d05-44b1-a5c7-5810e75b6e13"));

    // VER RESULTADO FINAL
    console.log("--- RESULTADO FINAL ---");
    console.log(await obtenerUsuarios());
    
})();
