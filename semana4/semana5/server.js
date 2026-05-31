const express = require('express');
const app = express();

app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta de saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta con parámetro de nombre
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta POST para recibir reportes comunitarios
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

// Encender el servidor
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});