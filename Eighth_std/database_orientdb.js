var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   'root'
});

var db = server.use('o2');
/*
db.record.get('#46:1').then(function(record) {
    console.log('Loaded record:',record);
});
*/

// CREATE
/*var sql = "INSERT INTO topic (title, description) VALUES(:title, :desc)";
var param = {
  params:{
    title:'Express',
    desc:'Express is framework for web'
  }
};

db.query(sql, param).then(function(result) {
  console.log(result);
});*/

// READ
/*var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
  params:{
      rid:'#45:0'
  }
};
db.query(sql, param).then(function(results){
  console.log(results);
});
*/

// UPDATE
/*var sql = 'UPDATE topic set title=:title where @rid=:rid';
db.query(sql, {params:{title:'Expressjs', rid:'#45:1'}}).then(function(result) {
  console.log(result);
});*/

// DELETE
/*var sql = 'DELETE FROM topic WHERE @rid=:rid';
db.query(sql, {params:{title:'Expressjs', rid:'#46:1'}}).then(function(result) {
  console.log(result);
});*/
