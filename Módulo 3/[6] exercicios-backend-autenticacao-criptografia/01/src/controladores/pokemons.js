const pool = require('../conexao');
const jwt = require('jsonwebtoken');
const senhaJwt = require('../senhaJwt');

const cadastrarPokemon = async (req, res) => {
    const { nome, apelido, habilidades, imagem } = req.body;
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];

    try {
        const { id } = jwt.verify(token, senhaJwt);
        await pool.query('insert into pokemons (usuario_id, nome, apelido, habilidades, imagem) values ($1, $2, $3, $4, $5) returning *',
            [id, nome, apelido, habilidades, imagem]);

        const retorno = {
            nome,
            apelido,
            habilidades
        }
        return res.status(201).json(retorno);
    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const atualizarPokemon = async (req, res) => {
    const { id } = req.params;
    const { apelido } = req.body;
    try {
        const { rows } = await pool.query('select * from pokemons where id = $1', [id]);
        await pool.query('update pokemons set apelido = $1 where id = $2 returning *', [apelido, id]);
        const resposta = {
            apelidoAntigo: rows[0].apelido,
            novoApelido: apelido
        }
        return res.status(201).json(resposta);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const listarPokemons = async (req, res) => {
    try {
        const { rows } = await pool.query(`
        select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
        from pokemons p
        left join 
        usuarios u 
        on p.usuario_id = u.id 
        order by p.id asc`);

        const resultadosFormatados = rows.map(row => ({
            id: row.id,
            usuario: row.usuario,
            nome: row.nome,
            apelido: row.apelido,
            habilidades: row.habilidades.split(',').map(habilidade => habilidade.trim()),
            imagem: row.imagem
        }));
        return res.status(200).json(resultadosFormatados);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const listarPokemonID = async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query(`
        select p.id, u.nome as usuario, p.nome, p.apelido, p.habilidades, p.imagem
        from pokemons p 
        left join 
        usuarios u 
        on p.usuario_id = u.id where p.id = $1
        order by p.id asc`, [id]);
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const deletarPokemon = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('delete from pokemons where id = $1', [id])
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {
    listarPokemons,
    cadastrarPokemon,
    atualizarPokemon,
    listarPokemonID,
    deletarPokemon
}