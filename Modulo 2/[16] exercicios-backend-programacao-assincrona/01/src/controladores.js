const produtos = require('./bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground');

const listagem = (req, res) => {
    res.status(200).json(produtos);
};


const obterProdutoId = (req, res) => {
    const { idProduto } = req.params;
    const produto = produtos.find((produto) => produto.id === Number(idProduto));
    if (isNaN(idProduto)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    } else if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }
    return res.status(200).json(produto);
};

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    const produto = produtos.find((produto) => produto.id === Number(idProduto));
    if (isNaN(idProduto)) {
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' })
    } else if (!produto) {
        return res.status(404).json({ mensagem: 'Produto não encontrado' })
    }
    const estado = await getStateFromZipcode(cep)
    let frete = 0.12 * produto.valor;
    if (['BA', 'SE', 'AL', 'PE', 'PB'].includes(estado)) {
        frete = 0.1 * produto.valor;
    } else if (['SP', 'RJ'].includes(estado)) {
        frete = 0.15 * produto.valor;
    }
    res.status(201).json({ produto, estado, frete });
};

module.exports = {
    listagem,
    obterProdutoId,
    calcularFrete
}