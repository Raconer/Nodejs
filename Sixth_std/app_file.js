var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.locals.pretty=true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  console.log('Connect Sixth_Study');
});
