// second.js

const circle = require('./circle');  // Importing the module
const readline = require('readline');  // For user input

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the radius of the circle: ', (input) => {
  const radius = parseFloat(input);

  if (isNaN(radius) || radius <= 0) {
    console.log('Please enter a valid positive number for radius.');
  } else {
    console.log(`\nRadius: ${radius}`);
    console.log(`Area: ${circle.myarea(radius).toFixed(2)}`);
    console.log(`Circumference: ${circle.mycircumference(radius).toFixed(2)}`);
  }

  rl.close();  // Close the input stream
});


/*
// second.js

const circle = require('./circle');  // Importing the module
const prompt = require('prompt-sync')();  // Import prompt-sync

const input = prompt('Enter the radius of the circle: ');
const radius = parseFloat(input);

if (isNaN(radius) || radius <= 0) {
  console.log('Please enter a valid positive number for radius.');
} else {
  console.log(`\nRadius: ${radius}`);
  console.log(`Area: ${circle.myarea(radius).toFixed(2)}`);
  console.log(`Circumference: ${circle.mycircumference(radius).toFixed(2)}`);
}
*/