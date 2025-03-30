import { simple} from "./module2.mjs";
simple(); // calling the function simple from module2.mjs
//.mjs is an es6 extension
// also makesure you wirte "type":"module" in package.json file
// Compare this snippet from pathmodule.js:

import { simple2 as s } from "./module2.mjs";
s(); // calling the function simple2 from module2.mjs



import simple3 from "./module2.mjs";//this will give an error because we are not using default export in module2.mjs
//you have to have a default funtion in module2.mjs to use this import statement
simple3(); // calling the function simple2 from module2.mjs

// importing without brackets from an es6 module means it will auatomatically return the default function
import simple377 from "./module2.mjs";//this will give an error because we are not using default export in module2.mjs
//you have to have a default funtion in module2.mjs to use this import statement
simple377(); // calling the function simple2 from module2.mjs


import * as a from "./module2.mjs";//this will import all the functions from module2.mjs
console.log(a); // calling all the functions from module2.mjs
console.log(a.simple2()); // calling the function simple2 from module2.mjs
//console.log(a.simple3());//this will give an error
//console.log(a.simple23()); //this is also giving error
console.log(simple3()); // calling the function simple3 from module2.mjs
console.log(a.simple4()); // calling the function simple4 from module2.mjs
//this will print 45 as we return 45
//but the rest will print undefined as we are not returning anything from the function