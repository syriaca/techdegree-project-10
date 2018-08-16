var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('books', { title: 'All Books', page: req.baseUrl });
});

router.get('/new', function(req, res, next) {
  res.render('booksNew', { title: 'New Book' });
});

module.exports = router;
