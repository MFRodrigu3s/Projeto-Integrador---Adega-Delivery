const usuarioController = {
    login: (req, res) => {
        res.render('login')
    },
    cadastro: (req, res) => {
        res.render(cadastro)
    }, 
    minhaConta: (req, res) => {
        res.render('minhaConta')
    }
}