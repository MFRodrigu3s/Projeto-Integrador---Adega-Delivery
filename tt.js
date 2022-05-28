const {sequelize, Usuario, Produtos} = require('./models/index')

Usuario.findAll().then((resultado)=>{
    console.log(resultado)
})

Produtos.findAll().then((resultado)=>{
    console.log(resultado)
})

Produtos.create({
    nome_produto: "teste",
    mililitros: 900,
    preco: 22.99
})