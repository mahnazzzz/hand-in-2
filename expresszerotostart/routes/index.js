var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //throw new Error("UPPS")
});

module.exports = router;