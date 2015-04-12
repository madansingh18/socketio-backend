/*
 * Simple Socket.io Setup
 *
 * @type {exports}

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.set('port', (process.env.PORT || 5000));
io.on('connection', function(socket){
    socket.on('event:new:image',function(data){
        socket.broadcast.emit('event:incoming:image',data);
    });
});

server.listen(app.get('port'),function(){
    console.log('Socket.io Running');
});
 */

 var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
