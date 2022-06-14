var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

const logadoMiddleware = require("../middlewares/usuarioLogado")

router.get('/', indexController.paginaInicial)
router.get('/produtos', indexController.catalogo)
router.get('/carrinho', indexController.carrinho)
router.get('/pagamento', logadoMiddleware, indexController.pagamento)
router.get('/aprovandoPag', indexController.aprovandoPag)
router.post('/aprovandoPag', indexController.aprovandoPag)
router.get('/separandoPedido', indexController.separandoPedido)

module.exports = router;
