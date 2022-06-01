const validacaoLogado = (req, res, next) => {
    const usuario = req.session.usuario
    if(usuario){
        next()
    } else {
        res.redirect('/usuario/login')
    }
}

module.exports = validacaoLogado