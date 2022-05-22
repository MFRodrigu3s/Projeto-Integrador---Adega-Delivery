const usuariosModel = require("../models/cadastro.json")

const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    // loginValidado: async (req, res) => {

    // },
    telaCadastro: (req, res) => {
        res.render("cadastro")
    },
    realizarCadastro: (req, res) => {
        let novoUsuario = req.body
        console.log(novoUsuario)
        usuariosModel.push(novoUsuario)
        res.send(usuariosModel)
    },
    telaMinhaConta: (req, res) => {
        res.render('minhaConta')
    }
}

module.exports = usuarioController