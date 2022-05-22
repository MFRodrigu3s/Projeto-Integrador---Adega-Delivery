var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/login', usuarioController.telaLogin)
router.post('/login', usuarioController.realizarLogin)
router.get('/cadastro', usuarioController.telaCadastro)
router.post('/cadastro',usuarioController.realizarCadastro)
router.get('/minhaconta', usuarioController.telaMinhaConta)


module.exports = router;
