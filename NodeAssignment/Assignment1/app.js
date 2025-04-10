// app.js
/*
const myModule = require("./mymodule");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter First Name: ", function (firstName) {
  rl.question("Enter Middle Name (or press Enter if none): ", function (middleName) {
    rl.question("Enter Last Name: ", function (lastName) {
      rl.question("Enter Date of Birth (DD-MM-YYYY): ", function (dob) {
        // Get full name
        const fullName = myModule.getFullName(firstName, middleName, lastName);

        // Calculate age
        const currentAge = myModule.calculateAge(dob);
        const ageIn24Years = myModule.futureAge(currentAge);

        // Display results
        console.log("\n--- Person Details ---");
        console.log(`Full Name: ${fullName}`);
        console.log(`Current Age: ${currentAge} years`);
        console.log(`Age after 24 years: ${ageIn24Years} years`);

        rl.close();
      });
    });
  });
});
*/
// app.js
const myModule = require("./mymodule");
const prompt = require("prompt-sync")();  // Import prompt-sync

// Get user input
const firstName = prompt("Enter First Name: ");
const middleName = prompt("Enter Middle Name (or press Enter if none): ");
const lastName = prompt("Enter Last Name: ");
const dob = prompt("Enter Date of Birth (DD-MM-YYYY): ");

// Get full name
const fullName = myModule.getFullName(firstName, middleName, lastName);

// Calculate age
const currentAge = myModule.calculateAge(dob);
const ageIn24Years = myModule.futureAge(currentAge);

// Display results
console.log("\n--- Person Details ---");
console.log(`Full Name: ${fullName}`);
console.log(`Current Age: ${currentAge} years`);
console.log(`Age after 24 years: ${ageIn24Years} years`);

