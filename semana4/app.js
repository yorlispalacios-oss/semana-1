const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor funcionando correctamente');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});