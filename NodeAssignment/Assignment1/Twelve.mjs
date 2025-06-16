// Import util module using ES6 import syntax
import util from 'util';

// Define a complex object
const complexObject = {
  name: 'Tanushree',
  age: 21,
  address: {
    street: '123 AI Lane',
    city: 'Bhubaneswar',
    pin: 751003
  },
  skills: ['Python', 'JavaScript', 'C++'],
  education: {
    college: 'SOA University',
    degree: 'B.Tech',
    year: 3
  },
  projects: [
    { name: 'Stock Price Predictor', tech: ['LSTM', 'TensorFlow'] },
    { name: 'Depth Estimation', tech: ['OpenCV', 'Jetson Nano'] }
  ],
//   getIntroduction() {
//     return `Hi, I'm ${this.name}, a student at ${this.education.college}`;
//   }
};

// Use util.inspect to nicely print the object with colors and depth
const output = util.inspect(complexObject, {
  showHidden: false,
  depth: null,
  colors: true
});

// Print the result
console.log(output);
