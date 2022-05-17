var express = require('express');
var router = express.Router();

const controllerTeste = require('../controllers/teste')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/teste', controllerTeste.rota)

module.exports = router;
