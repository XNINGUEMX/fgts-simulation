const http = require('http');

// Definição do hostname e da porta
const hostname = '127.0.0.1'; // Endereço local
const port = 3000; // Porta que o servidor irá escutar

// Criação do servidor
const server = http.createServer((req, res) => {
  // Configuração do cabeçalho e status da resposta
  res.statusCode = 200; // Código HTTP 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Tipo de conteúdo: texto simples

  // Envio da resposta
  res.end('Hello, Bolt.new!\n');
});

// Servidor começa a escutar na porta e hostname definidos
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
