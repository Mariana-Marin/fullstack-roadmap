Ejercicio: Desarrollo de Sistema CRUD de Usuarios con Persistencia en JSON
Contexto del Proyecto Se requiere desarrollar un módulo de gestión de usuarios para una aplicación backend en Node.js. Debido a requisitos de arquitectura, no se utilizará una base de datos convencional; en su lugar, la persistencia de los datos debe manejarse manipulando directamente un archivo local llamado usuarios.json.
Objetivo Técnico Implementar un conjunto de funciones que permitan realizar las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre el archivo de datos.
Especificaciones del Modelo de Datos Cada usuario almacenado en el archivo debe respetar la siguiente estructura:
id: Identificador único (UUID).
nombre: String.
apellido: String.
ciudad: String.
edad: Number.
correo: String (Email).
Requerimientos Funcionales (CRUD)
1. CREATE (Crear):
Desarrollar una función que reciba los datos del usuario.
Debe generar automáticamente un id único utilizando el paquete uuid.
Debe leer el archivo actual, agregar el nuevo objeto y guardar los cambios.
2. READ (Leer):
Desarrollar una función para listar todos los usuarios registrados.
(Opcional) Desarrollar una función para buscar un usuario específico por su id.
3. UPDATE (Actualizar):
Desarrollar una función que reciba un id y los datos a modificar.
Debe buscar al usuario correspondiente en el archivo, actualizar sus campos (manteniendo el id original) y guardar el archivo actualizado.
4. DELETE (Eliminar):
Desarrollar una función que reciba un id.
Debe eliminar al usuario correspondiente del registro y guardar los cambios en el archivo.
Restricciones y Herramientas
Lenguaje: Node.js.
Módulo de Sistema de Archivos: Uso estricto del módulo nativo fs (File System) para leer y escribir el JSON.
Dependencias Externas: Únicamente se permite el paquete uuid para la generación de IDs.
Manejo de Archivos: El sistema debe ser capaz de manejar la lectura y escritura asíncrona o síncrona (según decisión del desarrollador) asegurando la integridad del JSON.
Entregable Un archivo JavaScript (app.js o userManager.js) que contenga las funciones implementadas y un bloque de ejecución de prueba que demuestre el funcionamiento de cada una de las 4 operaciones (crear un usuario, listarlo, editarlo y finalmente borrarlo).