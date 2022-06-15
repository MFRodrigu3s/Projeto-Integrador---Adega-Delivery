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
    },
    pagamento: (req, res) => {
        res.render("pagamento")
    },
    aprovandoPagTela: (req, res) => {
        res.render("aguardando")
    },
    separandoPedidoTela: (req, res) => {
        res.render("pgrNaEntrega")
    }
}

module.exports = indexController