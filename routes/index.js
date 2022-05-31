var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

router.get('/', indexController.paginaInicial)
router.get('/produtos', indexController.catalogo)

module.exports = router;
