const express = require('express');
const { listarPokemons, detalharPokemon } = require('utils-playground');
const app = express();

const resultado = async (req, res) => {
    const { pagina } = req.query;
    try {
        const { results } = await listarPokemons(pagina); // permite acessar a pagina através de um valor query (pagina=(VALOR))
        res.status(200).json(results);
    } catch (erro) {
        res.status(400).json({ mensagem: `${erro}` })
    }
};

const detalhes = async (req, res) => {
    const { nome } = req.params;
    try {
        const { id, name, height, weight, base_experience, forms, abilities, species } = await detalharPokemon(nome);
        const detalhesImportantes = { id, name, height, weight, base_experience, forms, abilities, species };
        res.status(200).json(detalhesImportantes);
    } catch (erro) {
        res.status(404).json({ mensagem: `${erro}` })
    }
};

app.use(express.json());
app.get('/pokemon/', resultado); // http://localhost:8000/pokemon?pagina=1 podendo por pagina=2, pagina=3, pagina=4 e etc.
app.get('/pokemon/:nome', detalhes);


app.listen(8000);