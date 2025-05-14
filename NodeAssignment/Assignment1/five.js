
// server.js

const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the server
const server = http.createServer((req, res) => {
  // Get the file name from the URL (e.g., /sample.txt)
  const fileName = req.url.slice(1); // remove the leading '/'
  const filePath = path.join(__dirname, 'files', fileName);

  // Read and return the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // File not found or error
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - File Not Found');
    } else {
      // File found, send content
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
