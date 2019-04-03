
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var chatIO = require('socket.io').listen(server);
var events = require('events');
var chatEmitter = new events.EventEmitter();

server.listen(process.env.PORT || 0897);
console.log("SERVER RUNNING......");

app.use('/',express.static(__dirname+'/public'));

app.get('/',function(req,res){
   res.sendFile(__dirname+'/public/views/chat.html');
});

module.exports.chatEmitter = chatEmitter;