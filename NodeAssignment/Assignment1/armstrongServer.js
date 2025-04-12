// armstrongServer.js

const http = require('http');
const url = require('url');

// Function to check Armstrong number
function isArmstrong(num) {
  const digits = num.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
  return sum === num;
}

/*
function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const power = num.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += Math.pow(digit, power);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
*/




// Create server
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  const num = parseInt(q.number);

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (!isNaN(num)) {
    const result = isArmstrong(num)
      ? `${num} is an Armstrong number.`
      : `${num} is NOT an Armstrong number. `;
    res.write(`<h2>${result}</h2>`);
  } else {
    res.write('<h3>Please provide a valid number in the URL. Example:</h3>');
    res.write('<code>http://127.0.0.2:8125/?number=153</code>');
  }

  res.end();
});

// Listen on IPv4: 127.0.0.2 and port: 8125
server.listen(8125, '127.0.0.2', () => {
  console.log('✅ Server running at http://127.0.0.2:8125');
});
