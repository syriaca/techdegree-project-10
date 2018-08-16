var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Books.findAll().then(function(books){
    res.render('books', { 
      title: 'All Books', 
      page: req.baseUrl,
      books: books
    });
  }).catch(function(err){
    res.send(500);
  });
});

router.get('/new', function(req, res, next) {
  res.render('booksNew', { title: 'New Book' });
});

module.exports = router;
