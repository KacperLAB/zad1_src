const http = require("http");
const hostname = "localhost";
const port = 80;
const server_start = new Date().toLocaleString();
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const ipAddress = req.socket.remoteAddress;
  var time = new Date();
  res.end(`IP: ${ipAddress}\n${time}`);
});
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Uruchomiono: ${server_start}`)
  console.log("Autor: Kacper Papiński");
});
