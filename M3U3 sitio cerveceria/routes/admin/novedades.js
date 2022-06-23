var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

module.exports = router;