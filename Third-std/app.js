var express = require('express');
var app = express();
app.locals.pretty=true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('view'));

app.get('/template', function(req, res) {
  console.log('enter template');
  res.render('temp',{time:Date(), title:'Title & Jade'});
});

app.get('/dynamic', function(req, res) {
  var time = Date();
  var lis = '';
  for(var i = 0; i< 5;i++){
    lis= lis + `<li>coding</li>`;
  }
  var outPut = `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello Dynamic Static
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>
  `;
  res.send(outPut);
});

app.listen(3000, function() {
  console.log('Connection 3000 port');
});
