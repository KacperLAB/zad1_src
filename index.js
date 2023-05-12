const http = require("http");
const hostname = '0.0.0.0';
const port = 80;
const server_start = new Date().toLocaleString();

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  var ip = req.headers['x-forwarded-for'] ||
     req.socket.remoteAddress ||
     null;
  var time = new Date();
  res.end(`IP: ${ip}\n${time}`);
});
server.listen(port, hostname, server_start, function () {
  console.log(`Nasluchiwanie na porcie: ${port}`);
  console.log(`Uruchomiono: ${server_start}`)
  console.log("Autor: Kacper Papiński");
}); dfd
