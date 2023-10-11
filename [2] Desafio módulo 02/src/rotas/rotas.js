const express = require('express');
const roteador = express();
roteador.use(express.json());

const { autentificacao,
    dadosIguais,
    isNaN,
    camposVazios,
    dadosDuplicados,
    acharConta,
    contaZerada,
    acharContaPeloBody,
    valorNegativo,
    verificarSenhaBody,
    verificarValorSaque,
    verificadorTransferencia,
    verificacoesURL,
    excluirConta } = require('../middleware/intermediarios');

const { listarDados,
    criarConta,
    atualizarDados,
    deletarConta } = require('../controladores/controlador');


const { depositar,
    sacar,
    transferir,
    saldo,
    extrato } = require('../controladores/transacoes')






roteador.get('/contas', autentificacao, listarDados);
roteador.get('/contas/saldo', verificacoesURL, saldo);
roteador.get('/contas/extrato', verificacoesURL, extrato);
roteador.get('/contas/:numeroConta', acharConta);
roteador.post('/contas', dadosIguais, camposVazios, criarConta);
roteador.put('/contas/:numeroConta/usuario', isNaN, acharConta, camposVazios, dadosDuplicados, atualizarDados);
roteador.delete('/contas/:numeroConta', isNaN, acharConta, contaZerada, excluirConta, deletarConta);
roteador.post('/transacoes/depositar', camposVazios, acharContaPeloBody, valorNegativo, depositar);
roteador.post('/transacoes/sacar', camposVazios, acharContaPeloBody, verificarSenhaBody, verificarValorSaque, valorNegativo, sacar);
roteador.post('/transacoes/transferir', camposVazios, verificadorTransferencia, transferir);

module.exports = roteador;