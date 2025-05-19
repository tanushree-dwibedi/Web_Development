// main.mjs


import { isPrime } from './primeChecker.mjs';
import promptSync from 'prompt-sync';

const prompt = promptSync();

const input = prompt('Enter a number to check if it is prime: ');
const number = parseInt(input);

if (isNaN(number)) {
  console.log('Please enter a valid number.');
} else {
  const result = isPrime(number)
    ? `${number} is a Prime number. `
    : `${number} is NOT a Prime number. `;
  console.log(result);
}












/*
import { isPrime } from './primeChecker.mjs';
import readline from 'readline';

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number to check if it is prime: ', (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log('Please enter a valid number.');
  } else {
    const result = isPrime(number)
      ? `${number} is a Prime number. `
      : `${number} is NOT a Prime number. `;

    console.log(result);
  }

  rl.close();
});
*/

/*
import { isPrime, isPositive } from './primeUtils.mjs';

console.log(isPrime(7));      // true
console.log(isPositive(-3));  // false
*/