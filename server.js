var express = require('express');

var app = new express();

app.use(express.static('public'));

app.listen(3000,function(){
	console.log('magic happens at port 3000')
})