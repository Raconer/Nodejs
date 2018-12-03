var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.locals.pretty=true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/form', function(req, res) {
  res.render('form');
});

app.get('/form_receiver', function(req, res) {
  var title = req.query.title;
  var description = req.query.description;

  res.send(title+','+ description);
});

app.post('/form_receiver', function(req, res) {
  var title = req.body.title;
  var description = req.body.description;

 res.send(title+','+ description+'히예?');
});

app.get('/', function(req, res) {
  res.send('Temp Data');
});

app.listen(3000, function(){
  console.log('Connect Fifth_std');
});
