var http = require('http');
var app = require('./config/express');

http.createServer(app).listen(4000, function () {

console.log("Servidor Iniciado");





});