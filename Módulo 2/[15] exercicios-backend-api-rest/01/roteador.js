const express = require('express');
const roteador = express();
const { autentificacao } = require('./intermediarios');
const { obterAlunoId, listarAlunos, cadastrarAluno, deletarAlunos } = require('./controladores/alunos');
roteador.use(express.json());


roteador.use(autentificacao) // http://localhost:3000/alunos?senha=cubos123
roteador.get('/alunos', listarAlunos)
roteador.get('/alunos/:id', obterAlunoId)
roteador.post('/alunos', cadastrarAluno);
roteador.delete('/alunos/:id', deletarAlunos);

module.exports = roteador