const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Servir la página web index.html desde la carpeta public
  const filePath = path.join(__dirname, 'public', 'index.html');

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Error interno al cargar la página web.');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log('======================================================');
  console.log(` Servidor Node.js activo en: http://localhost:${PORT}`);
  console.log(' Abre ese enlace en tu navegador para ver la página.');
  console.log(' Presiona Ctrl + C en esta terminal para detenerlo.');
  console.log('======================================================');
});