const express = require('express');
const roteador = express();
roteador.use(express.json());

const { cadastrarAutor,
    buscarAutorELivro } = require('./controladores/autores');

const { campoVazio } = require('./intermediadores/middlewares');

const { cadastrarLivro, listarLivros } = require('./controladores/livros');

roteador.post('/autor', campoVazio, cadastrarAutor);
roteador.get('/autor/:id', buscarAutorELivro);
roteador.post('/autor/:id/livro', campoVazio, cadastrarLivro);
roteador.get('/livro', listarLivros);

module.exports = roteador;