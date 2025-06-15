// inspect.js
import util from 'util';
import complexObject from './complexObject.mjs';

console.log(util.inspect(complexObject, {
  showHidden: true,
  depth: null,
  colors: true
}));

console.log('\nSummary:', complexObject.getSummary());
console.log('\nFunction Code:\n', complexObject.getSummary.toString());
console.log(JSON.stringify(complexObject, null, 2));
