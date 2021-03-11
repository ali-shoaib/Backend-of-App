const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
let a =0;
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log(++a);
  });
myEmitter.emit('event');

myEmitter.on('error', () => {
    console.error('whoops! there was an error');
})
myEmitter.emit('error', new Error());