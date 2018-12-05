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

// MysqlDb Setting
var mysqlDB = require('mysql');
var conn = mysqlDB.createConnection({
   host:      'localhost',
   user:      'root',
   password:  '1q2w3e',
   database:  'o2'
});
conn.connect();

///////////////////CREATE
// GET('/topic/add')
app.get('/topic/add', function(req, res){
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, function(err, rows, fields) {
    res.render('add', {topics:rows});
  });
});

// POST('/topic/add')
app.post('/topic/add', function(req, res) {
  var title = req.body.title;
  var desc = req.body.description;
  var author = req.body.author;
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, function(err, rows, fields) {
    if(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    }else{
      var sql = 'INSERT INTO topic(title, description, author) values(?, ?, ?)';
      var params = [title, desc, author];
      conn.query(sql, params, function(err, row, fields) {
        if(err){
          res.status(500).send('Internal Server Error');
        }else{
          res.redirect('/topic/'+row.insertId);
        }
      });
    }
  });
});

///////////////////READ
// GET('/topic')
app.get(['/topic', '/topic/:id'], function(req, res) {
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, function(err, rows, fields) {
    var id = req.params.id;
    //res.send(rows);
    if(id){
      var sql = 'SELECT * FROM topic WHERE id = ?';
      conn.query(sql, [id], function(err, row, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }else{
          console.log(row[0]);
          res.render('view', {topics:rows, topic:row[0]});
        }
      });
    }else{
      res.render('view', {topics:rows});
    }
  });
});

///////////////////UPDATE
// GET('/topic')
app.get('/topic/:id/edit', function(req, res) {
  var sql = 'SELECT id, title FROM topic';
  conn.query(sql, function(err, rows, fields) {
    var id = req.params.id;
    //res.send(rows);
    if(id){
      var sql = 'SELECT * FROM topic WHERE id = ?';
      conn.query(sql, [id], function(err, row, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }else{
          console.log(row[0]);
          res.render('edit', {topics:rows, topic:row[0]});
        }
      });
    }else{
      console.log('There is no id');
      res.status(500).send('Internal Server Error');
    }
  });
});

app.post('/topic/:id/edit', function(req, res) {
    var id = req.params.id;
    var title = req.body.title;
    var desc  = req.body.description;
    var author = req.body.author;
    console.log(id, title, desc, author);
    if(id){
      var sql = 'UPDATE topic set title=?, description=?, author=? WHERE id = ?';
      var params = [title, desc, author, id];
      conn.query(sql, params, function(err, row, fields){
        if(err){
          console.log(err);
          res.status(500).send('Internal Server Error');
        }else{
          console.log(row[0]);
          res.redirect('/topic/'+id);
        }
      });
    }else{
      console.log('There is no id');
      res.status(500).send('Internal Server Error');
    }
});



app.listen(3000, function() {
  console.log('Connect Mysql DB Server');
});
