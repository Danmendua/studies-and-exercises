const { banco, contas } = require('../bancodedados');

const autentificacao = (req, res, next) => {
    try {
        const senhaAdmin = banco.senha;
        const acesso = req.query.senha_banco;
        if (acesso === senhaAdmin) {
            next();
        } else {
            res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const dadosIguais = (req, res, next) => {
    try {
        const { cpf, email } = req.body;
        if (contas.find((conta) => conta.usuario.cpf === cpf || conta.usuario.email === email)) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!' });
        } else {
            next();
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const isNaN = (req, res, next) => {
    try {
        const { numeroConta } = req.params;
        if (Number.isInteger(Number(numeroConta))) {
            next();
        } else {
            return res.status(400).json({ mensagem: 'Numero da conta deve ser um número válido.' });
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const camposVazios = (req, res, next) => {
    try {
        const tudoInformado = req.body;
        if (Object.values(tudoInformado).some(campo => (campo === null || campo === undefined) || (typeof campo === 'string' && campo.trim() === ''))) {
            return res.status(400).json({ mensagem: 'É necessário preencher todos os campos' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const dadosDuplicados = (req, res, next) => {
    try {
        const { cpf, email } = req.body;
        const numeroContaAtualizando = Number(req.params.numeroConta);
        const contaExistente = contas.find((conta) => (conta.usuario.cpf === cpf || conta.usuario.email === email) && conta.numero !== numeroContaAtualizando);

        if (contaExistente) {
            return res.status(400).json({ mensagem: 'Já existe uma conta com o CPF ou e-mail informado' });
        } else {
            next();
        }
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const acharConta = (req, res, next) => {
    try {
        const { numeroConta } = req.params;
        const contaAtual = contas.find((conta) => conta.numero === Number(numeroConta));
        if (!contaAtual) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const contaZerada = (req, res, next) => {
    try {
        const { numeroConta } = req.params;
        const contaAtual = contas.find((conta) => conta.numero === Number(numeroConta));

        if (contaAtual.saldo !== 0) {
            return res.status(400).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const acharContaPeloBody = (req, res, next) => {
    try {
        const { numero_conta } = req.body;
        const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
        if (!contaAtual) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const valorNegativo = (req, res, next) => {
    try {
        const { valor } = req.body;
        if (valor <= 0) {
            return res.status(400).json({ mensagem: `Não é possivel fazer a ação com o valor ${valor} (zero ou negativo)` });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const verificarSenhaBody = (req, res, next) => {
    try {
        const { numero_conta, senha } = req.body;
        const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
        if (contaAtual.usuario.senha !== senha) {
            return res.status(401).json({ mensagem: 'A senha da conta informada é inválida!' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };

};

const verificarValorSaque = (req, res, next) => {
    try {
        const { numero_conta, valor, senha } = req.body;
        const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
        if (contaAtual.saldo < valor) {
            return res.status(400).json({ mensagem: `Valor indisponível. Saldo atual: ${contaAtual.saldo}` });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};


const verificadorTransferencia = (req, res, next) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body;
    const contaOrigem = contas.find((conta) => conta.numero === Number(numero_conta_origem));
    const contaDestino = contas.find((conta) => conta.numero === Number(numero_conta_destino));
    try {
        if (!contaOrigem) {
            return res.status(404).json({ mensagem: 'Conta de origem não encontrada' });
        } else if (contaOrigem.usuario.senha !== senha) {
            return res.status(401).json({ mensagem: 'A senha da conta informada é inválida!' });
        } else if (!contaDestino) {
            return res.status(404).json({ mensagem: 'Conta de destino não encontrada' });
        } else if (contaOrigem.saldo < valor) {
            return res.status(400).json({ mensagem: `Valor indisponível. Saldo atual: ${contaOrigem.saldo}` });
        } next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const verificacoesURL = (req, res, next) => {
    const { numero_conta, senha } = req.query;
    const contaAtual = contas.find((conta) => conta.numero === Number(numero_conta));
    try {
        if (!numero_conta || !Number.isInteger(Number(numero_conta)) || (numero_conta === null || senha === undefined) || (typeof numero_conta === 'string' && numero_conta.trim() === '')) {
            return res.status(404).json({ mensagem: 'Parametro da conta não informado ou contém erro' });
        } else if (!senha || !Number.isInteger(Number(senha)) || (senha === null || senha === undefined) || (typeof senha === 'string' && numero_conta.trim() === '')) {
            return res.status(404).json({ mensagem: 'Parametro da senha não informado' });
        } else if (!contaAtual) {
            return res.status(404).json({ mensagem: 'Conta bancária não encontada!' });
        } else if (contaAtual.usuario.senha !== senha) {
            return res.status(401).json({ mensagem: 'A senha da conta informada é inválida!' });
        }
        next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    };
};

const excluirConta = (req, res, next) => {
    const { numeroConta } = req.params;
    const indiceContaExcluir = contas.findIndex((conta) => conta.numero.toString() === numeroConta);
    try {
        if (indiceContaExcluir === -1) {
            return res.status(404).json({ mensagem: 'Conta não encontrada' });
        } next();
    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro: ${erro.message}` });
    }
};

module.exports = {
    autentificacao,
    dadosIguais,
    camposVazios,
    dadosDuplicados,
    isNaN,
    acharConta,
    contaZerada,
    acharContaPeloBody,
    valorNegativo,
    verificarSenhaBody,
    verificarValorSaque,
    verificadorTransferencia,
    verificacoesURL,
    excluirConta
};