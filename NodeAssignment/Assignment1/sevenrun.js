// app.js

// Import the JSON file
const person = require('./data.json');

// Display the data
console.log("----- Person Details -----");
console.log(`Name      : ${person.Name} ${person.LastName}`);
console.log(`Birth Year: ${person.YOB}`);
console.log(`City      : ${person.City}`);
console.log(`Age       : ${person.Age}`);
console.log(`Salary    : ₹${person.Salary}`);

