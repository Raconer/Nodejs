// OrientDB Setting
var OrientDB = require('orientjs');
var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'root'
});
var db = server.use('o2');

// Express Setting
var express = require('express');
var app = express();

// Jade Setting
app.set('views', './views');
app.set('view engine', 'jade');

// Body Parser Setting
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Source pretty
app.locals.pretty = true;

// GET('/topic/add')
app.get('/topic/add', function(req, res){
  console.log('Connect /topic/add GET');
  var sql = 'SELECT * FROM topic';
  db.query(sql).then(function(result) {
    if(result.length === 0){
      console.log('There is no record');
      res.status(500).send('Internal server Error');
    }
    console.log(result);
    res.render('add', {topics:result});
  });
});

// POST('/topic/add')
app.post('/topic/add', function(req, res) {
  console.log('Connect /topic/add POST');
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var sql = 'INSERT INTO topic (title, description, author) VALUES(:title, :desc, :author)';
  db.query(sql, {
    params:{
      title:title,
      desc:description,
      author:author
    }
  }).then(function(results) {
    console.log(results);
    res.redirect('/topic/'+encodeURIComponent(results[0]['@rid']));
  });
});

// GET('/topic')
app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = 'SELECT * FROM topic';
  db.query(sql).then(function(result){
    var id = req.params.id;
    if(id){
      console.log('Connect /topic/:id');
      var sql = 'SELECT * FROM topic WHERE @rid=:rid';
      db.query(sql,{params:{rid:id}}).then(function(topic) {
          res.render('view', {topics:result, topic:topic[0]});
      });
    }else{
      console.log('Connect /topic');
      res.render('view', {topics:result});
    }
  });
});

// Connect server
app.listen(3000, function() {
  console.log('Connect Server 3000PORT');
});
