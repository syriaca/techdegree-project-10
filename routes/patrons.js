var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('patrons', { title: 'All Patrons' });
});

router.get('/new', function(req, res, next) {
  res.render('patronsNew', { title: 'New Patron' });
});

module.exports = router;
