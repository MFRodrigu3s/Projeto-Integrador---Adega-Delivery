const {Usuario} = require("../models/index")

const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    // loginValidado: async (req, res) => {

    // },
    telaCadastro: (req, res) => {
        res.render("cadastro")
    },
    realizarCadastro: async (req, res) => {
        let {nome_completo, email, cpf, senha} = req.body
        const criarUsuario = await Usuario.create({
            nome_completo: nome_completo,
            cpf: cpf,
            email: email,
            senha: senha
        })
        console.log(criarUsuario)
        res.send('Cadastrado!')
    },
    telaMinhaConta: (req, res) => {
        res.render('minhaConta')
    }
}

module.exports = usuarioController