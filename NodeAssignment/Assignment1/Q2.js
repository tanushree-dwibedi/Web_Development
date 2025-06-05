// palindromeServer.js

const http = require('http');
const url = require('url');

// Function to check for palindrome
// function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversed = cleanStr.split('').reverse().join('');
//     return cleanStr === reversed;
// }
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase()
    
    let start = 0;
    let end = cleanStr.length - 1;

    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false; // Not a palindrome
        }
        start++;
        end--;
    }

    return true; // It's a palindrome
}

// Create server
const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    if (req.url.startsWith('/check')) {
        const name = queryObject.name;

        if (name) {
            const result = isPalindrome(name)
                ? `"${name}" is a palindrome.`
                : `"${name}" is NOT a palindrome.`;

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(result);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Please provide a name in the URL, like /check?name=radar');
        }
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Use /check?name=yourName to check for palindrome');
    }
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
