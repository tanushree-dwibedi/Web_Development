// inspectObject.mjs

import { inspect } from 'util';

// Create a complex nested object
const employee = {
  name: 'Tanushree',
  department: 'Engineering',
  skills: ['JavaScript', 'Python', 'Node.js'],
  projects: [
    {
      name: 'Stock Predictor',
      stack: ['Python', 'LSTM', 'Pandas'],
    },
    {
      name: 'Weather App',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
  address: {
    city: 'Bhubaneswar',
    state: 'Odisha',
    location: {
      lat: 20.2961,
      lon: 85.8245,
    },
  },
};

// Use util.inspect to print the object
const details = inspect(employee, {
  showHidden: false,
  depth: null,         // show full depth
  colors: true         // colorize output in terminal
});

console.log('📋 Inspected Employee Object:\n');
console.log(details);
