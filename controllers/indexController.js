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
    aprovandoPagForm: (req, res) => {
        let {rua, numero} = req.body 
        localStorage.setItem("rua", rua)
        localStorage.setItem("num", numero)
    },
    separandoPedidoTela: (req, res) => {
        res.render("pgrNaEntrega")
    },
    separandoPedidoForm: (req, res) => {
        let {rua, numero} = req.body 
        localStorage.setItem("rua", rua)
        localStorage.setItem("num", numero)
    }
}

module.exports = indexController