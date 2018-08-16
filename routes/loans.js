var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Loans', { title: 'All Loans' });
});

module.exports = router;
