const knex = require('../connection');


const cadastrarUsuario = async (req, res) => {
    const { nome, email } = req.body;

    const cadEmail = {
        nome: nome,
        email: email
    };

    try {

        const usuario = await knex('usuarios').insert(cadEmail);

        if (!usuario) {
            return res.status(400).json("O usuário não foi cadastrado.");
        };

        return res.status(200).json("O usuario foi cadastrado com sucesso!");
    } catch (error) {
        return res.status(400).json(error.message);
    };
};

module.exports = {
    cadastrarUsuario
}