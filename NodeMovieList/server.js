var http = require('http');
var port = process.env.port || 1337;
var msgs = require('./msgs');
var logger = require('./logger');
var _ = require("underscore");

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });   

 
    
    res.write(msgs());
    
    res.end('Hello World\n');

}).listen(port);

logger.log("This is from the logger");