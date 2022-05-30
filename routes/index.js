var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

router.get('/', indexController.paginaInicial)
router.get('/produtos', indexController.catalogo)
router.get("/teste", indexController.catalogoTeste)

module.exports = router;
