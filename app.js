 



var express = require('express');
var app = express();
var port =5500;
app.get('/', function (req, res) {
  res.send("Hello Ganesan");
});
app.listen(5500, function () {
  console.log('Example app listening on port 5500!');
});

 
 

 