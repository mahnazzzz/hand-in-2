var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var session = require("express-session");


var joke = require('./routes/joke');
var jokes = require('./routes/jokes');
var addjoke = require('./routes/addjoke');
var login = require('./routes/login');
var index = require('./routes/index');


var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret_3162735',
  saveUninitialized: true,
  resave: true
}));

app.use(function (req, res, next) {
  if (req.session.username) {
    next();
  }
  else {
    req.session.jokeCount = 0;
    req.session.jokesCount = 0;
    req.session.addJokeCount = 0;

    req.url = '/login';
    return next();
  }
});

app.use('/login', login);
app.use('/',index);
app.use('/joke', joke);
app.use('/jokes', jokes);
app.use('/addjoke', addjoke);

app.listen(3000, function () {
  console.log("Server running at port 3000");
});


app.get('/addjoke', (req, res) => {

  res.render('addjoke.ejs', { 'addjoke': addjoke });
}); 


module.exports = app;