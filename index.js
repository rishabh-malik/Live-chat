var express=require('express');

//App setup
var app=express();
var server=app.listen(4000,function(){
    console.log('listening to request on port 4000')
});

// serve static files
app.use(express.static('public'));