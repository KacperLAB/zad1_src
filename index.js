const http = require("http");
const hostname = '0.0.0.0';
const port = 8000;
const server_start = new Date().toLocaleString();
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var ipAddress = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
  //var ipAddress = req.socket.remoteAddress;
  var time = new Date();
  res.end(`IP: ${ipAddress}\n${time}`);
});
server.listen(port, hostname, server_start, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Uruchomiono: ${server_start}`)
  console.log("Autor: Kacper Papiński");
});
