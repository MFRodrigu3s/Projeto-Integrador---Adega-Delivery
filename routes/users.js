var express = require('express');
var router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/login', usuarioController.telaLogin)
// router.post('/login', usuarioController.loginValidado)
router.get('/cadastro', usuarioController.telaCadastro)
// router.post('/cadastro', usuarioController.cadastroValidado)
router.get('/minhaconta', usuarioController.telaMinhaConta)


module.exports = router;
