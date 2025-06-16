const express = require("express");

const app = express();
const PORT = 3000;

// Function to check if a string is a palindrome
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Convert to lowercase and remove non-alphanumeric characters
  return str === str.split("").reverse().join("");
}

// Default route
app.get("/", (req, res) => {
  res.send("<h2>Welcome to the Palindrome Checker API!</h2><p>Use <code>/check?name=yourname</code> to check for a palindrome.</p>");
});

// Route to check palindrome
app.get("/check", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: "Please provide a name in the query parameter (e.g., /check?name=madam)" });
  }

  const result = isPalindrome(name);
  res.json({
    name: name,
    isPalindrome: result,
    message: result ? `${name} is a palindrome` : `${name} is not a palindrome`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
