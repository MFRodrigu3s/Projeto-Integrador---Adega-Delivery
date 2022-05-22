const {Usuario} = require("../models/index")

const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    realizarLogin: async (req, res) => {
        const {email, senha} = req.body
        const testarEmail = await Usuario.findOne({where: {email: email}})
        const testarSenha = await Usuario.findOne({where: {senha: senha}})
        if(testarEmail && testarSenha){
            res.send("Logado!")
        } else {
            console.log(testarEmail, testarSenha)
        }
    },
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