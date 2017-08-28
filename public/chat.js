//make connection
var socket=io.connect('http://localhost:4000');

// Query DOM
var message=document.getElementById('message');
var handle=document.getElementById('handle');
var btn=document.getElementById('send');
var output=document.getElementById('output');

//emitting event
btn.addEventListener('click',function(){
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});

//listen for events
socket.on('chat',function(data){
    //manipulating the dom
    output.innerHTML+='<p><strong>'+data.handle+':</strong> '+ data.message+'</p>';
});