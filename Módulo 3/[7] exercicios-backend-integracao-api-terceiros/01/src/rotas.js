const express = require('express')
const rotas = express();
const { buscarDados } = require('./controlador/buscador')

rotas.get('/empresas', buscarDados);

module.exports = rotas