const Usuario = (sequelize, DataTypes) => {
    const usuario = sequelize.define('Usuario', {
       nome_completo: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       cpf: {
           type: DataTypes.INTEGER,
           allowNull: false,
           unique: true
       },
       email: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true
       },
       senha: {
           type: DataTypes.STRING,
           allowNull: false,
       }
    }, {
        tableName: "usuarios",
        timestamps: false
    })
    return usuario
}

module.exports = Usuario