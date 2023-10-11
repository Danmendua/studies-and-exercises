const express = require('express');
const { todosLirvos, consultaLivro, adicionarLivro, substituirLivro, alterarLivro, deletarLivro } = require('./controladores/biblioteca');
const roteador = express();


roteador.get('/livros', todosLirvos);
roteador.get('/livros/:id', consultaLivro);
roteador.post('/livros', adicionarLivro);
roteador.put('/livros/:id', substituirLivro);
roteador.patch('/livros/:id', alterarLivro);
roteador.delete('/livros/:id', deletarLivro);

module.exports = roteador;