const express = require('express');
const { listarPokemons, detalharPokemon } = require('utils-playground');
const app = express();

const resultado = async (req, res) => {
    const { pagina } = req.query;
    const { results } = await listarPokemons(pagina); // permite acessar a pagina através de um valor query (pagina=(VALOR))
    res.status(200).json(results);
};

const detalhes = async (req, res) => {
    const { nome } = req.params;
    const { id, name, height, weight, base_experience, forms, abilities, species } = await detalharPokemon(nome);
    const detalhesImportantes = { id, name, height, weight, base_experience, forms, abilities, species };
    res.status(200).json(detalhesImportantes);
};

app.get('/pokemon/', resultado); // http://localhost:8000/pokemon?pagina=1 podendo por pagina=2, pagina=3, pagina=4 e etc.
app.get('/pokemon/:nome', detalhes);


app.listen(8000);