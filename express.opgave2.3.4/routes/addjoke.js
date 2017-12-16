var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.post('/', function (req, res, next) {
   
    if (req.body.joke) {
        req.session.addJokeCount +=1;
        jokes.addJoke(req.body.joke);
    }
    res.redirect('/');
});

module.exports = router;