//app.js
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('node js를 시작하자!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});