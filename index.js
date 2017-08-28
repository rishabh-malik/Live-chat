var express=require('express');
var socket=require('socket.io');

//App setup
var app=express();
var server=app.listen(4000,function(){
    console.log('listening to request on port 4000')
});

// serve static files
app.use(express.static('public'));

//Socket setup
//socket is a function which takes which server we want to work with
var io=socket(server);

//socket.io is listening for a connection
io.on('connection',function(socket){
    console.log('Made socket connection',socket.id);

    //listening for event
    socket.on('chat',function(data){
        //refering to all sockets
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
        //broadcasting message to all expect the one who is typing
        socket.broadcast.emit('typing',data);
    });
});

