var express = require('express');
var router = express.Router();
const multer = require("multer")

const usuarioController = require('../controllers/usuarioController')
const cadastroMiddleware = require('../middlewares/validacaoCadastro')
const logadoMiddleware = require('../middlewares/usuarioLogado')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "/VS CODE/projeto novo/projeto-Integrador/public/images/fotoUsuario/")
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

router.get('/login', usuarioController.telaLogin)
router.post('/login', usuarioController.realizarLogin)

router.get('/cadastro', usuarioController.telaCadastro)
router.post('/cadastro', cadastroMiddleware, usuarioController.realizarCadastro)

router.get('/minhaconta', logadoMiddleware, usuarioController.telaMinhaConta)
router.post('/minhaconta', logadoMiddleware, upload.single('foto-perfil'),usuarioController.telaMinhaConta)

module.exports = router;
