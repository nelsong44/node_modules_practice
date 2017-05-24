
var http = require('http'); // gives access to all the functions inside the http module

//have to 'require' a module to be able to use it
var intro = require('./practice_module'); // no need to add js file extension, node infers for js and json files

http.createServer(function(req, res) { //use the built-in node http module to create our server
  res.write('this is Omega \n');
  res.write(intro());
  res.end();
}).listen(3000); //.listen takes a port as its argument, listening for a request on port 3000

//when the server is ready, the callback function will run
//the callback function takes two arguments- request and response
//req- http request received
//res- http response we'll send

//node server.js (run node in Terminal, name of file to execute)
//start, stop, restart server
//test in browser- localhost:3000
//'this is Omega' should appear on DOM
//shutdown server- ctrl + c
