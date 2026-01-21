const express = require("express");
const app = express();

// Ruta por defecto
app.get("/calc", (req, res) => {
  res.json({mensaje: "Bienvenido a la Calculadora API. Usa /calc/sumar, /calc/restar, /calc/multiplicar o /calc/dividir con parámetros a y b."});
});

// Middleware para validar parámetros
app.use("/calc/:operacion",(req, res, next) => {
  const a = req.query.a;
  const b = req.query.b;

  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: "Faltan parámetros a y b" });
  }

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Los parámetros a y b deben ser números" });
  }

  req.a = parseFloat(a);
  req.b = parseFloat(b);
  next();
});

// Rutas de operaciones
app.get("/calc/sumar", (req, res) => {
    const resultado = req.a + req.b;
    res.json({ operacion: "sumar", a: req.a, b: req.b, resultado });
});

app.get("/calc/restar", (req, res) => {
    const resultado = req.a - req.b;
    res.json({ operacion: "restar", a: req.a, b: req.b, resultado });
});

app.get("/calc/multiplicar", (req, res) => {
    const resultado = req.a * req.b;
    res.json({ operacion: "multiplicar", a: req.a, b: req.b, resultado });
});

app.get("/calc/dividir", (req, res) => {
    if (req.b === 0) {
        return res.status(400).json({ error: "No se puede dividir por cero" });
    }
    const resultado = req.a / req.b;
    res.json({ operacion: "dividir", a: req.a, b: req.b, resultado });
});


// Configuracion del listen (puerto), ultima linea del archivo
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Casos de prueba:

// "http://localhost:3000/calc"
// "http://localhost:3000/calc/sumar"
// "http://localhost:3000/calc/sumar?a=5"
// "http://localhost:3000/calc/restar?b=3"
// "http://localhost:3000/calc/multiplicar?a=mariana&b=2"
// "http://localhost:3000/calc/sumar?a=5&b=3"
// "http://localhost:3000/calc/sumar?a=1.5&b=2.5"
// "http://localhost:3000/calc/restar?a=10&b=4"
// "http://localhost:3000/calc/multiplicar?a=6&b=7"
// "http://localhost:3000/calc/dividir?a=20&b=5"
// "http://localhost:3000/calc/dividir?a=20&b=0"