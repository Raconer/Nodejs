var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({extended: false}));
app.use('/user',express.static('uploads'));
app.locals.pretty = true;

app.get('/upload', function(req, res){
  res.render('uploadform');
});

app.post('/upload', upload.single('userfile'),function(req, res) {
  console.log(req.file);
  res.send('uploaded : ' + req.file.filename);
});

app.listen(3000, function() {
  console.log('Connect 3000 Port');
});
