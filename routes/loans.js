var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Loans', { title: 'All Loans' });
});

router.get('/new', function(req, res, next) {
  res.render('loansNew', { title: 'New Loan' });
});

module.exports = router;
