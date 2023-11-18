const express = require('express');
const roteador = express();
roteador.use(express.json());

const { cadastrarUsuario,
    login } = require('./controladores/usuarios');

const { cadastroIgual,
    usuarioNaoEncontrado } = require('./intermediarios/usuarios');

const { cadastrarPokemon,
    atualizarPokemon,
    listarPokemons,
    listarPokemonID,
    deletarPokemon } = require('./controladores/pokemons');

const { verificarUsuarioLogado } = require('./intermediarios/autenticacao');

const { verificarPokemon } = require('./intermediarios/pokemons');

roteador.post('/cadastro', cadastroIgual, cadastrarUsuario);
roteador.get('/login/', usuarioNaoEncontrado, login);

roteador.use(verificarUsuarioLogado);

roteador.patch('/atualizarPokemon/:id', verificarPokemon, atualizarPokemon);
roteador.post('/cadastrarPokemon', cadastrarPokemon);
roteador.get('/listarPokemons', listarPokemons);
roteador.get('/listarPokemons/:id', verificarPokemon, listarPokemonID)
roteador.delete('/deletarPokemon/:id', verificarPokemon, deletarPokemon)

module.exports = roteador;