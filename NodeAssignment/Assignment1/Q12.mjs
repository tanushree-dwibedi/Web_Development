// inspectObject.mjs
/*
import * as util from 'util';

const output = util.inspect(person, { showHidden: false, depth: null, colors: true });
*/


//import { inspect } from 'util';
import util from 'util';
// Define a complex object
const person = {
  name: 'Tanushree',
  age: 21,
  hobbies: ['reading', 'coding', 'traveling'],
  address: {
    city: 'Bhubaneswar',
    state: 'Odisha',
    coordinates: {
      lat: 20.2961,
      long: 85.8245
    }
  },
  greet() {
    return `Hi, I'm ${this.name}!`;
  }
};

// Use util.inspect to get a readable string representation
//const output = inspect(person, { showHidden: false, depth: null, colors: true });

const output = util.inspect(person, {showHidden: false, depth: null, colors: true });


console.log('🔍 Object details using util.inspect():\n');
console.log(output);
