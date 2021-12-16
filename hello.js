var http = require('http');
var fs = require('fs'); // file system
var url = require('url');
var mysql = require('mysql');

// // Create MySql connection
// var con = mysql.createConnection({
//   host: "localhost", // db loc
//   user: "root",
//   password: "",
//   database: "nodedb",
// })

// Connect to MySQL
// con.connect(function(err) {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Connected to Database");
//     // create a database query using a SQL command, returns error or result
//     con.query("CREATE DATABASE nodeDB", function (err, result) {
//       if (err) throw err;
//       console.log("Database created")
//     });
//   }
// });

// const PORT = process.env.PORT || 5000 // heroku's port (form docs)

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

}).listen(8080);
// }).listen(PORT); // <-- mySQL version

console.log("Server Listening on Port 8080...");
