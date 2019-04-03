
var emitter = require('./server');

emitter.chatEmitter.on('login',function(msg){
   console.log(msg);
});

emitter.chatEmitter.on('logout',function(msg){
   console.log(msg);
});

emitter.chatEmitter.emit('login',"danilo");