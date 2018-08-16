var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Patrons.findAll().then(function(patrons) {
    res.render('patrons', {
      title: 'All Patrons',
      patron: patrons
    });
    console.log(patrons);
  });
});

router.get('/new', function(req, res, next) {
  res.render('patronsNew', { title: 'New Patron' });
});

module.exports = router;
