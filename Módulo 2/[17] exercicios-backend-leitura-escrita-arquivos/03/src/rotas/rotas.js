const express = require('express');
const roteador = express();
roteador.use(express.json());
const consultaEndereco = require('../controladores/enderecos');

roteador.get('/enderecos/:cep', consultaEndereco);

module.exports = roteador;