// main file, main application, main entry
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
  res.send('Hello home page');
});

app.get('/route', function(req, res) {
  res.send('Hello Router, <img src="/map.png">');
});

app.get('/login', function(req, res){
  res.send('login Please');
});

app.listen(3000, function(){
  console.log('Connected 3000 port');
});
