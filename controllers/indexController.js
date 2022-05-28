const indexController = {
    paginaInicial: (req, res) => {
        res.render('paginaInicial')
    },
    catalogo: (req, res) => {
        res.render('catalogo')
    }
}

module.exports = indexController