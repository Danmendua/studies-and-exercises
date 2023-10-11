const express = require('express');
const app = express();
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogadorAtual = 0;

app.get('/', (req, res) => {
    if (indiceJogadorAtual === jogadores.length) {
        indiceJogadorAtual = 0;
    }
    const nomeDoJogador = jogadores[indiceJogadorAtual];
    indiceJogadorAtual++;
    res.send(`É a vez de ${nomeDoJogador} jogar!`);
});

app.listen(3000);