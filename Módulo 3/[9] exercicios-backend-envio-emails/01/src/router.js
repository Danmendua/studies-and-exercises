const express = require('express');
const routers = express();
routers.use(express.json());

const { cadastrarUsuario } = require('./controllers/cadastroUsuario');
const { contaExiste } = require('./middlewares/cadastroUsuario');
const sendEmail = require('./controllers/enviarEmail');


routers.use(express.static('templates'));
routers.post('/cadastrar', contaExiste, cadastrarUsuario);
routers.post('/email', sendEmail);


module.exports = routers;