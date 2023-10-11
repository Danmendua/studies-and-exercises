let { contas, saques, depositos, transferencias } = require('../bancodedados');

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;
    const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
    const dataDeposito = new Date();
    contaAtual.saldo += valor;
    try {
        const extrato = {
            data: dataDeposito.toLocaleString(),
            numero_conta,
            valor,
        }
        depositos.push(extrato);
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const sacar = (req, res) => {
    const { numero_conta, valor } = req.body;
    const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
    const dataSaque = new Date();
    contaAtual.saldo -= valor;
    try {
        const extrato = {
            data: dataSaque.toLocaleString(),
            numero_conta,
            valor,
        }
        saques.push(extrato);
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body;
    const contaOrigem = contas.find((conta) => conta.numero === Number(numero_conta_origem));
    const contaDestino = contas.find((conta) => conta.numero === Number(numero_conta_destino));
    const dataTransferencia = new Date();
    try {
        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;
        const extrato = {
            data: dataTransferencia.toLocaleString(),
            numero_conta_origem,
            numero_conta_destino,
            valor,
        }
        transferencias.push(extrato);
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const saldo = (req, res) => {
    const { numero_conta } = req.query;
    const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
    try {
        return res.status(200).json({ saldo: contaAtual.saldo });
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const extrato = (req, res) => {
    const { numero_conta } = req.query;
    try {
        const extrato = {
            depositos: depositos.filter((deposito) => deposito.numero_conta === numero_conta),
            saques: saques.filter((saque) => saque.numero_conta === numero_conta),
            transferenciasEnviadas: transferencias.filter((transferencia) => transferencia.numero_conta_origem === numero_conta),
            transferenciasRecebidas: transferencias.filter((transferencia) => transferencia.numero_conta_destino === numero_conta)
        }
        return res.status(200).json(extrato);
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};



module.exports = {
    depositar,
    sacar,
    transferir,
    saldo,
    extrato
}