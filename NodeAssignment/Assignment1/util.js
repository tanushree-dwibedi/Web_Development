const util = require('util');

const obj = {
  name: 'Tanushree',
  skills: ['Python', 'C++', 'JavaScript'],
  details: { college: 'SOA University', year: 3 }
};

console.log(util.inspect(obj));
