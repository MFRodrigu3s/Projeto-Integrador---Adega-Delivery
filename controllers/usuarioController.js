const {Usuario} = require("../models/index")
const bcrypt = require("bcrypt")
const saltRound = 8

const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    realizarLogin: async (req, res) => {
        const {email, senha} = req.body
        const acharUsuario = await Usuario.findOne({where: {email: email}})
        if(acharUsuario){
            const compararSenha = bcrypt.compareSync(senha, acharUsuario.senha)
            if(compararSenha){
                res.send("logado!")
            } else {
                res.send("Senha Incorreta!")
            }
        } else {
            res.send("Usuario não encontrado! Por favor, verifique o email inserido")
        }                                                                                                                                                                                                                                           
    },
    telaCadastro: (req, res) => {
        res.render("cadastro")
    },
    realizarCadastro: async (req, res) => {
        let {nome_completo, email, cpf, senha} = req.body
        const hash = bcrypt.hashSync(senha, saltRound)
        const criarUsuario = await Usuario.create({
            nome_completo: nome_completo,
            cpf: cpf,
            email: email,
            senha: hash
        })
        console.log(criarUsuario)
        res.send('Cadastrado!')
    },
    telaMinhaConta: (req, res) => {
        res.render('minhaConta')
    }
}

module.exports = usuarioController