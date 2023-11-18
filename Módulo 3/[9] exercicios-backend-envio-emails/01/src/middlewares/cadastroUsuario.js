const knex = require('../connection');

const contaExiste = async (req, res, next) => {
    const { nome, email } = req.body;

    if (!nome) {
        return res.status(404).json("O campo nome é obrigatório");
    };

    if (!email) {
        return res.status(404).json("O campo email é obrigatório");
    };

    try {
        const usuarioEncontrado = await knex('usuarios').where({ email }).first();

        if (usuarioEncontrado) {
            return res.status(400).json("O email já existe");
        };

        next();

    } catch (error) {
        console.log('Middleware contaExiste' + error.message);
        return res.status(400).json(error.message);
    };
};

module.exports = {
    contaExiste
}