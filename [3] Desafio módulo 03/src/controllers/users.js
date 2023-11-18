const pool = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const password = require('../password');

const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const encriptedPassword = await bcrypt.hash(senha, 10);
        const query = `INSERT INTO usuarios (nome, email, senha)
        VALUES ($1, $2, $3)
        RETURNING id, nome, email`;
        const newUser = await pool.query(query, [nome, email, encriptedPassword]);
        return res.status(201).json(newUser.rows[0]);
    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const login = async (req, res) => {
    const { email } = req.body;

    try {
        const query = 'SELECT * FROM USUARIOS WHERE email = $1';
        const user = await pool.query(query, [email]);

        const token = jwt.sign({ id: user.rows[0].id, nome: user.rows[0].nome }, password, { expiresIn: '8h' });

        const { senha: _, ...loggedInUser } = user.rows[0];

        return res.json({ usuario: loggedInUser, token });

    } catch (erro) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

const identifyUser = async (req, res) => {
    const userId = req.userId;
    try {
        const query = 'SELECT * FROM USUARIOS WHERE id = $1';
        const { rows } = await pool.query(query, [userId]);
        const { senha: _, ...loggedInUser } = rows[0];
        return res.json(loggedInUser);
    } catch (error) {
        return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado.' })
    };
};


const updateUser = async (req, res) => {
    const userId = req.userId;
    const { nome, email, senha } = req.body;

    try {
        const encriptedPassword = await bcrypt.hash(senha, 10);
        const query = 'UPDATE USUARIOS SET nome = $1, email = $2, senha = $3 WHERE id = $4';
        await pool.query(query, [nome, email, encriptedPassword, userId]);
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    };
};

module.exports = {
    createUser,
    login,
    identifyUser,
    updateUser
};