const {Usuario} = require("../models/index")
const bcrypt = require("bcrypt")
const saltRound = 8

const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    realizarLogin: async (req, res) => {
        const {email, senha} = req.body
        if(email, senha){
            const acharUsuario = await Usuario.findOne({where: {email: email}})
            if(acharUsuario){
                const compararSenha = bcrypt.compareSync(senha, acharUsuario.senha)
                if(compararSenha){
                    // req session
                    res.redirect("/usuario/minhaconta")
                } else {
                    res.send("Senha Incorreta!")
                }
            } else {
                res.send("Usuario não encontrado! Por favor, verifique o email inserido")
            }                                                                                                                                                                                                                                           
        } else {
            res.send("Por favor, preencha os dados necessários")
        }
    },
    telaCadastro: (req, res) => {
        res.render("cadastro")
    },
    realizarCadastro: async (req, res) => {
        let {nome, sobrenome, email, cpf, senha} = req.body
        if(nome, sobrenome, email, cpf, senha){
            const hash = bcrypt.hashSync(senha, saltRound)
            const criarUsuario = await Usuario.create({
                nome: nome,
                sobrenome: sobrenome,
                cpf: cpf,
                email: email,
                senha: hash
            })
            if(criarUsuario){
                res.redirect('/usuario/minhaconta')
            } else {
                res.send("deu errado!")
            }
        } else {
            res.send("Por favor, insira os dados corretamente.")
        }
    },
    telaMinhaConta: (req, res) => {
        // const pesquisa = Usuario.findOne({where: {email:email}})
        res.render('minhaConta')
    },
    updateMinhaConta: async (req, res) => {
        // const atualizacao = Usuario.update({

        // })
    }
}

module.exports = usuarioController