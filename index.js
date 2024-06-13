// const { format } = require('date-fns')
// const { v4: uuid } = require('uuid')
// console.log(format(new Date(), 'dd/MM/yyyy\tHH:mm \t'))
// console.log(uuid())

const logEvents = require('./logEvents')
// console.log(logEvents("first file"))


const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('log', (msg) => {
    logEvents(msg)
});
myEmitter.emit('log', 'log event emmiter');