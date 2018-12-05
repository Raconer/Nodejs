var express = require('express');
var app = express();
// HTML 코드 정리
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

// 서버 시작
app.listen(3000, function() {
  console.log('Connection 3000 port');
});
