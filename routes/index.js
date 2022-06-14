var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController')

const logadoMiddleware = require("../middlewares/usuarioLogado")

router.get('/', indexController.paginaInicial)
router.get('/produtos', indexController.catalogo)
router.get('/carrinho', indexController.carrinho)
router.get('/pagamento', logadoMiddleware, indexController.pagamento)
router.get('/aprovandoPag', indexController.aprovandoPagTela)
router.post('/aprovandoPag', indexController.aprovandoPagForm)
router.get('/separandoPedido', indexController.separandoPedidoTela)
router.post('/separandoPedido', indexController.separandoPedidoForm)

module.exports = router;
