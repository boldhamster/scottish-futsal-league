var http = require('http');
var fs = require('fs'); // file system
var url = require('url');
const PORT = process.env.PORT || 5000 // heroku's port (form docs)

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;

  if (filename == "./") {
    filename = "./index"
  }

  filename = filename + ".html";

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found")
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });


}).listen(PORT);


console.log("Server Listening on Port 8080...");
