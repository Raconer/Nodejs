// Mysql Setting
var mysqlDB = require('mysql');
// conn == connection
var conn = mysqlDB.createConnection({
   host:      'localhost',
   user:      'root',
   password:  '1q2w3e',
   database:  'o2'
});



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

/////////////////////////////
conn.connect();
/*var sql = 'SELECT * FROM topic';
conn.query(sql, function(err, rows, fields) {// 에러, 데이터들, 컬럼 형식
  if(err){
    console.log(err);
  }else{
    for(var i = 0; i < rows.length; i++){
      console.log(rows[i].title);
    }
  }
});
*/

//var sql = 'INSERT INTO topic (title, description, author)values("nodejs", "server side javascript", "egoing")';
/*
var sql = 'INSERT INTO topic (title, description, author)values(?, ?, ?)';
var params = ['Supervisor', 'Watcher', 'graphittie'];
conn.query(sql, params, function(err, rows, fields) {
  if(err){
      console.log(err);
  }else{
    console.log(rows);
    console.log(rows.insertId);
  }
});
*/
/*var sql = 'UPDATE topic SET title = ?, author = ? WHERE ID=?';
var params = ['NPM', 'leezche', 1];
conn.query(sql, params, function(err, rows, fields) {
  if(err){
      console.log(err);
  }else{
    console.log(rows);
    console.log(rows.insertId);
  }
});*/
/*var sql = 'DELETE FROM topic WHERE ID=?';
var params = [1];
conn.query(sql, params, function(err, rows, fields) {
  if(err){
      console.log(err);
  }else{
    console.log(rows);
    console.log(rows.insertId);
  }
});*/
conn.end();
