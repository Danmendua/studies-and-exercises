const { buscarEndereco } = require('utils-playground');
const fs = require('fs/promises');
const enderecos = require('../enderecos.json');

const consultarDados = async (req, res) => {
    const { cep } = req.params
    const cepFormatado = cep.replace('-', '');
    const enderecoEncontrado = enderecos.find(endereco => endereco.cep.replace('-', '') === cepFormatado);
    try {
        if (enderecoEncontrado) {
            res.status(200).json(enderecoEncontrado);
            return;
        } else {
            const buscarCep = await buscarEndereco(cep);
            const listaEnderecos = await fs.readFile('./src/enderecos.json');
            const parseLista = JSON.parse(listaEnderecos)
            parseLista.push(buscarCep);
            await fs.writeFile('./src/enderecos.json', JSON.stringify(parseLista));
            return res.status(201).json(parseLista)
        }
    } catch (erro) {
        res.status(400).json({ Erro: `${erro}` })
    }
}

module.exports = consultarDados