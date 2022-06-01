const {sequelize, Produtos} = require("../models/index")

const indexController = {
    paginaInicial: (req, res) => {
        res.render('paginaInicial')
    },
    catalogo: async (req, res) => {
        const pesquisa = await Produtos.findAll()
        res.render("catalogo", {catalogo: pesquisa})
    },
    carrinho: (req, res) => {
        res.render("carrinho")
    }
}

module.exports = indexController