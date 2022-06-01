var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')
const cadastroMiddleware = require('../middlewares/validacaoCadastro')
const logadoMddleware = require('../middlewares/usuarioLogado')

router.get('/login', usuarioController.telaLogin)
router.post('/login', usuarioController.realizarLogin)

router.get('/cadastro', usuarioController.telaCadastro)
router.post('/cadastro', cadastroMiddleware, usuarioController.realizarCadastro)

router.get('/minhaconta', logadoMddleware, usuarioController.telaMinhaConta)

module.exports = router;
