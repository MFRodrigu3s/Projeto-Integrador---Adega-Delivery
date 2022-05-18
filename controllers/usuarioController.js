const usuarioController = {
    telaLogin: (req, res) => {
        res.render('login')
    },
    // loginValidado: async (req, res) => {

    // },
    telaCadastro: (req, res) => {
        res.render(cadastro)
    }, 
    // cadastroValidado: async (req, res) => {

    // },
    telaMinhaConta: (req, res) => {
        res.render('minhaConta')
    }
}

module.exports = usuarioController