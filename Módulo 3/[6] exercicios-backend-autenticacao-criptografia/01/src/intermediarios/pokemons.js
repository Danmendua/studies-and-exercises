const pool = require('../conexao');

const verificarPokemon = async (req, res, next) => {
    const { id } = req.params;
    const { rowCount } = await pool.query('select * from pokemons where id = $1', [id]);
    if (rowCount === 0) {
        return res.status(400).json({ mensagem: "Pokemon não encontrado" });
    }
    next();
};

module.exports = {
    verificarPokemon
}