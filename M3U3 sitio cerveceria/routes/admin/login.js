var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login',{
  layout:'admin/layout'
  });
});

module.exports = router;