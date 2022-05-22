const {sequelize, Usuario} = require('./models/index')

Usuario.findAll().then((resultado)=>{
    console.log(resultado)
})