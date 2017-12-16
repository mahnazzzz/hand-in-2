var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {title: "Main page", username: req.session.username});
});

module.exports = router;