const express = require('express');
const roteador = express();
roteador.use(express.json());
const { listagem, obterProdutoId, calcularFrete } = require('./controladores')

roteador.get('/produtos', listagem);
roteador.get('/produtos/:idProduto', obterProdutoId)
roteador.get('/produtos/:idProduto/frete/:cep', calcularFrete);


module.exports = roteador