const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

//Start the server and listen on port 3000
server.listen(3000, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log('Server started on port 3000');
  }
});