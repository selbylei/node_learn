/**
 * Created by selbylei on 17/6/13.
 */
var EventEmitter = require('events');

class MyEmitter extends EventEmitter {
}


const myEmitter = new MyEmitter();


myEmitter.on('event3', (a, b) => {
    // setImmediate(() => {
        setTimeout(function () {
            console.log('这个是异步发生的');
        }, 5000);
    // });
});

myEmitter.on('event', (a, b) => {
    console.log(a, b, this);
});


myEmitter.on('event2', function (a, b) {
    console.log(a, b, this);
});

myEmitter.emit('event', 'a', 'b');
myEmitter.emit('event2', 'a', 'b');
myEmitter.emit('event3', 'a', 'b');