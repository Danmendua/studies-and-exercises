const fs = require('fs/promises');
const instanciaAxios = require("../api");
const empresas = require('../dados/empresas.json')


const buscarDados = async (req, res) => {
    const { dominioEmpresa } = req.query;
    if (!dominioEmpresa) {
        return res.status(400).json({ error: 'O parâmetro "dominioEmpresa" é obrigatório' });
    }
    try {
        const { data: empresa } = await instanciaAxios.get(`/?domain=${dominioEmpresa}`);

        if (empresa && empresa.name) {

            const dadosEmpresas = JSON.parse(await fs.readFile('./src/dados/empresas.json'));

            dadosEmpresas.push(empresa);

            await fs.writeFile('./src/dados/empresas.json', JSON.stringify(dadosEmpresas, null, 2))
        }

        return res.json(empresa);
    } catch (error) {
        if (error.response) {
            return res
                .status(400)
                .json({ mensagem: error.response.data.error.message })
        }
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = {
    buscarDados
}