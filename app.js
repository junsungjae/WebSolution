//app.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('안녕 node js');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});