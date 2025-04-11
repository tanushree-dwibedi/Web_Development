// app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const myModule = require("./mymodule");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/submit", (req, res) => {
  const { firstName, middleName, lastName, dob } = req.body;

  const fullName = myModule.getFullName(firstName, middleName, lastName);
  const currentAge = myModule.calculateAge(dob);
  const futureAge = myModule.futureAge(currentAge);

  res.send(`
    <h2>--- Person Details ---</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Current Age:</strong> ${currentAge} years</p>
    <p><strong>Age after 24 years:</strong> ${futureAge} years</p>
    <br><a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
