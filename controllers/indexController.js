const {sequelize, Produtos} = require("../models/index")

const indexController = {
    paginaInicial: (req, res) => {
        res.render('paginaInicial')
    },
    catalogo: async (req, res) => {
        const pesquisa = await Produtos.findAll()
        res.render("catalogo", {pesquisa})
    },
    catalogoTeste: async (req, res) => {
        const pesquisa = await Produtos.findAll()
        res.render("catalogoTeste", {pesquisa})
    }
}

module.exports = indexController