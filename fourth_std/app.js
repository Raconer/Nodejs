// EXPRESS NPM 사용
var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.locals.pretty=true;

app.get('/template', function(req, res) {
  res.render('template');
});

app.get('/topic', function(req, res) {
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  // res.send(req.query.id + ',' + req.query.name);
  var output = `
    <a href='/topic?id=0'>JavaScript</a><br>
    <a href='/topic?id=1'>Nodejs</a><br>
    <a href='/topic?id=2'>Express</a><br><br>
    ${topics[req.query.id]}`;

  res.send(output);
});

app.get('/topic/:param', function(req, res) {
  var topics = [
    'Javascript is....',
    'Nodejs is...',
    'Express is...'
  ];
  // res.send(req.query.id + ',' + req.query.name);
  var output = `
    <a href='/topic?id=0'>JavaScript</a><br>
    <a href='/topic?id=1'>Nodejs</a><br>
    <a href='/topic?id=2'>Express</a><br><br>
    ${topics[req.params.param]}`;

  res.send(output);
});

app.get('/topic/:id/:mode', function(req, res) {
  res.send(req.params.id+'='+ req.params.mode);
});

app.listen(3000, function() {
  console.log('Connect Fourth Study');
});
