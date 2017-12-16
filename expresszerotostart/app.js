
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
//log messages now are reported with is morgan
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var routes = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views'));//Actually the default view folder
app.set('view engine', 'jade');//allow us to leave out the extension

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var a = path.join(__dirname, 'public', 'images', 'favicon.ico');
var b = path.join(__dirname, 'public');
console.log("this is directions address:  " + a + "     next is        " + b);
// handle incoming data in JSON-format.
app.use(bodyParser.json());
app.use('/', routes);

var names = [];
app.get('/form', function (req, res) {
    res.send("Hi: " + names.join(",") + "<form method='post'><input name='name'></form>");
    console.log('Cookies: ', req.cookies)
});

app.post('/names', function (req, res) {
    names.push(req.body); //We receive it as a JavaScript object
    console.log(JSON.stringify(req.body));
    res.redirect('/form');
});

app.post('/form', function (req, res) {
    names.push(req.body.name);
    res.redirect('/form');
});

//(1)app.listen(3000);
//error handling last middleware
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    // next(err);  //Make sure you understand this line
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500);
            // res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.stack + "</p>");
            res.render('error');
        });
    }

//Will not print stacktrace
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    //res.send("<h1>Sorry there was a problem: " + err.message + "</h1><p>" + err.message + "</p>");
    res.render('error');
});
next(err);  //Make sure you understand this line
});
module.exports = app;

