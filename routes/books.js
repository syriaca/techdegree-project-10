var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('books', { title: 'All Books' });
});

module.exports = router;
