const {sequelize, Usuario, Produtos} = require('./models/index')

// Usuario.findAll().then((resultado)=>{
//     console.log(resultado)
// })

// Produtos.findAll().then((resultado)=>{
//     console.log(resultado)
// })

// Produtos.create({
//     nome_produto: "teste",
//     mililitros: 900,
//     preco: 22.99
    
// })

const produtos = [
    {
        nome: 'White Horse',
        mls: 700,
        preco: 60.00,
        tipo: 'whisky'
    },
    {
        nome: 'Buchanans Deluxe',
        mls: 1000,
        preco: 189.99,
        tipo: 'whisky'
    },
    {
        nome: 'Ballantines Finest',
        mls: 1000,
        preco: 75.00,
        tipo: 'whisky'
    },
    {
        nome: 'Jack Daniels Honey',
        mls: 1000,
        preco: 135.90,
        tipo: 'whisky'
    },
    {
        nome: 'Jack Daniels',
        mls: 1000,
        preco: 145.00,
        tipo: 'whisky'
    },
    {
        nome: 'Jack Daniels Fire',
        mls: 1000,
        preco: 135.90,
        tipo: 'whisky'
    }
]

produtos.map( async (produto)=> {
    await Produtos.create({
        nome_produto: produto.nome,
        mililitros: produto.mls,
        preco: produto.preco,
        tipo_de_bebida: produto.tipo
    });
})