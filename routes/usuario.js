var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')
const cadastroMiddleware = require('../middlewares/validacaoCadastro')

router.get('/login', usuarioController.telaLogin)
router.post('/login', usuarioController.realizarLogin)

router.get('/cadastro', usuarioController.telaCadastro)
router.post('/cadastro', cadastroMiddleware, usuarioController.realizarCadastro)

router.get('/minhaconta', usuarioController.telaMinhaConta)

module.exports = router;
