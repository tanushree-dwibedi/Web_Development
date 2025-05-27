// palindromeServer.js

const http = require('http');
const url = require('url');

// Function to check if number is a palindrome
/*function isPalindrome(num) {
  const str = num.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}*/
// Alternative implementation using a loop

function isPalindrome(num) {
  // Ensure the number is treated as a string
 // const str = String(num); // or
  str= num.toString()

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}


// Create HTTP server
const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  const num = q.number;

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (num !== undefined && !isNaN(num)) {
    const number = parseInt(num);
    const result = isPalindrome(number)
      ? `<h2> ${number} is a Palindrome.</h2>`
      : `<h2> ${number} is NOT a Palindrome.</h2>`;

    res.write(result);
  } else {
    res.write(`<h3>Please provide a valid number in the URL.</h3>`);
    res.write(`<p>Example: <code>http://localhost:8185/?number=121</code></p>`);
  }

  res.end();
});

// Listen on port 8185
server.listen(8185, () => {
  console.log('✅ Server running at http://localhost:8185');
});
