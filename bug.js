const http = require('http');

const server = http.createServer((req, res) => {
  // Handle request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

//Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});

//This will cause an error: Unhandled promise rejection
//This is because the server.listen method is asynchronous, it does not return a promise
//This will throw the error: Unhandled promise rejection: TypeError: server.listen(...) is not a function
//The solution is to simply remove the line that attempts to use server.listen as a promise