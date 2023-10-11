const { contas } = require('../bancodedados');
let contador = 1

const listarDados = (req, res) => {
    try {
        res.status(200).json(contas);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    try {
        const novaConta = {
            numero: contador++,
            saldo: 0,
            usuario: {
                nome,
                cpf,
                data_nascimento,
                telefone,
                email,
                senha
            }
        }
        contas.push(novaConta);
        return res.sendStatus(204);
    } catch {
        return res.status(500).json({ mensagem: `Erro: ${error.message}` });
    };
};

const atualizarDados = (req, res) => {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
    const contaAtual = contas.find((conta) => conta.numero === Number(numeroConta));
    try {
        contaAtual.usuario.nome = nome;
        contaAtual.usuario.cpf = cpf;
        contaAtual.usuario.data_nascimento = data_nascimento;
        contaAtual.usuario.telefone = telefone;
        contaAtual.usuario.email = email;
        contaAtual.usuario.senha = senha;
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const deletarConta = (req, res) => {
    const { numeroConta } = req.params;
    const indiceContaExcluir = contas.findIndex((conta) => conta.numero.toString() === numeroConta);
    try {
        contas.splice(indiceContaExcluir, 1);
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    }
};


module.exports = {
    listarDados,
    criarConta,
    atualizarDados,
    deletarConta
};