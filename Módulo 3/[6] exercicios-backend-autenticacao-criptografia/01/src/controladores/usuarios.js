const pool = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaJwt = require('../senhaJwt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query('insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *',
            [nome, email, senhaCriptografada]);
        return res.status(201).json(novoUsuario.rows[0]);
    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const login = async (req, res) => {
    const { email } = req.body;
    try {
        const usuario = await pool.query('select * from usuarios where email = $1', [email]);

        const token = jwt.sign({ id: usuario.rows[0].id, nome: usuario.rows[0].nome }, senhaJwt, { expiresIn: '8h' });

        const { senha: _, ...usuarioLogado } = usuario.rows[0];

        return res.json({ usuario: usuarioLogado, token });

    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

module.exports = {
    cadastrarUsuario,
    login
}