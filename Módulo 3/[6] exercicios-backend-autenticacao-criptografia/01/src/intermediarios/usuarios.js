const pool = require('../conexao');
const bcrypt = require('bcrypt');

const cadastroIgual = async (req, res, next) => {
    const { email } = req.body;
    try {
        const { rowCount } = await pool.query('select * from usuarios where email = $1', [email])
        if (rowCount > 0) {
            return res.status(409).json({ mensagem: "Email existente" });
        };
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};


const usuarioNaoEncontrado = async (req, res, next) => {
    const { email, senha } = req.body;

    const usuario = await pool.query('select * from usuarios where email = $1', [email]);
    if (usuario.rowCount === 0) {
        return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)
    if (!senhaValida) {
        return res.status(400).json({ mensagem: "Usuário não encontrado" });
    }

    next();

};

module.exports = {
    cadastroIgual,
    usuarioNaoEncontrado
}