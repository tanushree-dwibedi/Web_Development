const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the motor!');
  setTimeout(() => {
    console.log('Motor turned off!');
  }, 3000); // 2 seconds delay
});
console.log("Water is filling in the tank");
myEmitter.emit('WaterFull'); // Emit the event 'WaterFull'
console.log("Water isstill filling in the tank");

//myEmitter.emit('WaterFull'); // Emit the event 'WaterFull'