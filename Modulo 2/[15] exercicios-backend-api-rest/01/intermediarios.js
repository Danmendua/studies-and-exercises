const autentificacao = (req, res, next) => {
    const acesso = "cubos123"
    const senha = req.query.senha;
    if (senha === acesso) {
        next();
    } else {
        res.status(401).json({ mensagem: 'Senha inválida' });
    }
}
module.exports = {
    autentificacao,
};

// http://localhost:3000/alunos?senha=cubos123