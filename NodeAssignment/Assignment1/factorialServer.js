// factorialServer.js

const http = require('http');
const url = require('url');

// Function to calculate factorial
/*
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
  */
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// Function to count number of factors
function countFactors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

// Create the server
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  const num = parseInt(q.number);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (!isNaN(num) && num >= 0) {
    const fact = factorial(num);
    const factors = countFactors(num);

    res.write(`<h2>Number: ${num}</h2>`);
    res.write(`<p> Factorial: ${fact}</p>`);
    res.write(`<p> Number of Factors: ${factors}</p>`);
  } else {
    res.write('<h3>Please provide a valid non-negative number in the URL.</h3>');
    res.write('<p>Example: <code>http://127.0.0.2:8123/?number=5</code></p>');
  }

  res.end();
});

// Start server on IP 127.0.0.2 and port 8123
server.listen(8123, '127.0.0.2', () => {
  console.log('✅ Server running at http://127.0.0.2:8123');
});
