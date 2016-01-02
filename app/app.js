var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(express.static('public'));

app.ws('/event', function(ws, req) {
	console.log("web socket connected");

	ws.on('message', function(msg) {
		console.log("web socket message");
	});

	ws.on('close', function(){
		console.log("web socket message");
	});

	ws.on('error', function(){
		console.log("web socket error");
	});
});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server Listening at http://%s:%s', host, port);
});