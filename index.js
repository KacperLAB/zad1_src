const express = require('express');
// Constants
const PORT = 8080;
const HOST = 'localhost';
const server_start = new Date().toLocaleString();
// App
const app = express();
app.get('/', (req, res) => {
  const ipAddress = req.socket.remoteAddress;
  var time = new Date();
  res.send(`IP: ${ipAddress}  <br> ${time}`)
});

app.listen(PORT, HOST, () => {
  console.log(`Uruchomiono: ${server_start}`)
  console.log("Autor: Kacper Papiński");
  console.log(`Running on http://${HOST}:${PORT}`);
});
