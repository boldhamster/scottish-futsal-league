// node filename.js (run server)
// ctr+c (stop server)

var http = require('http');
// require http module / hyper text transfer protocol
var fs = require('fs'); // file system

var url = require('url');

// createServer is a function that requests a page and gives a response
http.createServer(function (req, res) { // create server (request, response)
  res.writeHead(200, {'Content-Type': 'text/html'}); // func returns server response
  // (200 means everything is responding fine)
  //this writeHead function says "I'm sending you some html code"

  // var q = url.parse(req.url, true).query; // parse data from url search bar
  // var dates = q.year;
  // res.write(req.url);

  res.end('Hello World!'); // output something
}).listen(8080); // server listens on port 8080
