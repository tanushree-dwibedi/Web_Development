import http from 'http';
import url from 'url';

const func = function(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0)
      count++;
  }
  return count;
};

const factorial = function(num) {
  if (num == 0 || num == 1) return 1;
  return num * factorial(num - 1);
};

http.createServer(function (req, res) {
  let q = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (q.query['n']) {
    let n = Number(q.query['n']); // convert to number
    let y = func(n);
    let z = factorial(n);
    res.end(`Factorial = ${z}, Factors = ${y}`);
  } else {
    res.end("Usage: http://127.0.0.1:8080/?n=5");
  }
})
.listen(8080, '127.0.0.1'); // Correct localhost IP

console.log("Server running at http://127.0.0.1:8080");
