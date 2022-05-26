const {check,validationResult, body} = require("express-validator")

const validacaoCadastro = [
    check('nome')
        .notEmpty().bail()
        .isLength({min:3}).withMessage('"Nome" deve ter pelo menos 3 caracteres'),
    check('email')
        .notEmpty().bail()
        .isEmail().withMessage("Por favor, insira um e-mail válido"),
    check('aniversario')
        .notEmpty().bail()
        .isDate().withMessage("Por favor, insira uma válida"),
    check('sobrenome')
        .notEmpty().bail()
        .isLength({min:4}).withMessage('"Sobrenome" deve ter pelo menos 4 caracteres'),
    check('senha')
        .notEmpty().bail(),
    check('cpf')
        .notEmpty().bail()
        .isLength({min: 11}, {max: 11}).withMessage("Por favor, insira um cpf válido"),
]

module.exports = validacaoCadastro


// link com as validações https://github.com/validatorjs/validator.js#validators