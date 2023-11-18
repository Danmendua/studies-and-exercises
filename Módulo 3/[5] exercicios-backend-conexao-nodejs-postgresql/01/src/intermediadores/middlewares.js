const campoVazio = (req, res, next) => {
    const { nome } = req.body;
    try {
        if (nome == '' || !nome) {
            return res.status(400).json({ "mensagem": "O campo nome é obrigatório." })
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


module.exports = {
    campoVazio,
};