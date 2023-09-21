// "Todos os passos (letras) do exercício deverão ser implementadas no mesmo script do servidor."
const express = require('express');
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogadorAtual = 0;

// checar se o jogador existe no indice
const checarJogador = (req, res, next) => {
    if (!jogadores[Number(req.query.indice)]) {
        return res.send(`Não existe jogador no índice informado (${req.query.indice}) para ser removido.`)
    }
    next();
}

// formatador de nomes, para pro a primeira letra maíuscula (independente se já for ou não)
const nomeMaiusculo = (req, res, next) => {
    const nome = req.query.nome;
    if (nome) {
        req.query.nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    }
    next();
}

app.get('/', (req, res) => {
    if (indiceJogadorAtual === jogadores.length) {
        indiceJogadorAtual = 0;
    }
    const nomeDoJogador = jogadores[indiceJogadorAtual];
    indiceJogadorAtual++;
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
});

app.get('/remover', checarJogador, (req, res) => {
    const numeroIndice = Number(req.query.indice);
    jogadores.splice(numeroIndice, 1)
    res.send(jogadores)
});

app.get('/adicionar', nomeMaiusculo, (req, res) => {
    const numeroIndice = Number(req.query.indice)
    if (numeroIndice >= 0) {
        jogadores.splice(Number(req.query.indice), 0, req.query.nome)
    } else {
        jogadores.push(req.query.nome)
    }
    if (numeroIndice > jogadores.length - 1) {
        return res.send(`O índice informado (${numeroIndice}) não existe no array. Novo jogador não foi adicionado.`)
        next();
    }
    return res.send(jogadores);
});


app.listen(8000)